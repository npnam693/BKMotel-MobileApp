import { ScrollView, StyleSheet, Text, View, Image, StatusBar, TouchableOpacity} from 'react-native';
import React, { useState, useEffect } from 'react';

import RoomItem from '../components/RoomItem';
import SearchBar from '../components/SearchBar';
import axios from 'axios'

export default function Home({ navigation }) {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    axios.get('https://bkmotel-api.onrender.com/api/rooms')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    // <View style={styles.container}>
    //   <Text style = {{fontSize: 32, color: '#1488db', fontWeight: '900'}}>BK<Text style = {{fontSize: 32, color: '#00a699', fontWeight: '700'}}>MOTEL</Text></Text>
    // </View>


    
    <View style = {styles.container}>
      <SearchBar />
      <ScrollView >
        {
          data.map((room, i) => {
            if (room !== undefined) return (
              <TouchableOpacity key = {i} onPress = {() => navigation.navigate('Detail')}>
                <RoomItem data = {room}/>
              </TouchableOpacity>
            )
          })
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
