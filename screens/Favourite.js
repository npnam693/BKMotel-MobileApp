import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import { GetUserData } from "../tools/GetUserData";
import { ScreenWidth } from "@rneui/base";
import { useDispatch } from "react-redux";
import { addFavourite } from "../redux/actions";
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from "axios";

import { checkInFavourite } from "../components/RoomItem";
import { formatNameAddress, vndFormat } from "../components/RoomItem";



export default function Favourite({ navigation }){
    const dispatch = useDispatch()
    
    const userData = GetUserData()

    const config = userData ? {
        headers: {
            Authorization: `Bearer ${userData.data.token}`
        }
    } : {}  
    
    const handleClickLike = (data) => {
        axios.put('https://bkmotel-api.onrender.com/api/rooms/favourites/add', {
            roomId: data._id
        }, config)
        .then(response => {
            dispatch(addFavourite(response.data.favourites))
        })
        .catch(error => {
            console.log('huhu', error)
        })
    }
    return (
        <View style = {styles.container}>
        <ScrollView>
            {   
                userData.data.favourites.map((room, i ) => (
                    <TouchableOpacity key={i} onPress = {() => navigation.navigate('Detail', {data : room})}>
                        <View style = {styles.itemContainer} >
                            <Image 
                                source={{uri: room.image[0]}}
                                style = {{width: 100 , height: 100, borderRadius: 6, margin: 6}}
                            />
                            <View style={{flex: 1, padding: 16}}>
                                <Text numberOfLines = {1} style = {{
                                    fontFamily: 'Inter-SemiBold',
                                }}>{room.title}</Text>
                                <Text style = {{
                                    fontFamily: 'Inter-Medium',
                                    fontSize: 12
                                }}>{formatNameAddress(room.district)}, {formatNameAddress(room.province)}</Text>
                                
                                <View style={{flexDirection: 'column', justifyContent:'space-between', marginTop: 'auto'}}>
                                    
                                    <Text style = {{
                                        fontFamily: 'Inter-Medium',
                                        fontSize: 12
                                    }}>{room.area}m2</Text>
                                    <Text style = {{
                                        fontFamily: 'Inter-SemiBold',
                                        fontSize: 12,
                                        color: '#00a699'
                                    }}>{vndFormat(room.price)}đ</Text>
                                </View>
                            </View> 
                            <TouchableOpacity onPress={() => handleClickLike(room)}>
                                <View style ={{position:'absolute', right: 15, bottom: 15, 
                                    padding: 6, backgroundColor: "#00a699", borderRadius: 6
                                }}>
                                    <Text>Unlike</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                ))
            }
        </ScrollView>
        </View>
    )  
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        position: 'relative'
    },
    itemContainer: {
        width: ScreenWidth - 30,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 6,
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 4,
    }
})
