import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

describe('Navbar', () => {
  it('renders the navbar links', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );

    // check that the navbar links are rendered
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Forums')).toBeInTheDocument();
    expect(screen.getByText('Events')).toBeInTheDocument();
    expect(screen.getByText('Blog')).toBeInTheDocument();
    expect(screen.getByText('About us')).toBeInTheDocument();

    // check that the login and signup buttons are rendered
    expect(screen.getByText('Login')).toBeInTheDocument();
    expect(screen.getByText('Sign in')).toBeInTheDocument();
  });
});
