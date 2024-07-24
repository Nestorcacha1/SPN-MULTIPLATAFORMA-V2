import { Slot } from 'expo-router';
import 'react-native-reanimated';
import { PaperProvider } from 'react-native-paper';

export default function RootLayout() {

  return (
    <>
      <PaperProvider>

          <Slot/>
        
      </PaperProvider>
    </>
  );
}
