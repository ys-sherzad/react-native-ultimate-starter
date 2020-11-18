import { Dimensions } from 'react-native';
// @ts-ignore
import ExtraDimensions from 'react-native-extra-dimensions-android';
import { isIOS } from './platform';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = isIOS ? Dimensions.get('window').height : ExtraDimensions.getRealWindowHeight();

export {
    SCREEN_HEIGHT,
    SCREEN_WIDTH
}