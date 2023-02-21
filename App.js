import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';

import RoomItem from './components/RoomItem';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text style = {{fontSize: 32, color: '#1488db', fontWeight: '900'}}>BK<Text style = {{fontSize: 32, color: '#00a699', fontWeight: '700'}}>MOTEL</Text></Text>
    //   <StatusBar style="auto" />
    // </View>
    <View style = {styles.container}>
      <ScrollView >
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
