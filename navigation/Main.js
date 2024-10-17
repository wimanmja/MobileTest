import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IonIcons from 'react-native-vector-icons/Ionicons';

// Screens
import ListScreen from './screens/ListScreen/ListScreen';
import DetailScreen from './screens/DetailScreen/DetailScreen';
import ProfileScreen from './screens/ProfileScreen/ProfileScreen';
import AlbumScreen from './screens/AlbumScreen/AlbumScreen';
import PhotoScreen from './screens/PhotoScreen/PhotoScreen';

// Screen names
const listName = 'List';
const profileName = 'Profile';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function ListStackNavigator() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="ListScreen" component={ListScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="Album" component={AlbumScreen} />
        <Stack.Screen name="Photo" component={PhotoScreen} />
      </Stack.Navigator>
    );
  }

export default function Main (){
    return(
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName={listName}
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === listName) {
                        iconName = focused ? 'list' : 'list-outline'
                    } else if (rn === profileName) {
                        iconName = focused ? 'person' : 'person-outline'
                    }

                    return <IonIcons name={iconName} size={size} color={color}/>
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'grey',
                tabBarLabelStyle: { paddingBottom: 10, fontSize: 10 },
            })}
            >
                <Tab.Screen name={listName} component={ListStackNavigator}/>
                <Tab.Screen name={profileName} component={ProfileScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}