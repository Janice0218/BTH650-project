// React Native Counter Example using Hooks!

import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import ListNotifications from './Components/ListNotifications.js';

const App = () => {
    const [count, setCount] = useState(0);

    return (
            <ListNotifications />
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
