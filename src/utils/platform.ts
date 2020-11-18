import { Platform } from 'react-native';

const isIOS = Platform.OS === 'ios';
const isAndroid = Platform.OS === 'android';
const isTVOS = Platform.isTV;
// const isAndroidRTL = I18nManager.isRTL && isAndroid;
// const isDeviceTablet = isTablet();

export {
    isIOS,
    isAndroid,
    isTVOS
};