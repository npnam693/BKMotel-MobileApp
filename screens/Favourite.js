import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import { GetUserData } from "../tools/GetUserData";
import { ScreenWidth } from "@rneui/base";
import Icon from 'react-native-vector-icons/FontAwesome';



import Login from "./Login";
import { checkInFavourite } from "../components/RoomItem";
import { formatNameAddress, vndFormat } from "../components/RoomItem";
export default function Favourite({ navigation }){
    let userData = GetUserData()
    if (userData != null) {
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
                                {
                                checkInFavourite(userData, room) ? 
                                <View style ={{position:'absolute', right: 15, bottom: 15, borderColor: 'white'}}>
                                    <Icon name='heart' size = {20} color = '#00a699'/>
                                </View>
                                :
                                <View style ={{position:'absolute', right: 15, top: 15, borderColor: 'white'}}>
                                    <Icon name='heart-o' size = {20} color = 'white'/>
                                </View>
                                }
                            </View>
                            
                        </TouchableOpacity>
                        
                    ))
                }
 
            </ScrollView>
            </View>
        )        
    }
    else {
        return (<Login />)
    }
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
