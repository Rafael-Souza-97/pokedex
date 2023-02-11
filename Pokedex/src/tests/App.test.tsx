import { render } from '@testing-library/react';
import App from '../App';

test('Get H1', () => {
  const { getByText } = render(<App />);

  expect(getByText('Hello World')).toBeTruthy();
});
