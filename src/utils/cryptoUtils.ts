/**
 * CryptoUtils - Client-side encryption, hashing, and conversion utilities
 * ⚠️ Educational purposes only - not for production security
 */

// ============= Base64 =============
export const base64Encode = (text: string): string => {
  try {
    return btoa(unescape(encodeURIComponent(text)));
  } catch (error) {
    throw new Error('Invalid input for Base64 encoding');
  }
};

export const base64Decode = (encoded: string): string => {
  try {
    return decodeURIComponent(escape(atob(encoded)));
  } catch (error) {
    throw new Error('Invalid Base64 string');
  }
};

// ============= Hashing =============
const hashString = async (text: string, algorithm: 'SHA-1' | 'SHA-256'): Promise<string> => {
  const encoder = new TextEncoder();
  const data = encoder.encode(text);
  const hashBuffer = await crypto.subtle.digest(algorithm, data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
};

export const md5Hash = (text: string): string => {
  // Simple MD5 implementation (not cryptographically secure)
  const rotateLeft = (value: number, shift: number): number => {
    return (value << shift) | (value >>> (32 - shift));
  };

  const addUnsigned = (x: number, y: number): number => {
    const lsw = (x & 0xFFFF) + (y & 0xFFFF);
    const msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return (msw << 16) | (lsw & 0xFFFF);
  };

  const F = (x: number, y: number, z: number): number => (x & y) | (~x & z);
  const G = (x: number, y: number, z: number): number => (x & z) | (y & ~z);
  const H = (x: number, y: number, z: number): number => x ^ y ^ z;
  const I = (x: number, y: number, z: number): number => y ^ (x | ~z);

  const FF = (a: number, b: number, c: number, d: number, x: number, s: number, ac: number): number => {
    a = addUnsigned(a, addUnsigned(addUnsigned(F(b, c, d), x), ac));
    return addUnsigned(rotateLeft(a, s), b);
  };

  const GG = (a: number, b: number, c: number, d: number, x: number, s: number, ac: number): number => {
    a = addUnsigned(a, addUnsigned(addUnsigned(G(b, c, d), x), ac));
    return addUnsigned(rotateLeft(a, s), b);
  };

  const HH = (a: number, b: number, c: number, d: number, x: number, s: number, ac: number): number => {
    a = addUnsigned(a, addUnsigned(addUnsigned(H(b, c, d), x), ac));
    return addUnsigned(rotateLeft(a, s), b);
  };

  const II = (a: number, b: number, c: number, d: number, x: number, s: number, ac: number): number => {
    a = addUnsigned(a, addUnsigned(addUnsigned(I(b, c, d), x), ac));
    return addUnsigned(rotateLeft(a, s), b);
  };

  const convertToWordArray = (str: string): number[] => {
    const wordArray: number[] = [];
    for (let i = 0; i < str.length * 8; i += 8) {
      wordArray[i >> 5] |= (str.charCodeAt(i / 8) & 0xFF) << (i % 32);
    }
    return wordArray;
  };

  const utf8Encode = (str: string): string => {
    return unescape(encodeURIComponent(str));
  };

  const str = utf8Encode(text);
  const wordArray = convertToWordArray(str);
  const byteLength = str.length * 8;

  wordArray[byteLength >> 5] |= 0x80 << (byteLength % 32);
  wordArray[(((byteLength + 64) >>> 9) << 4) + 14] = byteLength;

  let a = 0x67452301;
  let b = 0xEFCDAB89;
  let c = 0x98BADCFE;
  let d = 0x10325476;

  for (let i = 0; i < wordArray.length; i += 16) {
    const oldA = a, oldB = b, oldC = c, oldD = d;

    a = FF(a, b, c, d, wordArray[i + 0], 7, 0xD76AA478);
    d = FF(d, a, b, c, wordArray[i + 1], 12, 0xE8C7B756);
    c = FF(c, d, a, b, wordArray[i + 2], 17, 0x242070DB);
    b = FF(b, c, d, a, wordArray[i + 3], 22, 0xC1BDCEEE);
    a = FF(a, b, c, d, wordArray[i + 4], 7, 0xF57C0FAF);
    d = FF(d, a, b, c, wordArray[i + 5], 12, 0x4787C62A);
    c = FF(c, d, a, b, wordArray[i + 6], 17, 0xA8304613);
    b = FF(b, c, d, a, wordArray[i + 7], 22, 0xFD469501);
    a = FF(a, b, c, d, wordArray[i + 8], 7, 0x698098D8);
    d = FF(d, a, b, c, wordArray[i + 9], 12, 0x8B44F7AF);
    c = FF(c, d, a, b, wordArray[i + 10], 17, 0xFFFF5BB1);
    b = FF(b, c, d, a, wordArray[i + 11], 22, 0x895CD7BE);
    a = FF(a, b, c, d, wordArray[i + 12], 7, 0x6B901122);
    d = FF(d, a, b, c, wordArray[i + 13], 12, 0xFD987193);
    c = FF(c, d, a, b, wordArray[i + 14], 17, 0xA679438E);
    b = FF(b, c, d, a, wordArray[i + 15], 22, 0x49B40821);

    a = GG(a, b, c, d, wordArray[i + 1], 5, 0xF61E2562);
    d = GG(d, a, b, c, wordArray[i + 6], 9, 0xC040B340);
    c = GG(c, d, a, b, wordArray[i + 11], 14, 0x265E5A51);
    b = GG(b, c, d, a, wordArray[i + 0], 20, 0xE9B6C7AA);
    a = GG(a, b, c, d, wordArray[i + 5], 5, 0xD62F105D);
    d = GG(d, a, b, c, wordArray[i + 10], 9, 0x02441453);
    c = GG(c, d, a, b, wordArray[i + 15], 14, 0xD8A1E681);
    b = GG(b, c, d, a, wordArray[i + 4], 20, 0xE7D3FBC8);
    a = GG(a, b, c, d, wordArray[i + 9], 5, 0x21E1CDE6);
    d = GG(d, a, b, c, wordArray[i + 14], 9, 0xC33707D6);
    c = GG(c, d, a, b, wordArray[i + 3], 14, 0xF4D50D87);
    b = GG(b, c, d, a, wordArray[i + 8], 20, 0x455A14ED);
    a = GG(a, b, c, d, wordArray[i + 13], 5, 0xA9E3E905);
    d = GG(d, a, b, c, wordArray[i + 2], 9, 0xFCEFA3F8);
    c = GG(c, d, a, b, wordArray[i + 7], 14, 0x676F02D9);
    b = GG(b, c, d, a, wordArray[i + 12], 20, 0x8D2A4C8A);

    a = HH(a, b, c, d, wordArray[i + 5], 4, 0xFFFA3942);
    d = HH(d, a, b, c, wordArray[i + 8], 11, 0x8771F681);
    c = HH(c, d, a, b, wordArray[i + 11], 16, 0x6D9D6122);
    b = HH(b, c, d, a, wordArray[i + 14], 23, 0xFDE5380C);
    a = HH(a, b, c, d, wordArray[i + 1], 4, 0xA4BEEA44);
    d = HH(d, a, b, c, wordArray[i + 4], 11, 0x4BDECFA9);
    c = HH(c, d, a, b, wordArray[i + 7], 16, 0xF6BB4B60);
    b = HH(b, c, d, a, wordArray[i + 10], 23, 0xBEBFBC70);
    a = HH(a, b, c, d, wordArray[i + 13], 4, 0x289B7EC6);
    d = HH(d, a, b, c, wordArray[i + 0], 11, 0xEAA127FA);
    c = HH(c, d, a, b, wordArray[i + 3], 16, 0xD4EF3085);
    b = HH(b, c, d, a, wordArray[i + 6], 23, 0x04881D05);
    a = HH(a, b, c, d, wordArray[i + 9], 4, 0xD9D4D039);
    d = HH(d, a, b, c, wordArray[i + 12], 11, 0xE6DB99E5);
    c = HH(c, d, a, b, wordArray[i + 15], 16, 0x1FA27CF8);
    b = HH(b, c, d, a, wordArray[i + 2], 23, 0xC4AC5665);

    a = II(a, b, c, d, wordArray[i + 0], 6, 0xF4292244);
    d = II(d, a, b, c, wordArray[i + 7], 10, 0x432AFF97);
    c = II(c, d, a, b, wordArray[i + 14], 15, 0xAB9423A7);
    b = II(b, c, d, a, wordArray[i + 5], 21, 0xFC93A039);
    a = II(a, b, c, d, wordArray[i + 12], 6, 0x655B59C3);
    d = II(d, a, b, c, wordArray[i + 3], 10, 0x8F0CCC92);
    c = II(c, d, a, b, wordArray[i + 10], 15, 0xFFEFF47D);
    b = II(b, c, d, a, wordArray[i + 1], 21, 0x85845DD1);
    a = II(a, b, c, d, wordArray[i + 8], 6, 0x6FA87E4F);
    d = II(d, a, b, c, wordArray[i + 15], 10, 0xFE2CE6E0);
    c = II(c, d, a, b, wordArray[i + 6], 15, 0xA3014314);
    b = II(b, c, d, a, wordArray[i + 13], 21, 0x4E0811A1);
    a = II(a, b, c, d, wordArray[i + 4], 6, 0xF7537E82);
    d = II(d, a, b, c, wordArray[i + 11], 10, 0xBD3AF235);
    c = II(c, d, a, b, wordArray[i + 2], 15, 0x2AD7D2BB);
    b = II(b, c, d, a, wordArray[i + 9], 21, 0xEB86D391);

    a = addUnsigned(a, oldA);
    b = addUnsigned(b, oldB);
    c = addUnsigned(c, oldC);
    d = addUnsigned(d, oldD);
  }

  const toHex = (n: number): string => {
    let hex = '';
    for (let i = 0; i < 4; i++) {
      hex += ((n >> (i * 8)) & 0xFF).toString(16).padStart(2, '0');
    }
    return hex;
  };

  return toHex(a) + toHex(b) + toHex(c) + toHex(d);
};

export const sha1Hash = async (text: string): Promise<string> => {
  return await hashString(text, 'SHA-1');
};

export const sha256Hash = async (text: string): Promise<string> => {
  return await hashString(text, 'SHA-256');
};

// ============= Caesar Cipher =============
export const caesarEncrypt = (text: string, shift: number): string => {
  shift = ((shift % 26) + 26) % 26; // Normalize shift
  return text.replace(/[a-zA-Z]/g, (char) => {
    const base = char <= 'Z' ? 65 : 97;
    return String.fromCharCode(((char.charCodeAt(0) - base + shift) % 26) + base);
  });
};

export const caesarDecrypt = (text: string, shift: number): string => {
  return caesarEncrypt(text, -shift);
};

// ============= ROT13/ROT47 =============
export const rot13 = (text: string): string => {
  return caesarEncrypt(text, 13);
};

export const rot47 = (text: string): string => {
  return text.replace(/[!-~]/g, (char) => {
    const code = char.charCodeAt(0);
    return String.fromCharCode(33 + ((code - 33 + 47) % 94));
  });
};

// ============= Binary Converter =============
export const textToBinary = (text: string): string => {
  return text.split('').map(char => 
    char.charCodeAt(0).toString(2).padStart(8, '0')
  ).join(' ');
};

export const binaryToText = (binary: string): string => {
  try {
    return binary.split(/\s+/).map(bin => 
      String.fromCharCode(parseInt(bin, 2))
    ).join('');
  } catch (error) {
    throw new Error('Invalid binary string');
  }
};

// ============= URL Encode/Decode =============
export const urlEncode = (text: string): string => {
  return encodeURIComponent(text);
};

export const urlDecode = (encoded: string): string => {
  try {
    return decodeURIComponent(encoded);
  } catch (error) {
    throw new Error('Invalid URL-encoded string');
  }
};

// ============= Hex ↔ ASCII =============
export const textToHex = (text: string): string => {
  return text.split('').map(char => 
    char.charCodeAt(0).toString(16).padStart(2, '0')
  ).join(' ');
};

export const hexToText = (hex: string): string => {
  try {
    return hex.split(/\s+/).map(h => 
      String.fromCharCode(parseInt(h, 16))
    ).join('');
  } catch (error) {
    throw new Error('Invalid hex string');
  }
};

// ============= Vigenère Cipher =============
export const vigenereEncrypt = (text: string, key: string): string => {
  if (!key) throw new Error('Key is required');
  
  key = key.toUpperCase();
  let keyIndex = 0;
  
  return text.split('').map(char => {
    if (/[a-zA-Z]/.test(char)) {
      const base = char <= 'Z' ? 65 : 97;
      const shift = key.charCodeAt(keyIndex % key.length) - 65;
      keyIndex++;
      return String.fromCharCode(((char.charCodeAt(0) - base + shift) % 26) + base);
    }
    return char;
  }).join('');
};

export const vigenereDecrypt = (text: string, key: string): string => {
  if (!key) throw new Error('Key is required');
  
  key = key.toUpperCase();
  let keyIndex = 0;
  
  return text.split('').map(char => {
    if (/[a-zA-Z]/.test(char)) {
      const base = char <= 'Z' ? 65 : 97;
      const shift = key.charCodeAt(keyIndex % key.length) - 65;
      keyIndex++;
      return String.fromCharCode(((char.charCodeAt(0) - base - shift + 26) % 26) + base);
    }
    return char;
  }).join('');
};

// ============= Atbash Cipher =============
export const atbashCipher = (text: string): string => {
  return text.replace(/[a-zA-Z]/g, (char) => {
    const base = char <= 'Z' ? 65 : 97;
    return String.fromCharCode(base + (25 - (char.charCodeAt(0) - base)));
  });
};

// ============= Leet Speak =============
const leetMap: Record<string, string> = {
  'a': '4', 'A': '4',
  'e': '3', 'E': '3',
  'i': '1', 'I': '1',
  'o': '0', 'O': '0',
  's': '5', 'S': '5',
  't': '7', 'T': '7',
  'l': '1', 'L': '1',
  'g': '9', 'G': '9',
  'b': '8', 'B': '8',
};

const reverseLeetMap: Record<string, string> = {
  '4': 'a', '3': 'e', '1': 'i', '0': 'o',
  '5': 's', '7': 't', '9': 'g', '8': 'b',
};

export const toLeetSpeak = (text: string): string => {
  return text.split('').map(char => leetMap[char] || char).join('');
};

export const fromLeetSpeak = (text: string): string => {
  return text.split('').map(char => reverseLeetMap[char] || char).join('');
};

// ============= Custom Cipher =============
export interface CustomCipherMapping {
  [key: string]: string;
}

export const applyCustomCipher = (text: string, mapping: CustomCipherMapping): string => {
  return text.split('').map(char => mapping[char] || char).join('');
};

export const createReverseCipherMapping = (mapping: CustomCipherMapping): CustomCipherMapping => {
  const reversed: CustomCipherMapping = {};
  Object.entries(mapping).forEach(([key, value]) => {
    reversed[value] = key;
  });
  return reversed;
};

// ============= Code Snippet Generator =============
export const generateCodeSnippet = (operation: string, params?: Record<string, any>): string => {
  const snippets: Record<string, string> = {
    base64Encode: `// Base64 Encode
const encoded = btoa(unescape(encodeURIComponent("${params?.input || 'your text'}")));
console.log(encoded);`,
    
    base64Decode: `// Base64 Decode
const decoded = decodeURIComponent(escape(atob("${params?.input || 'encoded text'}")));
console.log(decoded);`,
    
    caesarCipher: `// Caesar Cipher (shift: ${params?.shift || 3})
function caesarCipher(text, shift) {
  return text.replace(/[a-zA-Z]/g, char => {
    const base = char <= 'Z' ? 65 : 97;
    return String.fromCharCode(((char.charCodeAt(0) - base + shift) % 26) + base);
  });
}
console.log(caesarCipher("${params?.input || 'Hello'}", ${params?.shift || 3}));`,
    
    md5: `// MD5 Hash (requires crypto library)
// Note: Use a proper crypto library like crypto-js for production
const hash = CryptoJS.MD5("${params?.input || 'your text'}").toString();
console.log(hash);`,
    
    sha256: `// SHA-256 Hash
async function sha256(text) {
  const buffer = await crypto.subtle.digest('SHA-256', 
    new TextEncoder().encode(text));
  return Array.from(new Uint8Array(buffer))
    .map(b => b.toString(16).padStart(2, '0')).join('');
}
sha256("${params?.input || 'your text'}").then(console.log);`,
  };
  
  return snippets[operation] || '// Code snippet not available';
};
