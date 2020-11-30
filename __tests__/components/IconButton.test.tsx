import React from 'react';
import IconButton from '../../src/components/shared/IconButton';
import { render, cleanup } from '../../src/utils/testUtility/test-utils';

afterEach(cleanup);

const props = {
    iconName: 'users',
    onPress: jest.fn(),
};

describe('IconButton', () => {
    it('renders correctly', () => {
        const { getByLabelText } = render(<IconButton {...props} />);
        expect(getByLabelText('Tap me!')).toBeDefined();
    });
});




