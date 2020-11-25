/**
 * Importing and exporting all utils here
 * In my opinion its just a cleaner way.
 * 
 * Usage in your components:
 * 
 * import { Dimensions } from 'path/to/utils';
 * 
 * Dimensions.SCREEN_HEIGHT
 */

// dimesions
import * as Dimensions from './dimensions';
import * as Shape from './shape';
import * as Scale from './scale';

// platform
import * as PlatformUtils from './platform';

export {
    Dimensions,
    Shape,
    Scale,
    PlatformUtils
};