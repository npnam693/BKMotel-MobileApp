import { ScrollView, StyleSheet, Text, View, Image, StatusBar, TouchableOpacity} from 'react-native';
import React, { useState, useEffect } from 'react';

import RoomItem from '../components/RoomItem';
import SearchBar from '../components/SearchBar';
import axios from 'axios'
import { ScreenWidth } from '@rneui/base';
import { useSelector } from 'react-redux';
import { loginSucessSelector } from '../redux/selectors';
export default function Home({ navigation }) {
  const [data, setData] = useState([]);
  const userData = useSelector(loginSucessSelector)
  
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
    <View style = {styles.container}>
      <View style = {styles.containerSearch}>
        <SearchBar />
      </View>
      <ScrollView >
        {
          data.map((room, i) => {
            if (room !== undefined) return (
              <TouchableOpacity key = {i} onPress = {() => navigation.navigate('Detail', {data : room})}>
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
  containerSearch: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingBottom: 10,
    width: ScreenWidth,
    display: 'flex',
    alignItems: 'center',
  }
});
