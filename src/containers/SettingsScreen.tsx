import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';


// context
import { useTheme } from '../lib/ThemeContext';
import { Scale } from '../utils';


interface SettingsScreenProps { }

const SettingsScreen = ({ }: SettingsScreenProps) => {
    const { toggleTheme, theme } = useTheme();
    return (
        <View style={[styles.container, { backgroundColor: theme.$background }]}>
            <Text style={[styles.contentText, { color: theme.$text }]}>Current Theme is : {theme.$mode.toUpperCase()}</Text>
            <Button
                title='toggle theme'
                onPress={toggleTheme}
            />
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
    }
});
