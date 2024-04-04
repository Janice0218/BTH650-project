// React Native Counter Example using Hooks!

import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import NotificationsList from './src/screens/NotificationsList.js';
import Voice from './src/screens/Voice.js';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const App = () => {
    const [count, setCount] = useState(0);

    const [fontsLoaded] = useFonts({
        'roboto-300': require('./src/assets/fonts/roboto-300.ttf'),
        'roboto-500': require('./src/assets/fonts/roboto-500.ttf'),
        'roboto-700': require('./src/assets/fonts/roboto-700.ttf'),
        'roboto-900': require('./src/assets/fonts/roboto-900.ttf'),
        'roboto-regular': require('./src/assets/fonts/roboto-regular.ttf'),
    });

    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Notifications List View">
                <Drawer.Screen name="Notifications List View" component={NotificationsList} />
                <Drawer.Screen name="Voice Assistant" component={Voice} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

// React Native Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default App;
