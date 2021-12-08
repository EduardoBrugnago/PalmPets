import React, { useEffect, useState } from 'react';
import { View, Text, FlatList,Image, StyleSheet } from 'react-native';

import PetList from '../../props/list';
import Dropdown from '../../props/dropdown';
import Modal from '../../props/modal';

import api from '../../services/api';

const Home: React.FC = () => {
    useEffect(() => {
        getAnimals()
            .catch(e => {
            console.log('There has been a problem with your get operation: ' + e.message);
        });
        
        getCategories()
            .catch(e => {
            console.log('There has been a problem with your get operation: ' + e.message);
        });
        
    }, []);

    const [dataCategories, setDataCategories] = useState<Object>([]);
    const [dataPet, setDataPet] = useState<Object>([]);

    

    async function getCategories() {
        let response = await api.get('/categories');

        if(!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
        }

        const responseData : Object = await response.data;

        setDataCategories(responseData);
    };

    async function getAnimals() {
        let response = await api.get('/animals');

        if(!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
        }

        const DATA= await response.data;

        setDataPet(DATA);
    };

    //Categorias e pets que aparecem na lista
    

    const [currentList,setCurrentList] = useState({
        name: "American Curl",
        img: "https://cdn.fakercloud.com/avatars/drewbyreese_128.jpg",
        id: "1"
    });
    const [modalPet, setModalPet] = useState({});
    const [modalVisible, setModalVisible] = useState(false);

    const renderItem = ({ item }) => (
        <PetList pet={ item } category={currentList} onPress={handleModal}/>
    );

    function handleListUpdate(index) {
        setCurrentList(index);
        console.log(currentList);
    }

    async function handleModal(petIndex) {
        await api.get(`/animals/${petIndex}`).then((response) => response.data).then( (responseData ) => {
            setModalPet(responseData);
            console.log(responseData);
        });
        setModalVisible(true);
    }

    return (
        <View style={styles.container}>
            <Modal 
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                petInfo={modalPet}
                categoryInfo={currentList}
            />
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>HOME</Text>
                <Text style={styles.headerSubtitle}>Escolha uma categoria para visualizar</Text>
                <Dropdown categories={dataCategories} onPress={handleListUpdate}/>
            </View>
            <View style={styles.listContainer}>
                <Text style={styles.listTitle}>Resultados da busca:</Text>
                {!!currentList ? <FlatList
                    data={dataPet}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                /> :  console.log(currentList)}
                
            </View>            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',

        backgroundColor: '#fff',
    },

    headerContainer: {
        top: 0,
        margin: 24,
        marginTop: 100,
    },

    headerTitle: {
        fontSize: 16,
        fontWeight: "700",
        color: '#48494d',
    },

    headerSubtitle: {
        fontSize: 16,
        fontWeight: "400",
        color: '#48494d',
    },

    listContainer: {
        maxHeight: '65%',
        padding: 24,
        backgroundColor: '#fbe8ff',
    },

    listTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#cb3be6',
    },

});

export default Home;