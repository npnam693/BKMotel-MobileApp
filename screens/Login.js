import { Text, View, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import { Input, CheckBox, Button} from '@rneui/themed';
import { ScreenHeight, ScreenWidth } from "@rneui/base";

export default function Login(){
    return (
        <View style = {styles.container}>
            <View>
                <Text style = {styles.BKLogo}>BK
                    <Text style = {styles.MotelLogo}>MOTEL</Text>
                </Text>
            </View>

            <Text style = {styles.welcomeText}>Chào mừng bạn đến với 
                <Text style = {[styles.BKLogo, styles.welcomeText]}> BK</Text>
                <Text style = {[styles.MotelLogo, styles.welcomeText]}>Motel</Text>
            .</Text>
            
            <Input placeholder='Nhập email / Tên đăng nhập' 
                containerStyle = {{
                    borderRadius: 5,
                    width: ScreenWidth - 60,
                    // borderColor: 'red',
                    borderWidth: 1,
                    borderColor: '#c4c4c4',
                    marginBottom: 10
                }}
                errorStyle  = {{
                    display: 'none',
                }}
                inputContainerStyle = {{
                    borderBottomColor: 'white',
                }}
                inputStyle = {{
                    color: 'red',
                    fontFamily: 'JosefinSans-Regular',
                    fontSize: 14
                }}
            />
            
            <Input placeholder='Nhập mật khẩu' 
                containerStyle = {{
                    borderRadius: 5,
                    width: ScreenWidth - 60,
                    // borderColor: 'red',
                    borderWidth: 1,
                    borderColor: '#c4c4c4',
                    marginBottom: 10
                }}
                errorStyle  = {{
                    display: 'none',
                }}
                inputContainerStyle = {{
                }}
                inputStyle = {{
                    color: 'red',
                    fontFamily: 'JosefinSans-Regular',
                    fontSize: 14
                }}
            />
            
            


            <View style = {{flexDirection: 'row', alignItems: 'center', 
                            justifyContent: 'space-between', width: ScreenWidth - 60}}>
                <Text style={styles.forgetPass}>Quên mật khẩu</Text>
                <CheckBox title={'Ghi nhớ mật khẩu'}
                    textStyle = {{
                        paddingRight: -10,
                        marginLeft: 0,
                        padding: 0,
                        fontWeight: '500',
                    }}
                    containerStyle = {{
                        margin: 0,
                        left: 30,
                        alignItems: 'center'
                    }} 
                />
            </View>
            
            <Button
              title={'Đăng nhập'}
              containerStyle={{
                width: 150,
                marginHorizontal: 50,
                marginVertical: 10,
                }}
                buttonStyle={{
                    backgroundColor: '#00a699',
                    borderRadius: 20,
                    marginBottom: 20,
              }}
            />


            <Text>Bạn chưa có tài khoản ?</Text>


            <Button
              title="Đăng ký tài khoản"
              buttonStyle={{
                borderColor: '#8cbae8',
                borderWidth: 1,
                borderRadius: 20,
              }}
              type="outline"
              titleStyle={{ color: '#1488db' }}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    BKLogo: {
        fontSize: 28, 
        color: '#1488db', 
        fontWeight: '900'
    },
    MotelLogo: {
        fontSize: 28, 
        color: '#00a699', 
        fontWeight: '700'
    },
    welcomeText: {
        fontFamily: 'JosefinSans-Regular',
        fontSize: 16,
        marginBottom: 30,
    },
    forgetPass: {
        color: '#00a699',
        // width: ScreenWidth - 60,
        fontFamily: 'JosefinSans-Regular',
        fontSize: 14,
    },
    savePass: {
        fontSize: 14,
        fontFamily: 'JosefinSans-Regular',
        marignLeft: 0,
    }


  });
  