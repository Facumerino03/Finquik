import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native';
import { router } from 'expo-router';
import { useState } from 'react';

export default function DetailsScreen() {
  const [name, setName] = useState('');
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Details</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Escribe tu nombre aquí"
        value={name}
        onChangeText={setName}
      />
      
      {name ? (
        <Text style={styles.greeting}>Hello {name}</Text>
      ) : null}
      
      <Pressable 
        onPress={() => router.back()}
        style={styles.button}
      >
        <Text style={styles.buttonText}>
          Back
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 32,
  },
  input: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  greeting: {
    fontSize: 18,
    marginBottom: 30,
    color: '#3b82f6',
    fontWeight: '500',
  },
  button: {
    backgroundColor: '#6b7280',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: '500',
  }
});