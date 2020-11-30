/**
 * Importing and exporting all utils here
 * In my opinion its just a cleaner way.
 * 
 * Example usage in your components:
 * 
 * import { Dimensions } from 'path/to/utils';
 * 
 * const styles = StyleSheet.create({
 *  container: {
 *      height: Dimensions.SCREEN_HEIGHT,
 *      width: Dimensions.SCREEN_WIDTH
 *  }
 * });
 */

// dimensions
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