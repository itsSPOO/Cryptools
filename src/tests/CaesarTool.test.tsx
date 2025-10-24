import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { CaesarTool } from '../components/tools/CaesarTool';

describe('CaesarTool Component', () => {
  test('renders correctly', () => {
    render(<CaesarTool />);
    expect(screen.getByText('Caesar Cipher')).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Enter text to encrypt/i)).toBeInTheDocument();
  });

  test('encrypts text with Caesar cipher', async () => {
    render(<CaesarTool />);
    
    const input = screen.getByPlaceholderText(/Enter text to encrypt/i);
    const encryptButton = screen.getByRole('button', { name: /Encrypt/i });
    
    fireEvent.change(input, { target: { value: 'HELLO' } });
    fireEvent.click(encryptButton);
    
    await waitFor(() => {
      const output = screen.getByDisplayValue('KHOOR');
      expect(output).toBeInTheDocument();
    });
  });

  test('decrypts text with Caesar cipher', async () => {
    render(<CaesarTool />);
    
    const input = screen.getByPlaceholderText(/Enter text to encrypt/i);
    const decryptButton = screen.getByRole('button', { name: /Decrypt/i });
    
    fireEvent.change(input, { target: { value: 'KHOOR' } });
    fireEvent.click(decryptButton);
    
    await waitFor(() => {
      const output = screen.getByDisplayValue('HELLO');
      expect(output).toBeInTheDocument();
    });
  });

  test('adjusts shift value with slider', async () => {
    render(<CaesarTool />);
    
    const slider = screen.getByRole('slider');
    const input = screen.getByPlaceholderText(/Enter text to encrypt/i);
    const encryptButton = screen.getByRole('button', { name: /Encrypt/i });
    
    // Change shift to 1
    fireEvent.change(slider, { target: { value: '1' } });
    fireEvent.change(input, { target: { value: 'ABC' } });
    fireEvent.click(encryptButton);
    
    await waitFor(() => {
      const output = screen.getByDisplayValue('BCD');
      expect(output).toBeInTheDocument();
    });
  });

  test('preserves non-alphabetic characters', async () => {
    render(<CaesarTool />);
    
    const input = screen.getByPlaceholderText(/Enter text to encrypt/i);
    const encryptButton = screen.getByRole('button', { name: /Encrypt/i });
    
    fireEvent.change(input, { target: { value: 'Hello, World!' } });
    fireEvent.click(encryptButton);
    
    await waitFor(() => {
      const output = screen.getByDisplayValue('Khoor, Zruog!');
      expect(output).toBeInTheDocument();
    });
  });
});
