import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';
import { loginSucessSelector } from './redux/selectors';

import Home from './screens/Home';
import Detail from './screens/Detail';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Upload from './screens/Upload';
import Profile from './screens/Profile';
import Favourite from './screens/Favourite';

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
            <ProfileStack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
        </ProfileStack.Navigator>
    )
}
function UploadStackScreen({ navigation }) {
    return (
        <UploadStack.Navigator>
            <UploadStack.Screen name="Upload" component={Upload} options={{ headerShown: false }}/>
        </UploadStack.Navigator>
    )
}
function FavouriteStackScreen({ navigation }) {
    const userData = useSelector(loginSucessSelector)
    console.log("userData")
    return (
        <FavouriteStack.Navigator>
          {
            userData != null ? 
              <ProfileStack.Screen name="Favourite" component={Favourite}/>
              :
              <ProfileStack.Screen name="Favourite" component={Favourite} options={{ headerShown: false }} />
          }
          <ProfileStack.Screen name="Detail" options={({ route }) => ({ title: route.params.data.title})} >
          {(props) => <Detail {...props}/>}
          </ProfileStack.Screen>
        </FavouriteStack.Navigator>
    )
}

const Tab = createBottomTabNavigator();

export default function AppNavigation() {
    const userData = useSelector(loginSucessSelector)
    console.log(userData)
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
            <Tab.Screen name="Home " component={HomeStackScreen}  
              options={{headerShown: false}}  />
            <Tab.Screen name="Favourite " component={FavouriteStackScreen} 
              options={{headerShown: false}}
            />
            <Tab.Screen name="Upload " component={UploadStackScreen} 
              options={{headerShown: false}}
            />
            <Tab.Screen name="Profile " component={ProfileStackScreen} 
              options={{headerShown: false}}
            />
        </Tab.Navigator>
    )
} 
