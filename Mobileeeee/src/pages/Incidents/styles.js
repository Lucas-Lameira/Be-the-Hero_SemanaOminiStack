import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container : {

        flex: 1, //ocupa toda a tela      
        paddingHorizontal: 24, //equivale ao padding:0 24; do css
        paddingTop: Constants.statusBarHeight + 15, //adciona ao padding top o valor da status bar do celular + 15px
        
    },
    header: {
        flexDirection: 'row', //por padrão no react-native é row e no navegador é 'column
        justifyContent: 'space-between',
        alignItems: 'center',
    
    },
    headerText: {
        fontSize: 15, // nao ta mudando
        color: '#737380', // nao ta mudando
    },
    textBold: {
        fontWeight: 'bold',
    },
    title: {
        fontSize: 30,
        marginBottom: 16,
        marginTop: 35,
        color:'#13131a',
        fontWeight: '700',
        fontStyle: "italic",
    },
    hero: {
        color:'#e02041'
    },
    description: {
        fontSize: 16,
        lineHeight: 20,
        color: '#737380'
    },
    incidentList : {
        marginTop: 20,
    },
    incident: {
        padding: 24,
        backgroundColor: '#FFF',
        borderRadius: 12,
        marginBottom: 16,
    },
    incidentProperty: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: '700',
    },
    incidentValue: {
        marginTop: 5,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380',

    },
    botao: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    botaoVerDetalhes: {
        color: '#e02041',
        fontSize: 15,
        fontWeight: 'bold',
    },
});