'use client'

import { createTheme } from '@mui/material/styles';
import { Titillium_Web } from "next/font/google";

const titillium = Titillium_Web({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
});

const theme = createTheme({
  palette: {
    primary: {
      main: '#198754',
    },
    secondary: {
      main: '#a80000',
    },
    text: {
      primary: '#000000',
      secondary: '#000000',
    },
  },
  typography: {
    allVariants: {
      color: '#000000',
      fontFamily: titillium.style.fontFamily
    },
    body1: {
      fontSize: '16px'
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#fff',
          backgroundColor: '#a80000',
          '&:hover': {
            backgroundColor: '#363636',
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: '#fff',
          backgroundColor: '#a80000',
          '&:hover': {
            backgroundColor: '#363636',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#363636',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#198754',
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#363636',
          '&.Mui-focused': {
            color: '#198754',
          },
        },
      },
    },

  },
});

export default theme;