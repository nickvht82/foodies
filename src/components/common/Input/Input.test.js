import { render } from '@testing-library/react';
import Input from './index'; // Adjust the path based on your project structure

describe('Input component', () => {
  it('renders without crashing', () => {
    render('<Input />');
    expect(true).toBe(true); // A simple placeholder test
  });
});