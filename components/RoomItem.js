import {Image, Text, View, StyleSheet, Dimensions} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import IconOcticons from 'react-native-vector-icons/Octicons';
import { ScreenWidth } from '@rneui/base';


export const formatNameAddress = (name) =>{
    if (name.substring(0, 9) === 'Thành phố') 
        return name.substring(10)
    if (name.substring(0, 4) === 'Tỉnh') 
        return name.substring(5)
    return name
}

export const vndFormat = (money) => {
    money = money.toString()
    let newMoney = money
    let index = 0
    for (let i = money.length - 1; i >= 0; i--){
        if (index === 2) {
            newMoney = newMoney.substring(0, i) + '.' +  newMoney.substring(i, newMoney.length)
            index = 0
        }
        else index = index + 1
    }
    return newMoney
}

export default function RoomItem({data}){
    let liked = true
    if (data != undefined) 
        return (
            <View style = {{marginBottom: 10, marginTop: 10}}>
                <Image source = {{ uri: data.image[0]}}
                    style={{width: 352, height: 300, borderRadius: 20, alignItems:'center', justifyContent: 'center', position: 'relative',}} 
                />
                {
                    liked ? 
                    <View style ={{position:'absolute', right: 15, top: 15, borderColor: 'white'}}>
                        <Icon name='heart' size = {26} color = '#00a699'/>
                    </View>
                    :
                    <View>
                        <View style ={{position:'absolute', right: 15, top: 15, opacity: 0.2, borderColor: 'white'}}>
                            <Icon name='heart' size = {24} color = 'black' borderColor= 'white'/>
                        </View>
                        <View style ={{position:'absolute', right: 15, top: 15, borderColor: 'white'}}>
                            <Icon name='heart-o' size = {26} color = 'white'/>
                        </View>
                    </View>
                }
                <View style = {styles.point}>
                    <Text style = {[styles.fontSize12,{top: -1}]}>{(data.ratingPoint != null) ? data.ratingPoint.$numberDecimal : 0  }</Text> 
                    <Icon name = 'star' size = {14}  color = '#00a699' />
                </View> 
                <View style = {{ margin: 20, marginBottom: 0, marginTop: 4}}>    
                    <View style = {styles.header}>
                        <Text style = {styles.locationP}>{formatNameAddress(data.district)}, {formatNameAddress(data.province)}</Text>
                        <Text style = {styles.titleRoom}>{data.title}</Text>
                    </View>
                    <View style = {[styles.rowComponent,{justifyContent:'space-between'}]}>
                        <View style = {styles.rowComponent}>
                            <View style = {{width: 17, top: 1}}><Icon name = 'money' size = {16}/></View>
                            <Text style = {styles.fontSize12}>{vndFormat(data.price)} / tháng </Text>
                        </View>
                        <View style = {styles.rowComponent}>
                            <View style = {{width: 16, top: 1}}><IconOcticons name = 'home' size = {15}/></View>
                            <Text style = {styles.fontSize12}>{data.area}m2</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
}
const styles = StyleSheet.create({
    header: {
        width: 352 - 40,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    },
    rowComponent: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 20,
        justifyContent: 'center',
    },
    locationP: {
        fontSize: 14,
        fontFamily:'Inter-SemiBold',
        color: '#1F1F1F'
    },
    point: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'absolute',
        backgroundColor: 'white',
        margin: 15,
        padding: 4,
        paddingRight: 8,
        borderRadius: 6
    },
    fontSize12: {
        fontSize: 16,
        marginHorizontal: 6,
        fontFamily:'JosefinSans-Regular',
        color: '#707070'
    },
    titleRoom: {
        fontSize: 16,
        fontFamily:'JosefinSans-Regular',
        color: '#707070'
    },
  });
  