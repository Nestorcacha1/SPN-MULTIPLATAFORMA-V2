import { Slot } from 'expo-router';
import { PaperProvider } from 'react-native-paper';
import 'react-native-reanimated';

export default function RootLayout() {

  return (
    <>
      <PaperProvider>

          <Slot/>
        
      </PaperProvider>
    </>
  );
}
