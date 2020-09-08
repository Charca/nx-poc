import React from 'react';
import { render } from '@testing-library/react';
import Hsds from './hsds';
describe('Hsds', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Hsds />);
    expect(baseElement).toBeTruthy();
  });
});
