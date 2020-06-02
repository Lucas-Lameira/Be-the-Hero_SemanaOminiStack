import React, {useEffect, useState} from 'react';
import {View, Image, Text, TouchableOpacity, FlatList} from 'react-native';
import {Feather} from '@expo/vector-icons';
import { useNavigation} from '@react-navigation/native'; //navegar entre telas

import api from '../../services/api';

import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function Incidents (){
    const [incidents, setIncidents] = useState([]);//iniciar o estado com o mesmo tipo da informação a ser preenchida
    const [total, setTotal] = useState(0);

    //Para paginação
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const navigation = useNavigation();//similar ao useHistory

    function navigateToDetail(incident) {
        navigation.navigate('Detail', {incident});// O nome 'Detail' precisa ser o mesmo nomeado na rota 'name="Detail" na routes.js
    }

    //Criada manualmene XD
    async function loadIncidents() {
        if(loading) return;           
        if (total >0 && incidents.length == total) return;                   
        
        setLoading(true);

        const response = await api.get('/incidents', {
            params: {page}
        });

        //colocar os dados, que vieram na response, dentro de um estate
        //anexar dois vetores dentro de um
        setIncidents([...incidents, ...response.data]);//response.data é onde os dados, que vieram da nossa api, se encontram
        setTotal(response.headers['x-total-count']);//passado no haeders 
        setPage(page+1);
        setLoading(false);
    }

    //usar para pegar os dados
    useEffect(() => {
        loadIncidents();
    }, [])//função disparada quando o array mudar

    return(
        <View style={styles.container}>
            
            <View style={styles.header}> 
                <Image source={logoImg}/>
                
                <Text Style={styles.headerText}> 
                    Total de <Text style={styles.textBold}>{total} Casos.</Text>
                </Text>
            </View>
            
            <Text style={styles.title}> 
                <Text style={styles.hero}>Be</Text>m-vindo!
            </Text>

            <Text style={styles.description}>
                Escolha um dos casos abaixo e salve o dia.
            </Text>

            <FlatList 
                style={styles.incidentList}
                data={incidents} //cada item do array é um incident por exemplo
                keyExtractor={incident => String(incident.id)} //precisa retornar qual a informação unica nesses incidents (seria o ID )
                //showsVerticalScrollIndicator={false}//tira a barra de rolagem lateral 
                onEndReached={loadIncidents}
                onEndReachedThreshold={0.3}//a quantos % do final da lista deve-se carregar novos itens
                renderItem={({item: incident}) => (
                    <View style={styles.incident}>
                    
                        <Text style={styles.incidentProperty}>ONG:</Text>
                        <Text style={styles.incidentValue}>{incident.name}</Text>
                                            
                        <Text style={styles.incidentProperty}>CASO:</Text>
                        <Text style={styles.incidentValue}>{incident.title}</Text>
                                            
                        <Text style={styles.incidentProperty}>VALAOR:</Text>
                        <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL' }).format(incident.value)}</Text>
                        
                        <TouchableOpacity style={styles.botao} onPress={() => navigateToDetail(incident)}>
                            
                            <Text style={styles.botaoVerDetalhes}>Ver mais detalhes</Text>
                            <Feather name="arrow-right" size={22} color="#e02041"/>

                        </TouchableOpacity>
                    </View>
                )}//função que renderixa os itens do data e retorna jsx
            />    
        </View>          
    );
}