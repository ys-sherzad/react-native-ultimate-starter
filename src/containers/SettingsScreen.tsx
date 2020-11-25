import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Button from '../components/shared/Button';
// theme hook
import useTheme from '../hooks/useTheme';
// utils
import { Scale, Shape } from '../utils';

interface SettingsScreenProps { }

const SettingsScreen = ({ }: SettingsScreenProps) => {
    const { toggleTheme, theme } = useTheme();
    return (
        <View style={[styles.container, { backgroundColor: theme.$background }]}>
            <Text style={[styles.contentText, { color: theme.$text }]}>Current Theme is : {theme.$mode.toUpperCase()}</Text>
            <Button withHitSlop onPress={toggleTheme} style={[styles.btn, { borderColor: theme.$borderColor }]}>
                <Text style={{ color: theme.$text }}>Toggle theme</Text>
            </Button>
        </View>
    );
};

export default SettingsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentText: {
        marginVertical: Scale.verticalScale(10)
    },
    btn: {
        height: 50,
        justifyContent: 'center',
        paddingHorizontal: 30,
        borderWidth: 1,
        ...Shape.semiRound10
    }
});
