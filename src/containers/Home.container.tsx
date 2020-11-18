import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface HomeProps { }

const Home = ({ }: HomeProps) => {
    return (
        <View style={styles.container}>
            <Text>Home</Text>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {}
});
