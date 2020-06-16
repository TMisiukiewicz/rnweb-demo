import React from 'react';
import { SafeAreaView } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Bottombar } from './components/Bottombar';

export default function App() {
  return (
      <SafeAreaView style={{flex: 1}}>
        <PaperProvider>
            <Bottombar />
        </PaperProvider>
      </SafeAreaView>
  );
}