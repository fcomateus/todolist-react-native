import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme'

import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';

import { Header } from '@components/Header';
import { List } from '@components/List';


export default function App() {
  
  // const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_700Bold })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        backgroundColor='transparent'
        translucent
      />
        <Header />
        <List />
    </ThemeProvider>
  );
}
