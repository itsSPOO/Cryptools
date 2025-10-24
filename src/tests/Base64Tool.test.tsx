import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Base64Tool } from '../components/tools/Base64Tool';

describe('Base64Tool Component', () => {
  test('renders correctly', () => {
    render(<Base64Tool />);
    expect(screen.getByText('Base64 Encode/Decode')).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Enter text to encode/i)).toBeInTheDocument();
  });

  test('encodes text to Base64', async () => {
    render(<Base64Tool />);
    
    const input = screen.getByPlaceholderText(/Enter text to encode/i);
    const encodeButton = screen.getByRole('button', { name: /Encode/i });
    
    fireEvent.change(input, { target: { value: 'Hello World' } });
    fireEvent.click(encodeButton);
    
    await waitFor(() => {
      const output = screen.getByDisplayValue('SGVsbG8gV29ybGQ=');
      expect(output).toBeInTheDocument();
    });
  });

  test('decodes Base64 to text', async () => {
    render(<Base64Tool />);
    
    const input = screen.getByPlaceholderText(/Enter text to encode/i);
    const decodeButton = screen.getByRole('button', { name: /Decode/i });
    
    fireEvent.change(input, { target: { value: 'SGVsbG8gV29ybGQ=' } });
    fireEvent.click(decodeButton);
    
    await waitFor(() => {
      const output = screen.getByDisplayValue('Hello World');
      expect(output).toBeInTheDocument();
    });
  });

  test('shows error for invalid Base64', async () => {
    render(<Base64Tool />);
    
    const input = screen.getByPlaceholderText(/Enter text to encode/i);
    const decodeButton = screen.getByRole('button', { name: /Decode/i });
    
    fireEvent.change(input, { target: { value: 'Invalid!@#$' } });
    fireEvent.click(decodeButton);
    
    await waitFor(() => {
      expect(screen.getByText(/Invalid Base64 string/i)).toBeInTheDocument();
    });
  });
});
