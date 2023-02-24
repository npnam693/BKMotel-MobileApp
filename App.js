import { ScrollView, StyleSheet, Text, View, Image, StatusBar} from 'react-native';
import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Home from './screens/Home';
import Detail from './screens/Detail';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        'JosefinSans-Medium': require('./assets/fonts/JosefinSans-Medium.ttf'),
        'JosefinSans-Regular': require('./assets/fonts/JosefinSans-Regular.ttf'),
        'JosefinSans-Bold': require('./assets/fonts/JosefinSans-Bold.ttf'),
        'JosefinSans-SemiBold': require('./assets/fonts/JosefinSans-SemiBold.ttf'),
        'Inter-Medium': require('./assets/fonts/Inter-Medium.ttf'),
        'Inter-SemiBold': require('./assets/fonts/Inter-SemiBold.ttf'),
        'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
        'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf')
      });
      setFontLoaded(true);
    };
    loadFont();
  }, []);

  if (!fontLoaded) {
    return <Text>Loading...</Text>;
  }

  
  return (
    //   <Text style = {{fontSize: 32, color: '#1488db', fontWeight: '900'}}>BK<Text style = {{fontSize: 32, color: '#00a699', fontWeight: '700'}}>MOTEL</Text></Text>
    // </View>
      // <View style={styles.container}>
      // <StatusBar hidden={true}/>

      //   <Home/>
      //   {/* <Detail /> */}
      // </View>
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Detail" options={({ route }) => ({ title: route.params.data.title})} >
          {(props) => <Detail {...props}/>}
        </Stack.Screen>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
