import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    primary: {
      base: '#9AC9FB',
      light: '#CDFCFF',
      dark: '#6898C8'
    },
    warning:{
      'base': '#FAFA88',
      'light': '#FFFFBA',
      'dark': '#C5C758'
    },
    danger: {
      'base': '#DB5752',
      'light': '#FF887E',
      'dark': '#A42429'
    }
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'semibold',
      },
      variants: {
        'primary': {
          bg: 'primary.base',
          color: '#FFF',
          _hover: {
            bg: 'primary.dark'
          },
          _active: {
            bg: 'primary.dark'
          }
        },
        'primary-dark': {
          bg: 'primary.base',
          color: '#000',
          _hover: {
            bg: 'primary.dark'
          },
          _active: {
            bg: 'primary.dark'
          }
        },
        'primary-out': {
          bg: 'transparent',
          color: 'primary.base',
          border: '2px',
          borderStyle: 'solid',
          borderColor: 'primary.base',
          _hover: {
            color: 'primary.dark',
            borderColor: 'primary.dark'
          },
          _active: {
            color: 'primary.dark',
            borderColor: 'primary.dark'
          }
        },
        'warning': {
          bg: 'warning.base',
          color: '#FFF',
          _hover: {
            bg: 'warning.dark'
          },
          _active: {
            bg: 'warning.dark'
          }
          
        },
        'warning-dark': {
          bg: 'warning.base',
          color: '#000',
          _hover: {
            bg: 'warning.dark'
          },
          _active: {
            bg: 'warning.dark'
          }
        },
        'warning-out': {
          bg: 'transparent',
          color: 'warning.base',
          border: '2px',
          borderStyle: 'solid',
          borderColor: 'warning.logo',
          _hover: {
            color: 'warning.dark',
            borderColor: 'warning.dark'
          },
          _active: {
            color: 'warning.dark',
            borderColor: 'warning.dark'
          }
        },
        'danger': {
          bg: 'danger.base',
          color: '#FFF',
          _hover: {
            bg: 'danger.dark'
          },
          _active: {
            bg: 'danger.dark'
          }
        },
        'danger-dark': {
          bg: 'danger.base',
          color: '#000',
          _hover: {
            bg: 'danger.dark'
          },
          _active: {
            bg: 'danger.dark'
          }
        },
        'danger-out': {
          bg: 'transparent',
          color: 'danger.base',
          border: '2px',
          borderStyle: 'solid',
          borderColor: 'danger.logo',
          _hover: {
            color: 'danger.dark',
            borderColor: 'danger.dark'
          },
          _active: {
            color: 'darnger.dark',
            borderColor: 'danger.dark'
          }
        },
      }
    }
  }
});