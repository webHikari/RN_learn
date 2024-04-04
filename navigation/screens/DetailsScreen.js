import * as React from 'react';
import { View, Text } from 'react-native';

export default function DetailsScreen({ navigation }) {
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
                onPress={() => navigation.navigate('Details')}
                style={{ fontSize: 26, fontWeight: 'bold', color: '#FBFFFE' }}
            >
                Details screen
            </Text>
        </View>
    );
}
