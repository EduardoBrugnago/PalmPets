import React from 'react';
import { useContext, useState } from 'react';
import { View, Button, Image, Text, TextInput, StyleSheet, } from 'react-native';

import AuthContext from '../../context/auth';

import ButtonLogin from '../../props/loginButton';

const SignIn: React.FC = () => {
    const { signed, signIn } = useContext(AuthContext);

    const [emailSign, onChangeEmail] = useState('');
    const [passwordSign, onChangePassword] = useState('');

    function handleSignIn() {
        signIn({email : emailSign, password : passwordSign});
    }

    return (
        <View style={styles.container}>
            <View  style={styles.headerContainer}>   
                <Image
                    style={styles.tinyLogo}
                    source={require('../../images/ico.png')}
                />
                <Text style= {styles.headerTitle} >LOGIN</Text>
                <Text style= {styles.headerSubtitle}>Insira seus dados para continuar</Text>
            </View>
            <View style={styles.loginContainer}>
                <Text style={styles.loginText}>EMAIL</Text>
                <TextInput style={styles.input}
                    onChangeText={onChangeEmail}
                    value={emailSign}
                    placeholder="user@exemplo.com.br"
                />
                <Text style={styles.loginText}>SENHA</Text>
                <TextInput style={styles.input}
                    onChangeText={onChangePassword}
                    value={passwordSign}
                    secureTextEntry={true}
                    placeholder="*********"
                />
                <ButtonLogin text='ENTRAR' onPress={handleSignIn}/>
            </View>
            
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',

        marginTop: '20%',
        color: 'white',
    },

    headerContainer: {
        margin: 30,
        alignItems: 'flex-start'
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: '#48494d',
    },

    headerSubtitle: {
        fontSize: 16,
        color: '#48494d',
    },
    
    loginContainer: {
        alignItems: 'stretch',
        justifyContent: 'space-evenly',
        margin: 30,

    },

    loginText: {
        fontSize: 16,
        fontWeight: "600",
        color: '#cb3be6',
    },

    input: {
        marginBottom: 16,

        width: '100%',
        fontSize: 16,
        color: '#383838',
    

        borderColor: '#48494d',
        borderBottomWidth: 1,
    },

    tinyLogo: {
        marginVertical: 12,
        width: 50,
        height: 50,
    },
});

export default SignIn;