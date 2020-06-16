import React from 'react';
import { SafeAreaView } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import Home from './screens/Home';

export default function App() {
  return (
      <SafeAreaView>
        <PaperProvider>
            <Home />
        </PaperProvider>
      </SafeAreaView>
  );
}