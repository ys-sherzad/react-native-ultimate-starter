import React from 'react';
import { Button, Text, View, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
// libs
import EStyleSheet from 'react-native-extended-stylesheet';
// actions 
import { increment } from '../slices/counter.slice';
// types
import { RootState } from '../store/rootReducer';
// utils
import { Scale } from '../utils';
import { proc } from 'react-native-reanimated';

interface HomeProps { }

const Home = ({ }: HomeProps) => {
    const dispatch = useDispatch();

    const { count } = useSelector(
        (state: RootState) => state.counter
    )

    return (
        <View style={styles.container}>

            <Image source={require('../../assets/images/logo.png')} style={styles.logo} />

            <Text style={styles.title}>React Native Ultimate Starter</Text>

            <Text style={styles.title}>{process.env.NODE_ENV}</Text>


            <Text style={styles.countText}>{count}</Text>

            <Button
                title='press'
                onPress={() => dispatch(increment())}
            />
        </View>
    );
};

export default Home;

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: Scale.moderateScale(20),
        backgroundColor: '$background'
    },
    title: {
        color: '$text',
        fontSize: Scale.moderateScale(24),
        paddingVertical: Scale.moderateScale(10),
        textAlign: 'center'
    },
    countText: {
        color: '$text',
        fontSize: Scale.moderateScale(28),
        paddingVertical: Scale.moderateScale(50),
        textAlign: 'center'
    },
    logo: {
        height: 120,
        width: 120,
        resizeMode: 'contain'
    }
});
