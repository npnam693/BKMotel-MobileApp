import { useState, useEffect } from 'react';
import {Image, Text, View, StyleSheet, Dimensions, TouchableOpacity} from 'react-native'

import { AirbnbRating } from '@rneui/themed';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import axios from 'axios';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

import { formatNameAddress, vndFormat } from '../components/RoomItem';

export default function Detail({ route, navigation }){
    const data = route.params.data
    const [imgPreview, setImgPreview] = useState(data.image[0])
    const [roomData, setRoomData] = useState()

    useEffect(() => {
      axios.get(`https://bkmotel-api.onrender.com/api/rooms/${data._id}`)
        .then(res => {
          setRoomData(res.data)
        })
        .catch(err => console.log.apply(err))
    }, [])
    return (
        <View>
            <View  style = {styles.imageContainer}>
                <Image source = {{ uri: imgPreview}}
                    style={{width: '100%', height: 320, position: 'relative', 
                        borderBottomLeftRadius: 16, borderBottomRightRadius: 16}} 
                />
                <View style = {styles.quickInfo}>
                    <View style = {[styles.flexRow, {marginBottom: 2}]}>
                        <Text style = {{fontSize: 16, fontFamily: 'Inter-Medium', color: '#757d86'}}>{formatNameAddress(data.district)}, {formatNameAddress(data.province)}</Text>
                        <Text style = {{fontSize: 14, fontFamily: 'Inter-Medium', color: 'black'}}>{data.area}m2</Text>
                    </View>
                    
                    <View style = {styles.flexRow}>
                        <Text style = {{fontSize: 14, fontFamily: 'Inter-Medium', color: '#1488db'}}>₫ {vndFormat(data.price)}/tháng </Text>
                        <View style = {styles.flexRow}>
                            <AirbnbRating  isDisabled={true} selectedColor = '#00a699' showRating={false} size = {12} defaultRating ={data.ratingPoint.$numberDecimal}/>
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
                    fontSize: 16,
                    fontFamily: 'Inter-Bold',
                    color: '#00a699'
                }}>Thông tin liên lạc</Text>
                <View style={{flexDirection:'row', width: screenWidth - 40}}>
                    <View style = {styles.contact}>
                        <View style = {{display: 'flex', flexDirection: 'row'}}>
                            {
                              roomData ? 
                                <Image source = {{ uri: roomData.rooms.creator.avatar}}
                                    style={{ width: 60, height: 60, borderRadius: 12, marginRight:12}} 
                                />
                              : <View></View>

                            }
                            
                            {
                              roomData ? 
                                <View style = {{alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent:'space-around'}}>
                                  <Text style={{
                                      fontSize: 16,
                                      fontFamily: 'Inter-Bold',
                                      alignItems: 'center'
                                  }}> {roomData.rooms.creator.name} </Text>
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
                               : <View></View>
                            }

                            
                        </View>
                    </View>
                </View>
                <View style={{ width: screenWidth - 40, marginTop: 10 }}>
                    <Text style = {{color: '#666'}}> 
                      {
                        roomData ? roomData.rooms.description : ''
                      }
                    </Text>
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
        height: 60,
        width: screenWidth-60,
        position: 'absolute',
        bottom: 15,
        padding: 6,
        paddingLeft: 20,
        paddingRight: 20,
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