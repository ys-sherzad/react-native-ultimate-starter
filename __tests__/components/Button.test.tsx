import React from 'react';
import { render, cleanup } from '../../src/utils/testUtility/test-utils';
import Button from '../../src/components/shared/Button';
import { PlatformUtils } from '../../src/utils';

afterEach(cleanup);

jest.mock('../../src/utils/platform', () => ({
    get isAndroid() {
        return true;
    },
}));

describe('Button - android', () => {
    const spy = jest.spyOn(PlatformUtils, 'isAndroid', 'get');
    it('renders button for Android platform', () => {
        spy.mockReturnValueOnce(true);
        const { getByTestId } = render(
            <Button>
                <></>
            </Button>
        );
        expect(getByTestId('touchableWithFeedback')).toBeDefined();
    });
});

describe('Button - ios', () => {
    const spy = jest.spyOn(PlatformUtils, 'isAndroid', 'get');
    it('renders button for iOS platform', () => {
        spy.mockReturnValueOnce(false);
        const { getByTestId } = render(
            <Button>
                <></>
            </Button>
        );
        expect(getByTestId('touchableOpacity')).toBeDefined();
    });
});

describe('Button - without feedback', () => {
    it('renders button without feedback when withoutFeedback is true', () => {
        const { getByTestId } = render(
            <Button withoutFeedback={true}>
                <></>
            </Button>);

        expect(getByTestId('touchableWithoutFeedback')).toBeDefined();
    });
});


