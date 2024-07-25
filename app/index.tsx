import React, { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import { View, Text } from 'react-native';

export default function Index() {
  const router = useRouter();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  useEffect(() => {
    if (isReady) {
      router.replace('/login');
    }
  }, [isReady, router]);

  return (
    <View>
      <Text>Redirigiendo...</Text>
    </View>
  );
}
