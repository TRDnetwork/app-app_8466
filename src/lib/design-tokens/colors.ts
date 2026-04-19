export const colors = {
  bg: '#F5F5DC', // cream
  surface: '#E8DCC5', // warm beige
  text: '#2F4F2F', // dark green
  textDim: '#6F4E37', // medium brown
  accent: '#8B4513', // dark brown
  accentAlt: '#6F4E37', // medium brown
  border: '#C1B39E', // light brown
  success: '#4CAF50',
  warning: '#FF9800',
  error: '#D32F2F',
  white: '#FFFFFF',
  transparent: 'transparent',
} as const;

export type ColorName = keyof typeof colors;