import * as React from 'react';
import { View, Text } from 'react-native';

export default function SettingsScreen({ navigation }) {
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#1B1B1E',
            }}
        >
            <Text
                onPress={() => navigation.navigate('Settings')}
                style={{ fontSize: 26, fontWeight: 'bold', color: '#FBFFFE' }}
            >
                Settings Screen
            </Text>
        </View>
    );
}
