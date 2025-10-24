import {
  base64Encode,
  base64Decode,
  caesarEncrypt,
  caesarDecrypt,
  md5Hash,
  textToBinary,
  binaryToText,
  urlEncode,
  urlDecode,
  rot13,
  atbashCipher,
} from '../utils/cryptoUtils';

describe('Base64 Encoding/Decoding', () => {
  test('should encode text to Base64', () => {
    expect(base64Encode('Hello World')).toBe('SGVsbG8gV29ybGQ=');
    expect(base64Encode('Test')).toBe('VGVzdA==');
  });

  test('should decode Base64 to text', () => {
    expect(base64Decode('SGVsbG8gV29ybGQ=')).toBe('Hello World');
    expect(base64Decode('VGVzdA==')).toBe('Test');
  });

  test('should handle Unicode characters', () => {
    const text = 'Hello 世界';
    const encoded = base64Encode(text);
    expect(base64Decode(encoded)).toBe(text);
  });

  test('should throw error for invalid Base64', () => {
    expect(() => base64Decode('Invalid!@#')).toThrow();
  });
});

describe('Caesar Cipher', () => {
  test('should encrypt with positive shift', () => {
    expect(caesarEncrypt('HELLO', 3)).toBe('KHOOR');
    expect(caesarEncrypt('ABC', 1)).toBe('BCD');
  });

  test('should decrypt with positive shift', () => {
    expect(caesarDecrypt('KHOOR', 3)).toBe('HELLO');
    expect(caesarDecrypt('BCD', 1)).toBe('ABC');
  });

  test('should handle lowercase letters', () => {
    expect(caesarEncrypt('hello', 3)).toBe('khoor');
  });

  test('should preserve non-alphabetic characters', () => {
    expect(caesarEncrypt('Hello, World!', 3)).toBe('Khoor, Zruog!');
  });

  test('should wrap around alphabet', () => {
    expect(caesarEncrypt('XYZ', 3)).toBe('ABC');
    expect(caesarEncrypt('xyz', 3)).toBe('abc');
  });

  test('should handle negative shifts', () => {
    expect(caesarEncrypt('ABC', -1)).toBe('ZAB');
  });

  test('encrypt and decrypt should be inverse operations', () => {
    const text = 'The Quick Brown Fox';
    const shift = 7;
    const encrypted = caesarEncrypt(text, shift);
    const decrypted = caesarDecrypt(encrypted, shift);
    expect(decrypted).toBe(text);
  });
});

describe('MD5 Hash', () => {
  test('should generate consistent hash', () => {
    const hash1 = md5Hash('hello');
    const hash2 = md5Hash('hello');
    expect(hash1).toBe(hash2);
  });

  test('should generate different hashes for different inputs', () => {
    const hash1 = md5Hash('hello');
    const hash2 = md5Hash('world');
    expect(hash1).not.toBe(hash2);
  });

  test('should generate 32-character hex string', () => {
    const hash = md5Hash('test');
    expect(hash).toHaveLength(32);
    expect(/^[a-f0-9]{32}$/.test(hash)).toBe(true);
  });
});

describe('Binary Converter', () => {
  test('should convert text to binary', () => {
    expect(textToBinary('Hi')).toBe('01001000 01101001');
  });

  test('should convert binary to text', () => {
    expect(binaryToText('01001000 01101001')).toBe('Hi');
  });

  test('should be reversible', () => {
    const text = 'Test';
    const binary = textToBinary(text);
    expect(binaryToText(binary)).toBe(text);
  });
});

describe('URL Encoding', () => {
  test('should encode special characters', () => {
    expect(urlEncode('hello world')).toBe('hello%20world');
    expect(urlEncode('a+b=c')).toBe('a%2Bb%3Dc');
  });

  test('should decode URL-encoded strings', () => {
    expect(urlDecode('hello%20world')).toBe('hello world');
    expect(urlDecode('a%2Bb%3Dc')).toBe('a+b=c');
  });

  test('should be reversible', () => {
    const text = 'Hello World! @#$%';
    const encoded = urlEncode(text);
    expect(urlDecode(encoded)).toBe(text);
  });
});

describe('ROT13', () => {
  test('should apply ROT13 transformation', () => {
    expect(rot13('HELLO')).toBe('URYYB');
    expect(rot13('hello')).toBe('uryyb');
  });

  test('should be self-inverse', () => {
    const text = 'The Quick Brown Fox';
    expect(rot13(rot13(text))).toBe(text);
  });

  test('should preserve non-alphabetic characters', () => {
    expect(rot13('Hello, World!')).toBe('Uryyb, Jbeyq!');
  });
});

describe('Atbash Cipher', () => {
  test('should apply Atbash transformation', () => {
    expect(atbashCipher('ABC')).toBe('ZYX');
    expect(atbashCipher('abc')).toBe('zyx');
  });

  test('should be self-inverse', () => {
    const text = 'Hello World';
    expect(atbashCipher(atbashCipher(text))).toBe(text);
  });

  test('should preserve non-alphabetic characters', () => {
    expect(atbashCipher('A1B2C3')).toBe('Z1Y2X3');
  });
});
