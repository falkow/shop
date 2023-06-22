import { render, screen } from '@testing-library/react';

import HomePage from '../pages/HomePage';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { test, describe, expect } from 'vitest';

describe('HomePage component', () => {
  test('should mounts properly', () => {
    const wrapper = render(
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    );

    const heroButton = screen.getByText(/go to shop/i);
    expect(heroButton).toBeTruthy();

    const headerTwo = wrapper.container.querySelector('h2') as HTMLElement;
    expect(headerTwo.textContent).toBeTruthy();
  });
});
