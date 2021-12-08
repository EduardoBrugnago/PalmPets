import React, { useState } from "react";
import { Modal, View, Text, Image, Linking, StyleSheet, TouchableOpacity, Alert } from "react-native";

interface ModalComponents {
    modalVisible: boolean;
    setModalVisible(value: boolean): void;
    petInfo: Object | any;
    categoryInfo: Object | null;
 }

export default function ModalPet<ModalComponents>({modalVisible, setModalVisible, petInfo, categoryInfo}) {

    const styles = StyleSheet.create({
        modalContainer: {
            width: '100%',
            height: '100%',
            alignItems: 'flex-start',
            justifyContent: 'space-evenly',
    
            padding: 32,
    
            backgroundColor: '#ffc11b',
        },

        modalHeader: { 
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'space-evenly',

        },

        modalName: {
            fontSize: 20,
            fontWeight: "700",
            color: '#48494d',
        },

        modalBody: {
            
            alignItems: 'stretch',
            justifyContent: 'flex-start',

            padding: 30,
            borderRadius: 12,

            backgroundColor: '#fff',
        },
        modalText: {
            marginBottom: 8,
            fontSize: 16,
            fontWeight: "400",
            color: '#48494d',
        },

        modalImg: {
            width: 150,
            height: 150,
            borderRadius: 12,
            marginRight: 30,
        },
        modalExitButton: {
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#cb3be6',
            width: 40,
            height: 40,

            padding: 6,

            borderRadius: 6,
        },

        modalEmailButton: {
            flexDirection:"row",
            alignSelf:"auto",

            alignItems: 'center',
            justifyContent: 'space-evenly',
   
            marginTop: 16,
            padding: 16,
            borderRadius: 22,
            
            backgroundColor: '#cb3be6',
        },
        modalTextButton: {
            fontSize: 16,
            fontWeight: 'bold',
            color: '#fff',
        },
     });
    
    const[message, setMessage] = useState(`Eu vi no aplicativo da PalmPets que o ${petInfo.name} esta para adoção, estou interessado em adota-lo`);

    return (
        <Modal
            animationType="slide"
            visible={modalVisible}
            onShow={() => {
                setMessage(`Eu vi no aplicativo da PalmPets que o ${petInfo.name} esta para adoção, estou interessado em adota-lo`);
            }}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.modalContainer}>
                <TouchableOpacity style={styles.modalExitButton}  onPress={() => {setModalVisible(!modalVisible)}}>
                    <Text style={styles.modalTextButton}>X</Text>
                </TouchableOpacity>
                <View style={styles.modalHeader}> 
                    <Image style={styles.modalImg} source={{uri:petInfo.img}}/> 
                    <View> 
                        <Text style={styles.modalName}>Nome: {petInfo.name} </Text>
                        <Text style={styles.modalText}>{categoryInfo.name} </Text>
                        <Text style={styles.modalText}>Idade: {petInfo.age}</Text>
                        <TouchableOpacity style={styles.modalEmailButton}  onPress={() => {}}>
                            <Text style={styles.modalTextButton}>Ver mais fotos</Text>
                        </TouchableOpacity>
                    </View>  
                </View>
                <View style={styles.modalBody}> 
                    <Text style={styles.modalText}>Descricao: {petInfo.description} </Text>
                    <Text style={styles.modalText}>Telefone: {petInfo.phone} </Text>
                    <Text style={styles.modalText}>Email: {petInfo.email} </Text>
                    <TouchableOpacity style={styles.modalEmailButton}  
                        onPress={() => {
                            Linking.openURL(`mailto:${petInfo.email}?subject=PalmPets - Adoção ${petInfo.name}&body=${message}`);
                        }}
                    >
                        <Image style={{width: 30, height: 30, tintColor: '#fff',}} source={require('../images/email.png')} />
                        <Text style={styles.modalTextButton}>Entrar em contato</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
 }
