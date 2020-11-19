import React from 'react';
import { Text, View } from 'react-native';
// libs
import EStyleSheet from 'react-native-extended-stylesheet';

interface HomeProps { }

const Home = ({ }: HomeProps) => {
    return (
        <View style={styles.container}>
            <Text>Home</Text>
        </View>
    );
};

export default Home;

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '$background'
    }
});
