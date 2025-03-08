import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function SignupScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign Up</Text>
            
            <TextInput
                style={styles.input}
                placeholder="Full Name"
                placeholderTextColor="#fff"
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#fff"
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#fff"
                secureTextEntry
            />
            <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                placeholderTextColor="#fff"
                secureTextEntry
            />
            
            <TouchableOpacity style={styles.signupButton} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.signupText}>Sign Up</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.loginText}>Already have an account? Login</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6BAAAE',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 28,
        color: '#fff',
        marginBottom: 20,
        fontWeight: 'bold',
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 15,
        color: '#fff',
    },
    signupButton: {
        backgroundColor: 'rgba(148, 143, 188, 0.9)',
        paddingVertical: 12,
        width: '100%',
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 15,
    },
    signupText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    loginText: {
        color: '#fff',
        fontSize: 16,
        marginTop: 10,
    },
});
