import { Text, View, StyleSheet, Image } from "react-native"
import { useSelector } from "react-redux"
import { loginSucessSelector } from "../redux/selectors"
import { Button } from '@rneui/themed';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ScreenWidth } from "@rneui/base";
import { useDispatch } from "react-redux";
import { logout } from "../redux/actions";


import Login from "./Login"


export default function Profile({ navigation}) {
    const dispatch = useDispatch()

    let userData = useSelector(loginSucessSelector)
    console.log(userData)
    if (userData != null) return (
        <View style = {styles.container}>
            <View style = {styles.infoContainer}>
                <Image source = {{ uri: userData.data.avatar}}
                    style={{ width: 100, height: 100, borderRadius: 1000, marginRight:12}} 
                />
                <View style = {{marginLeft: 15}}>
                    <Text style={{
                        fontSize: 20,
                        fontFamily: 'Inter-SemiBold',
                    }}>{userData.data.name}</Text>
                 
                    <Text style = {{color:"#00a699", marginLeft:6}}>Đã xác minh</Text>
                </View>
            </View>
                
            <View style = {styles.countContainer}>
                <View style = {styles.countElement}>
                    <Text style = {styles.countTitle}>My Room</Text>
                    <Text style = {[styles.numCount, {color: '#00a699'}]}>24</Text>
                </View>
                <View style = {styles.countElement}>
                    <Text style = {styles.countTitle}>My Favourite</Text>
                    <Text style = {[styles.numCount, {color: '#1488db'}]}>{userData.data.favourites.length}</Text>
                </View>
            </View>

            <View >
                <Button
                    title="My Favourite"
                    buttonStyle={{
                        width: ScreenWidth,
                        padding: 20,
                        borderColor: '#ccc'
                    }}
                    containerStyle={{
                        width: '100%',
                        alignItems: 'flex-start'
                    }}
                    titleStyle = {{
                        color: 'black',
                        fontSize: 16,
                        marginLeft: 10,
                        top: -1
                    }}
                    icon = {<Ionicons name = 'heart-circle-outline' size={28} color='#00a699' />}
                    type="outline"
                    onPress={() => navigation.navigate('Favourite')}
                />
            </View>

            <View style = {{width:ScreenWidth}}>
                <Button
                    title="My Upload"
                    buttonStyle={{
                        width: ScreenWidth,
                        padding: 20,
                        alignItems: 'flex-start',
                        borderColor: '#ccc'
                    }}
                    containerStyle={{
                        width: ScreenWidth,
                    }}
                    titleStyle = {{
                        color: 'black',
                        fontSize: 16,
                        marginLeft: 10,
                        top: -1
                    }}
                    icon = {<Ionicons name = 'cloud-done' size={24} color='#00a699' />}
                    type="outline"
                    onPress={() => navigation.navigate('Upload')}
                />
            </View>

            <Button
                title="Log out"
                buttonStyle={{
                    width: ScreenWidth,
                    padding: 20,
                    borderColor: '#ccc'
                }}
                containerStyle={{
                    alignItems: 'flex-start',
                }}
                titleStyle = {{
                    color: 'black',
                    fontSize: 16,
                    marginLeft: 10,
                    top: -1
                }}
                icon = {<Ionicons name = 'ios-exit' size={24} color='#00a699' />}
                type="outline"
                onPress = {() => {
                    dispatch(logout())
                }}
            />
        </View>
    )
    else {
        return <Login />
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,

    },
    infoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 50,
        marginTop: 50,
        marginBottom: 0,
    },
    countContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    countElement: {
        flexDirection: 'column',
        alignItems: 'center',
        borderColor: '#ccc',
        borderWidth: 1,
        width: ScreenWidth / 2
    },
    countTitle: {
        fontSize: 16,
        fontWeight: '600'
    },
    numCount: {
        fontSize: 34,
        fontWeight: '700'
    }
})