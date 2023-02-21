import {Image, Text, View, StyleSheet} from 'react-native'

export default function RoomItem(){
    return (
        <View>
            <Image source = {{ uri: 'https://i1-dulich.vnecdn.net/2021/08/09/4-2190-1628506128.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=9dx56HZNIXnExqtLJSL_UA'}}
                style={{width: 352, height: 352, borderRadius: 20, flex: 1, alignItems:'center', justifyContent: 'center'}} 
            />
            <View style = {styles.header}>
                <Text style = {styles.locationP}>Quận Ba Đình, TP.HCM</Text>
                                

                <Text>4.8</Text>
            </View>
          <Text>75m2</Text>
          <Text>24.000.000₫ / tháng</Text>
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
    locationP: {
        fontSize: 16,
        fontWeight: '600'
    } 
  });
  