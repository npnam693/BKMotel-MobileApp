import {Image, Text, View, ScrollView, StyleSheet, StatusBar} from 'react-native'


import RoomItem from '../components/RoomItem'
export default function Detail(){
    return (
        <View style = {styles.container}>
            <Image source = {{ uri: 'https://i1-dulich.vnecdn.net/2021/08/09/4-2190-1628506128.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=9dx56HZNIXnExqtLJSL_UA'}}
                style={{width: '100%', height: 400, position: 'relative'}} 
            />
            <View style = {styles.quickInfo}>
                <Text style = {{fontSize: 16, fontFamily: 'Inter-Medium', color: '#757d86'}}>Quận Gò Vấp, TP.HCM</Text>
                <Text style = {{fontSize: 16, fontFamily: 'Inter-Medium', color: '#00a699'}}>₫ 24.000.000</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    quickInfo: {
        borderRadius: 12,
        backgroundColor: 'white',
        height: 70,
        width: 320,
        position: 'absolute',
        bottom: 10,
        padding: 8,
    }
  });