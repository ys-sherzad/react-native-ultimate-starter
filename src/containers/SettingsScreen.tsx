import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';


// context
import { useTheme } from '../lib/ThemeContext';
import { Scale } from '../utils';


interface SettingsScreenProps { }

const SettingsScreen = (props: SettingsScreenProps) => {
    const { toggleTheme, theme } = useTheme();
    return (
        <View style={[styles.container, { backgroundColor: theme.$background }]}>
            {/* <Text style={styles.contentText}>Current Theme is : {EStyleSheet.value('$theme').toUpperCase()}</Text> */}
            <Button
                title='Press to Change Theme'
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
