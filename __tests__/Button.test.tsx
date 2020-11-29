import React from 'react';
import { render, cleanup } from '@testing-library/react-native';
import Button from '../src/components/shared/Button';
import { PlatformUtils } from '../src/utils';


afterEach(cleanup);

jest.mock('../src/hooks/useTheme', () => {
    return jest.fn;
});

jest.mock('../src/utils/platform', () => ({
    get isAndroid() {
        return true;
    },
}))

describe('Button - android', () => {
    const spy = jest.spyOn(PlatformUtils, 'isAndroid', 'get');
    it('renders TouchableNativeFeedback when platform is Android', () => {
        spy.mockReturnValueOnce(true);
        const { getByTestId } = render(
            <Button>
                <></>
            </Button>
        );
        expect(getByTestId('touchableWithFeedback')).toBeDefined();
    })
});

describe('Button - without feedback', () => {
    it('renders TouchableWithoutFeedback when withoutFeedback is true', () => {
        const { getByTestId } = render(
            <Button withoutFeedback={true}>
                <></>
            </Button>);

        expect(getByTestId('touchableWithoutFeedback')).toBeDefined();
    });
})

describe('Button - ios', () => {
    const spy = jest.spyOn(PlatformUtils, 'isAndroid', 'get');
    it('renders TouchableOpacity when platform is iOS', () => {
        spy.mockReturnValueOnce(false);
        const { getByTestId } = render(
            <Button>
                <></>
            </Button>
        );
        expect(getByTestId('touchableOpacity')).toBeDefined();
    })
})