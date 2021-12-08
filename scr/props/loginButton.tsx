import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

interface ButtonCompts {
    text: string;
    onPress(): any; 
 }
 
export default function LoginButton<ButtonCompts>({ text, onPress }) {
    const styles = StyleSheet.create({
        button: {
            alignItems: 'center',
            marginTop: 28,
            paddingVertical: 16,

            color:'#fff',
            backgroundColor: '#cb3be6',

            borderRadius: 30,
        },

        buttonText: {
           fontSize: 16,
           color: '#fff',  
        },
    });

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{ text }</Text>
            </View>
        </TouchableOpacity> 
    );

}