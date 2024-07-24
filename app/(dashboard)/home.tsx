import * as React from 'react'
import { Appbar, Menu, Provider, Drawer } from 'react-native-paper'
import { View, Text } from 'react-native'
import { useRouter } from 'expo-router'

export default function HomePage() {
	const [visible, setVisible] = React.useState(false)
	const navigation = useRouter()
	const [active, setActive] = React.useState('')

	const openMenu = () => setVisible(true)
	const closeMenu = () => setVisible(false)

	return (
		<Provider>
			<View style={{ flex: 1 }}>
				<Appbar.Header>
					<Menu
						visible={visible}
						onDismiss={closeMenu}
						anchor={
							<Appbar.Action icon='menu' color='black' onPress={openMenu} />
						}
						style={{ marginTop: 80, backgroundColor: ' white' }}
					>
						{/* items */}
						<Drawer.Section
							title='Dashboard              '
							style={{ backgroundColor: 'white' }}
						>
							<Drawer.Item
								label='Login'
								icon='login'
								active={active === 'first'}
								onPress={() => {
									setActive('first')
									closeMenu()
									navigation.push('login')
								}}
							/>
							<Drawer.Item
								label='Home'
								icon='home'
								active={active === 'second'}
								onPress={() => {
									setActive('second')
									closeMenu()
									navigation.push('home')
								}}
							/>
						</Drawer.Section>
					</Menu>
					<Appbar.Content title='Pagina Principal' />
				</Appbar.Header>
				<View
					style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
				>
					<Text>Hello Page 1</Text>
				</View>
			</View>
		</Provider>
	)
}
