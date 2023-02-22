import {Image, Text, View, StyleSheet} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';
import IconOcticons from 'react-native-vector-icons/Octicons';


export default function RoomItem(){
    return (
        <View style = {{marginBottom: 18}}>
            <Image source = {{ uri: 'https://i1-dulich.vnecdn.net/2021/08/09/4-2190-1628506128.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=9dx56HZNIXnExqtLJSL_UA'}}
                style={{width: 352, height: 352, borderRadius: 20, alignItems:'center', justifyContent: 'center', position: 'relative',}} 
            />
            <View style ={{position:'absolute', right: 15, top: 15}}>
                <Icon name='heart-o' size = {24} color = 'white'/>
            </View>
            <View style = {{ margin: 20, marginBottom: 0, marginTop: 4}}>    
                <View style = {styles.header}>
                    <Text style = {styles.locationP}>Quận Ba Đình, TP.HCM</Text>
                    <View style = {styles.point}>
                        <Text style = {styles.fontSize12}>4.8</Text> 
                        <Icon name = 'star' size = {14}  color = '#00a699' />
                    </View> 
                </View>
                <View style = {styles.rowComponent}>
                    <View style = {{width: 24}}><Icon name = 'money' size = {16}/></View>
                    <Text style = {styles.fontSize12}>24.000.000₫ / tháng</Text>
                </View>
                <View style = {styles.rowComponent}>
                    <View style = {{width: 24}}><IconOcticons name = 'home' size = {16}/></View>
                    <Text style = {styles.fontSize12}>75m2</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    rowComponent: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    locationP: {
        fontSize: 16,
        fontFamily:'Inter-SemiBold',
    },
    point: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: 42
    },
    fontSize12: {
        fontSize: 14,
        marginHorizontal: 6,
        fontFamily:'Inter-Medium',
    },
  });
  