import { useEffect, useState } from 'react'
import { useRouter } from 'expo-router'

export default function Index() {
	const router = useRouter()
	const [hasMounted, setHasMounted] = useState(false)

	useEffect(() => {
		setHasMounted(true)
	}, [])

	useEffect(() => {
		if (hasMounted) {
			router.push('/home')
		}
	}, [hasMounted, router])

	return null
}
