import React from 'react';
import { render, act } from '@testing-library/react';
import Home from '../../app/page';

describe('Home Component', () => {
  test('renders without crashing', () => {
    const { getByText } = render(<Home />);
    expect(getByText('CodeStory.AI')).toBeInTheDocument();
  });

  test('activeQuery changes over time', async () => {
    jest.useFakeTimers();
    const { getByText } = render(<Home />);
    expect(getByText('sampleQuery1')).toBeInTheDocument();
    act(() => {
      jest.advanceTimersByTime(5000);
    });
    expect(getByText('sampleQuery2')).toBeInTheDocument();
    jest.useRealTimers();
  });
});
```

