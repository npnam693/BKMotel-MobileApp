import {Image, Text, View, StyleSheet, Dimensions} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';
import IconOcticons from 'react-native-vector-icons/Octicons';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const formatNameAddress = (name) =>{
    if (name.substring(0, 9) === 'Thành phố') 
        return name.substring(10)
    if (name.substring(0, 4) === 'Tỉnh') 
        return name.substring(5)
    return name
}

export default function RoomItem({data}){
    if (data != undefined) 
        return (
            <View style = {{marginBottom: 18}}>
                <Image source = {{ uri: data.image[0]}}
                    style={{width: 352, height: 352, borderRadius: 20, alignItems:'center', justifyContent: 'center', position: 'relative',}} 
                />
                <View style ={{position:'absolute', right: 15, top: 15}}>
                    <Icon name='heart-o' size = {24} color = 'white'/>
                </View>
                <View style = {{ margin: 20, marginBottom: 0, marginTop: 4}}>    
                    <View style = {styles.header}>
                        <Text style = {styles.locationP}>{formatNameAddress(data.district)}, {formatNameAddress(data.province)}</Text>
                        <View style = {styles.point}>
                            <Text style = {styles.fontSize12}>{(data.ratingPoint != null) ? data.ratingPoint.$numberDecimal : 0  }</Text> 
                            <Icon name = 'star' size = {14}  color = '#00a699' />
                        </View> 
                    </View>
                    <View style = {styles.rowComponent}>
                        <View style = {{width: 24}}><Icon name = 'money' size = {16}/></View>
                        <Text style = {styles.fontSize12}>{data.price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})} /tháng </Text>
                    </View>
                    <View style = {styles.rowComponent}>
                        <View style = {{width: 24}}><IconOcticons name = 'home' size = {16}/></View>
                        <Text style = {styles.fontSize12}>{data.area}m2</Text>
                    </View>
                </View>
            </View>
        )
}

const styles = StyleSheet.create({
    header: {
        width: 352 - 40,
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
  