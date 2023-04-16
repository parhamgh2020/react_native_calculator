import { StyleSheet, Switch, Text, View, SafeAreaView } from 'react-native';
import { useState } from 'react';
import { ThemeContext } from './src/context/ThemeContext';
import Keyboard from './src/components/Keyboards';
import { colors } from './src/styles/Color';

export default function App() {
  const [theme, setTheme] = useState('light')
  return (
    <ThemeContext.Provider value={theme}>
      <SafeAreaView style={
        theme === 'light'
          ? styles.container
          : [styles.container, { backgroundColor: 'black' }]
      }>
        <Switch
          value={theme === 'dark'}
          onValueChange={
            () => setTheme(
              theme === 'light'
                ? 'dark' :
                'light'
            )
          }
        />
        <Text style={
          theme === 'light'
            ? [{ color: colors.dark }]
            : [{ color: colors.light }]}
        >
          {theme}
        </Text>
        <Keyboard />
      </SafeAreaView>
    </ThemeContext.Provider >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
});
