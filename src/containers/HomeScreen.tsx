import React, { useEffect } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
// libs
import { useSelector, useDispatch } from 'react-redux';
// actions 
import { increment } from '../slices/counterSlice';
import { fetchUsers } from '../slices/usersSlice';
// types
import { RootState } from '../store/rootReducer';
// utils
import { Scale, Shape } from '../utils';
// hooks
import useTheme from '../hooks/useTheme';
import Button from '../components/shared/Button';
import IconButton from '../components/shared/IconButton';

interface HomeScreenProps { }

const HomeScreen = ({ }: HomeScreenProps) => {
    const { theme } = useTheme();
    const dispatch = useDispatch();

    // get dummy users list
    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    // count state
    const { count } = useSelector(
        (state: RootState) => state.counter,
    );
    // users state
    const { users, inProgress, error } = useSelector(
        (state: RootState) => state.users
    );

    return (
        <View style={[styles.container, { backgroundColor: theme.$background }]}>

            <Image source={require('../../assets/images/logo.png')} style={styles.logo} />

            <Text style={[styles.title, { color: theme.$text }]}>React Native Ultimate Starter</Text>

            <Text style={[styles.countText, { color: theme.$text }]}>{count}</Text>

            <Button withHitSlop onPress={() => dispatch(increment())} style={[styles.btn, { borderColor: theme.$borderColor }]}>
                <Text style={{ color: theme.$text }}>Press</Text>
            </Button>

        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: Scale.moderateScale(20),
    },
    title: {
        fontSize: Scale.moderateScale(24),
        paddingVertical: Scale.moderateScale(10),
        textAlign: 'center'
    },
    countText: {
        fontSize: Scale.moderateScale(28),
        paddingVertical: Scale.moderateScale(50),
        textAlign: 'center'
    },
    logo: {
        height: Scale.moderateScale(120),
        width: Scale.moderateScale(120),
        resizeMode: 'contain'
    },
    btn: {
        height: 50,
        justifyContent: 'center',
        paddingHorizontal: 30,
        borderWidth: 1,
        ...Shape.semiRound10
    }
});
