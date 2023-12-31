import { StyleSheet} from 'react-native';

export const Styling = StyleSheet.create({

    // Pages Common Component
    container: {
      flex: 1,
      backgroundColor: '#0D0D0D',
    },
    pageHeadingText:{
        fontSize:28,
        fontWeight: 'bold',
        color:'white',
        paddingVertical:10,
        width:'100%',
        textAlign:'center',
        textShadowRadius: 3,
    },

    // ----- Homepage Common Components -----
    headingText:{
        fontSize:22,
        fontWeight:'500',
        textAlign:'center',
        marginTop:20,
        marginBottom: 4,
        color:'white',
        width:'100%'
    },
    horizontalLine:{
        borderBottomColor: '#FFC600', 
        borderBottomWidth: 3, 
        marginBottom: 6
    },
    
    // -------- Homepage Intro Component --------
    homepageIntroView:{
        backgroundColor:'rgba(1,1,1,0.3)', 
        paddingTop:30,
        paddingBottom: 70,
        marginHorizontal: 15
    },  
    headerText:{
        fontSize:24,
        fontWeight: 'bold',
        color:'white',
        letterSpacing: 2,
        textShadowOffset: { width: 1, height: 1 },
        textShadowColor: '#FFC600',
        textShadowRadius: 3,
    },
    detailText:{
        fontSize:14,
        marginVertical: 5,
        color:'white',
        textAlign: 'justify'  
    },
    startButton:{
        backgroundColor: '#FFC600',
        borderRadius: 5,
        padding: 10, 
        width: 160,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    //  --------- Destination Component -------   
    cardLayout:{    
        marginHorizontal:'30px',
    },

    // ------- Destination Card Component ------
    destinationCard:{
        marginVertical:15,
        borderRadius: 5,
        flexDirection: 'column'
    },
    destinationCardImage:{
        width: '100%', 
        height: 150, 
        borderTopLeftRadius: 5, 
        borderTopRightRadius: 5
    },
    destinationCardTextView:{
        flexDirection:'row', 
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    destinnationCardMainText:{
        color:'white', fontWeight: 500, fontSize: 20
    },
    destinationCardCountryText:{
        color:'gray', 
        fontSize: 14
    },

    // ------ Country Component ------
    countryView:{
        flexDirection: 'row', 
        marginVertical: 10,
        marginHorizontal: 5,
    },
    countryImage:{
        width: 80, 
        height: 80,
        marginHorizontal: 5
    },
    countryImageStyle:{borderRadius: 50},
    countryImageText:{
        marginHorizontal:'auto',
        alignSelf:'center',
        color:'#E5E5CB', 
        marginTop: 5,
        flexWrap: 'nowrap'
    },
    
    // ------- Login Signup Page -----
    detailText2:{
        fontSize:14,
        marginVertical: 20,
        color:'white',
        textAlign: 'justify'  
    },

    // -------- Profile Page --------
    editButton:{
        backgroundColor: '#FFC600',
        borderRadius: 5,
        padding: 10, 
        marginTop: 20,
        fontWeight:'bold',
        textAlign:'center'
    }
});
  