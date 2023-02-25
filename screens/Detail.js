import {Image, Text, View, ScrollView, StyleSheet, Dimensions, TouchableOpacity} from 'react-native'
import { AirbnbRating } from '@rneui/themed';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import { useState } from 'react';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

import { formatNameAddress, vndFormat } from '../components/RoomItem';




export default function Detail({ route, navigation }){
    const data = route.params.data
    const [imgPreview, setImgPreview] = useState(data.image[0])
    return (
        <View>
            <ScrollView>
            <View  style = {styles.imageContainer}>
                <Image source = {{ uri: imgPreview}}
                    style={{width: '100%', height: 400, position: 'relative', 
                        borderBottomLeftRadius: 16, borderBottomRightRadius: 16}} 
                />
                <View style = {styles.quickInfo}>
                    <View style = {[styles.flexRow, {marginBottom: 8}]}>
                        <Text style = {{fontSize: 16, fontFamily: 'Inter-Medium', color: '#757d86'}}>{formatNameAddress(data.district)}, {formatNameAddress(data.province)}</Text>
                        <Text style = {{fontSize: 14, fontFamily: 'Inter-Medium', color: 'black'}}>{data.area}m2</Text>
                    </View>
                    
                    <View style = {styles.flexRow}>
                        <Text style = {{fontSize: 14, fontFamily: 'Inter-Medium', color: '#1488db'}}>₫ {vndFormat(data.price)}/tháng </Text>
                        <View style = {styles.flexRow}>
                            <AirbnbRating  isDisabled={true} selectedColor = '#00a699' showRating={false} size = {15} defaultRating ={data.ratingPoint.$numberDecimal}/>
                            <Text 
                                style = {{fontSize: 14, fontFamily: 'Inter-Medium', 
                                            color: 'black', marginLeft:4}}
                            >{(data.ratingPoint != null) ? data.ratingPoint.$numberDecimal : 0  }</Text>
                        </View>    
                    </View>
                </View>
            </View>
            <View style = {styles.previewContainer}>
                <Text style = {{
                    fontSize: 16,
                    fontFamily: 'Inter-SemiBold',
                    color:'#333'
                }}>Preview</Text>
                <View style = {[styles.flexRow, {justifyContent: 'flex-start'}]}>
                    {data.image.map((img,i) => { return (
                        <TouchableOpacity key = {i} onPress={() => setImgPreview(img)} >
                            <Image source = {{uri: img}}
                                style={styles.imgPreview} 
                            />
                        </TouchableOpacity>
                    )
                    })}
                </View>
            </View>

            <View style = {[styles.previewContainer, {marginTop:10}]}>
                <Text  style = {{
                    fontSize: 20,
                    fontFamily: 'Inter-Bold'
                }}>Biệt Thự Venity Sky</Text>
                <View style={{ width: screenWidth - 40 }}>
                    <Text style = {{color: '#666'}}> 
                        Biệt thự Gương sang trọng và có mọi thứ bạn có thể mong đợi từ một chỗ ở thông minh, 
                        cao cấp của thế kỷ 21. Nó gây ấn tượng với việc sử dụng các vật liệu hiện đại và đặc 
                        biệt, hoàn thiện với sự chú ý tối đa đến các chi tiết và chất lượng, công nghệ sáng 
                        tạo và các thiết bị cao cấp.
                    </Text>
                </View>
            </View>

            <View style = {[styles.previewContainer, {marginTop:10}]}>
                <Text  style = {{
                    fontSize: 16,
                    fontFamily: 'Inter-Bold',
                    color: '#00a699'
                }}>Thông tin liên lạc</Text>
                <View style={{flexDirection:'row', width: screenWidth - 40}}>
                    <View style = {styles.contact}>
                        <View style = {{display: 'flex', flexDirection: 'row'}}>
                            <Image source = {{ uri: 'https://i0.wp.com/lifeasanotaku.com/wp-content/uploads/2022/05/Japanese-Fans-Name-SPY-x-FAMILY-the-TV-Anime-They039re-Most-Excited-for-in-Spring-2022.jpg?fit=1024%2C576&ssl=1'}}
                                style={{ width: 60, height: 60, borderRadius: 12, marginRight:12}} 
                            />
                            <View style = {{alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent:'space-around'}}>
                                <Text style={{
                                    fontSize: 16,
                                    fontFamily: 'Inter-Bold',
                                    alignItems: 'center'
                                }}> Nguyễn Phi Nam </Text>
                                <View style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexDirection: 'row',
                                    width: '100%'
                                }}>
                                    <IconAntDesign name = "checkcircleo" color="#00a699" size={14} />
                                    <Text style = {{color:"#00a699", marginLeft:6}}>Đã xác minh</Text>
                                </View>
                                {/* <Text>nam.nguyenphi0693@hcmut.edu.vn</Text>
                                <Text>0353390693</Text> */}
                            </View>
                        </View>
                    </View>
                </View>
            </View>


            </ScrollView>

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
        marginBottom: 0,
    },
    imgPreview: {
        width: 80, 
        height: 80, 
        borderRadius: 4,
        marginRight:6
    },
    contact: {
        padding: 12,
        width: screenWidth - 40,
        // height: 100,
        marginTop: 6,
        backgroundColor: '#fff',
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
    }
  });