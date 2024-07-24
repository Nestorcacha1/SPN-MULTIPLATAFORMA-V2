import { Slot } from 'expo-router'
import 'react-native-reanimated'
import { PaperProvider } from 'react-native-paper'
import { SafeAreaProvider } from 'react-native-safe-area-context'
export default function RootLayout() {
	return (
		<>
			<SafeAreaProvider>
				<PaperProvider>
					<Slot />
				</PaperProvider>
			</SafeAreaProvider>
		</>
	)
}
