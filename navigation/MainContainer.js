import * as React from 'react';
import { View, Text, StatusBar } from 'react-native';
import * as NavigationBar from 'expo-navigation-bar';
NavigationBar.setBackgroundColorAsync('#1B1B1E');

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import SettingsScreen from './screens/SettingsScreen';

// Screen names
const homeName = 'Home';
const detailName = 'Details';
const settingsName = 'Settings';

const Tab = createBottomTabNavigator();

export default function MainContainer() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={homeName}
                screenOptions={({ route }) => ({
                    tabBarStyle: { backgroundColor: '#1B1B1E' },
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let routeName = route.name;

                        switch (routeName) {
                            case homeName:
                                iconName = focused ? 'home' : 'home-outline';
                                break;
                            case detailName:
                                iconName = focused ? 'list' : 'list-outline';
                                break;
                            case settingsName:
                                iconName = focused
                                    ? 'settings'
                                    : 'settings-outline';
                                break;
                        }
                        return (
                            <Ionicons
                                name={iconName}
                                size={size}
                                color={color}
                            />
                        );
                    },
                })}
            >
                <Tab.Screen
                    name={homeName}
                    component={HomeScreen}
                    options={{
                        headerShown: false,
                        tabBarActiveTintColor: '#166EFA',
                        tabBarInactiveTintColor: '#6D676E',
                    }}
                ></Tab.Screen>
                <Tab.Screen
                    name={detailName}
                    component={DetailsScreen}
                    options={{
                        headerShown: false,
                        tabBarActiveTintColor: '#166EFA',
                        tabBarInactiveTintColor: '#6D676E',
                    }}
                ></Tab.Screen>
                <Tab.Screen
                    name={settingsName}
                    component={SettingsScreen}
                    options={{
                        headerShown: false,
                        tabBarActiveTintColor: '#166EFA',
                        tabBarInactiveTintColor: '#6D676E',
                    }}
                ></Tab.Screen>
            </Tab.Navigator>
            <StatusBar backgroundColor="#1B1B1E" />
        </NavigationContainer>
    );
}
