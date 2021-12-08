import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

interface ListComponentes {
    pet:object | null;
    categories: string; 
    onPress(value: string): void;
 }

export default function PetList<ListComponentes>({ pet, category, onPress }) {
    const styles = StyleSheet.create({
        container: {
            flex:1,
            flexDirection: 'row',

            marginTop: 8,
            backgroundColor: '#fff',
            borderRadius: 12,
        },

        petContainer: {
            justifyContent: 'center',

        },

        category: {
            fontSize: 18,
            fontWeight: "600",
            color: '#48494d',
            marginBottom: 8,
        },

        petInfo: {
            fontSize: 16,
            fontWeight: "400",
            color: '#48494d',
        },

        petImg: {
            width: 100,
            height: 100,
            marginRight: 12,
            borderBottomLeftRadius: 12,
            borderTopLeftRadius: 12,
        }

    });
    
    return (
        <TouchableOpacity style={styles.container} onPress={() => {onPress(pet.id)}}> 
            <Image
                    style={styles.petImg}
                    source={{uri:pet.img}}
                />
            <View style={styles.petContainer}>
                <Text style={styles.category}>{category}</Text>
                <Text style={styles.petInfo}>{pet.name}</Text>
                <Text style={styles.petInfo}>{pet.age} anos</Text>
            </View> 
        </TouchableOpacity>
    );

    
}