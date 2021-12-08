import React, { useEffect, useState } from "react";
import { View, StyleSheet} from "react-native";
import {Picker} from '@react-native-picker/picker';

export default function Dropdown({categories, onPress}) {   
    const styles = StyleSheet.create({
        container: {
            marginTop: 16,
            maxWidth:160,
            backgroundColor: '#ffc11b',
            borderRadius: 30,
        },
        selected: {
            
            width: '100%',
            maxWidth:160,
            alignSelf: 'auto',  
            padding: 4,
        },
    });
    const [indexName,setIndexName] = useState('');
    const [indexValue, setIndexValue] = useState('');

    useEffect(() => {
        onPress(indexName);
    }, [indexValue]);
    const DATA = categories;

    return (
        <View style={styles.container}>
            <Picker
                selectedValue={indexValue}
                style={styles.selected}
                onValueChange={(itemValue, itemIndex) => {setIndexValue(itemValue); 
                    setIndexName(DATA[itemIndex - 1]);
                    
                }}
            > 
                <Picker.Item  label='Categorias' value/>

                {DATA.map(item => <Picker.Item key={item.id}  label={item.name} value={item.id} />)}
            </Picker>
        </View>    

    ); 
}