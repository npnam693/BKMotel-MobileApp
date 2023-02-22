import {Image, Text, View, ScrollView, StyleSheet, Dimensions} from 'react-native'
import { AirbnbRating } from '@rneui/themed';


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

import RoomItem from '../components/RoomItem'
export default function Detail(){
    return (
        <View>
            <View  style = {styles.imageContainer}>
                <Image source = {{ uri: 'https://i1-dulich.vnecdn.net/2021/08/09/4-2190-1628506128.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=9dx56HZNIXnExqtLJSL_UA'}}
                    style={{width: '100%', height: 400, position: 'relative', 
                        borderRadius: 16}} 
                />
                <View style = {styles.quickInfo}>
                    <View style = {[styles.flexRow, {marginBottom: 8}]}>
                        <Text style = {{fontSize: 16, fontFamily: 'Inter-Medium', color: '#757d86'}}>Quận Gò Vấp, TP.HCM</Text>
                        <Text style = {{fontSize: 14, fontFamily: 'Inter-Medium', color: 'black'}}>50m2</Text>
                    </View>
                    
                    <View style = {styles.flexRow}>
                        <Text style = {{fontSize: 14, fontFamily: 'Inter-Medium', color: '#1488db'}}>₫ 24.000.000</Text>
                        <View style = {styles.flexRow}>
                            <AirbnbRating isDisabled={true} selectedColor = '#00a699' showRating={false} size = {15} defaultRating ={4.5}/>
                            <Text 
                                style = {{fontSize: 14, fontFamily: 'Inter-Medium', 
                                            color: 'black', marginLeft:4}}
                            >4.5</Text>
                        </View>    
                    </View>
                </View>
            </View>
            <View style = {styles.previewContainer}>
                <Text style = {{
                    fontSize: 16,
                    fontFamily: 'Inter-SemiBold'
                }}>Preview</Text>
                <View style = {[styles.flexRow, {justifyContent: 'flex-start'}]}>
                    <Image source = {{ uri: 'https://i1-dulich.vnecdn.net/2021/08/09/4-2190-1628506128.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=9dx56HZNIXnExqtLJSL_UA'}}
                        style={styles.imgPreview} 
                    />
                    <Image source = {{ uri: 'https://cdn.tcdulichtphcm.vn/upload/2-2022/images/2022-06-11/1654920508-362682679.jpg'}}
                        style={styles.imgPreview} 
                    />
                    <Image source = {{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqB2PWkODiLDub7gzUta-1h7H3NPuodTbTsaXGgFKr8cUHtqzQFmSWk3ovqJofa0NuhaY&usqp=CAU'}}
                        style={styles.imgPreview} 
                    />
                                        <Image source = {{ uri: 'https://i1-dulich.vnecdn.net/2021/08/09/4-2190-1628506128.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=9dx56HZNIXnExqtLJSL_UA'}}
                        style={styles.imgPreview} 
                    />
                    <Image source = {{ uri: 'https://cdn.tcdulichtphcm.vn/upload/2-2022/images/2022-06-11/1654920508-362682679.jpg'}}
                        style={styles.imgPreview} 
                    />

                </View>
            </View>
        
        </View>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    quickInfo: {
        borderRadius: 16,
        backgroundColor: 'white',
        height: 80,
        width: screenWidth-30,
        position: 'absolute',
        bottom: 15,
        padding: 16,
    },
    flexRow: {
        display:'flex', 
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    previewContainer: {
        width: '100%',
        margin: 20,
        marginTop: 6,
    },
    imgPreview: {
        width: 80, 
        height: 80, 
        position: 'relative', 
        borderRadius: 4,
        marginRight:6
    }
  });