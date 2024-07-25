import Background from '@/components/login/Background';
import * as React from 'react';
import { Text } from 'react-native-paper';
import TextInput from '@/components/login/TextInput';
import { Pressable } from 'react-native';
import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar'
import useAdaptiveFont from '@/hooks/useAdaptativeFont';

const LoginPage = () => {

  const fontSizes = useAdaptiveFont();

  return (
    <>
      <StatusBar style='light' />
      <Background>

        <TextInput
          placeholder="Ingrese Usuario"
          returnKeyType="next"
          autoCapitalize="none"
          textContentType="emailAddress"
          keyboardType="email-address"
        />

        <TextInput
          placeholder="Ingrese Contraseña"
          returnKeyType="done"
          secureTextEntry
        />

        <Pressable
          style={

            ({ pressed }) => [
            styles.button,
            { backgroundColor: pressed ? '#D85D0A' : '#EA580C' }
            
          ]
        }
        >
          <Text style={[styles.buttonText, { fontSize: fontSizes.buttonText }]}>INICIAR SESIÓN</Text>
        </Pressable>
      </Background>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginVertical: 12
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    padding: 12,
  },
});

export default LoginPage;
