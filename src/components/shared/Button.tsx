import React from 'react';
import { TouchableWithoutFeedback, TouchableOpacity, TouchableNativeFeedback, View } from 'react-native';
// utils
import { PlatformUtils } from '../../utils';
// theme context
import { useTheme } from '../../lib/ThemeContext';

type Props = React.ComponentProps<typeof TouchableWithoutFeedback> & {
    withoutFeedback?: boolean;
    children: React.ReactNode;
    style?: object;
};

const Button = (props: Props) => {
    const { theme } = useTheme();
    const { withoutFeedback = false, children, style, ...rest } = props;

    const touchableWithoutFeedback = () => (
        <TouchableWithoutFeedback
            testID="touchableWithoutFeedback"
            {...rest}>
            <View {...{ style }}>
                {children}
            </View>
        </TouchableWithoutFeedback>
    );

    const touchableNativeFeedback = () => (
        <TouchableNativeFeedback
            testID='touchableWithFeedback'
            useForeground={TouchableNativeFeedback.canUseNativeForeground()}
            background={
                PlatformUtils.isAndroidVersion21AndAbove ?
                    TouchableNativeFeedback.Ripple(theme.$rippleColor, true) :
                    TouchableNativeFeedback.SelectableBackground()
            }
            {...rest}
        >
            <View {...{ style }}>
                {children}
            </View>
        </TouchableNativeFeedback>
    )

    const touchableOpacity = () => (
        <TouchableOpacity testID="touchableOpacity" {...rest}>
            {children}
        </TouchableOpacity>
    );


    if (withoutFeedback) {
        return touchableWithoutFeedback();
    } else if (PlatformUtils.isAndroid) {
        return touchableNativeFeedback();
    } else {
        return touchableOpacity();
    }
};

export default Button;
