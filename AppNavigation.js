import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from './screens/Home';
import Detail from './screens/Detail';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Upload from './screens/Upload';


const HomeStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();
const UploadStack = createNativeStackNavigator();
const FavouriteStack = createNativeStackNavigator();


function HomeStackScreen({ navigation }) {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <HomeStack.Screen name="Detail" options={({ route }) => ({ title: route.params.data.title})} >
          {(props) => <Detail {...props}/>}
        </HomeStack.Screen>
      </HomeStack.Navigator>
    );
}

function ProfileStackScreen({ navigation }) {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <ProfileStack.Screen name="Signup" component={Signup}/>
        </ProfileStack.Navigator>
    )
}
function UploadStackScreen({ navigation }) {
    return (
        <UploadStack.Navigator>
            <UploadStack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <ProfileStack.Screen name="Signup" component={Signup}/>

        </UploadStack.Navigator>
    )
}
function FavouriteStackScreen({ navigation }) {
    return (
        <FavouriteStack.Navigator>
            <FavouriteStack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <ProfileStack.Screen name="Signup" component={Signup}/>

        </FavouriteStack.Navigator>
    )
}

const Tab = createBottomTabNavigator();

export default function AppNavigation() {
    return (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName 
              size = 24
              if (route.name === "Home") iconName = "home"
              else if (route.name === "Favourite") {
                iconName = "heart-circle-outline"
                size = 27
              }
              else if (route.name === "Upload") iconName = "cloud-upload"
              else iconName = 'people-sharp'
              return <Ionicons name = {iconName} size={size} color={color} />
            },
            tabBarActiveTintColor: '#00a699',
            tabBarInactiveTintColor: 'gray',
            }
          )
        }
      >
            <Tab.Screen name="Home" component={HomeStackScreen}  
              options={{headerShown: false}}  />
            <Tab.Screen name="Favourite" component={FavouriteStackScreen} 
              options={{headerShown: false}}
            />
            <Tab.Screen name="Upload" component={UploadStackScreen} 
              options={{headerShown: false}}
            />
            <Tab.Screen name="Profile" component={ProfileStackScreen} 
              options={{headerShown: false}}
            />
        </Tab.Navigator>
    )
} 
