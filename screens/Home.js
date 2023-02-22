import { ScrollView, StyleSheet, Text, View, Image, StatusBar} from 'react-native';

import RoomItem from '../components/RoomItem';
import SearchBar from '../components/SearchBar';
export default function Home() {
  return (
    // <View style={styles.container}>
    //   <Text style = {{fontSize: 32, color: '#1488db', fontWeight: '900'}}>BK<Text style = {{fontSize: 32, color: '#00a699', fontWeight: '700'}}>MOTEL</Text></Text>
    // </View>
    
    <View style = {styles.container}>
      <StatusBar hidden={true}/>
      <SearchBar />
      <ScrollView >
        <RoomItem/>
        <RoomItem/>
        <RoomItem/>
        <RoomItem/>
        <RoomItem/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
