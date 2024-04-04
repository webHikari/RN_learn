import * as React from 'react';
import { View, Text } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                backgroundColor: '#1B1B1E',
                justifyContent: 'center',
            }}
        >
            <Text style={{ fontSize: 26, fontWeight: 'bold', color: '#FBFFFE'}}>
                Home Screen
            </Text>
        </View>
    );
}
