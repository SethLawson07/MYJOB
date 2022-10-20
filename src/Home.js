import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,Dimensions,TouchableOpacity,ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import ImageGallery from "@paraboly/react-native-image-gallery";
import { FontAwesome } from '@expo/vector-icons';

export default function HomeScreen({navigation}) {
 
  return (
    <ScrollView >
        <View style={styles.container}>
       <View style={styles.viewLogo}>
      
      
        
       <Image  style={styles.logo1}  source={require('../assets/one.jpg')} /> 
       <Text style={{position: 'absolute',top:80,left:30}}>
      <AntDesign  name="star" size={80} color="#8022d9" /> </Text>
        </View>


        <TouchableOpacity
        style={styles.button1}
        onPress={() =>  navigation.navigate('Publish')} >     
        <Text style={{color:"white"}}>
          Publier une offre d'emploi
           </Text>
      </TouchableOpacity>
        
        <TouchableOpacity
        style={styles.button}
        onPress={() =>  navigation.navigate('Details')} >     
        <Text style={{color:"black"}}>
        <FontAwesome name="building" size={24} color="#8022d9" /> <Text></Text>
        Moov | 2 | Software developer
           </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>  navigation.navigate('Details')} >     
        <Text style={{color:"black"}}>
        <FontAwesome name="building" size={24} color="#8022d9" /> <Text></Text>
        Moov | 2 | Software developer
           </Text>
      </TouchableOpacity>
     


   
     
   
       
       
       
      <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
   alignItems: 'center',
    justifyContent: 'center',
  },
  leftCircle: {
    backgroundColor: '#24a6d5',
    position : "absolute",
    width: 200,
    height: 200,
    borderRadius:100,
    left: -50,
    top: -50
  },
  viewLogo: {
    /*   marginLeft:60,
      marginRight:10,
      marginTop:20,*/
      marginBottom:30
  },    
   logo1:{     
      width:Dimensions.get('window').width,
      height:Dimensions.get('window').height/2,
     // height:Dimensions.get('window').height/1.5,
      alignContent:'center',  
  },
  button : {
    alignContent:'center',
   // marginTop:2,
 marginBottom:20,
  alignItems: "center",
  backgroundColor: "white",
  borderRadius:10,
  paddingLeft:10,
  paddingRight:10,
 paddingTop:10,
 paddingBottom:10,
 marginLeft:50,
 marginRight:50,
 height:Dimensions.get('window').height/10,
 width:Dimensions.get('window').width/1.2,
 borderColor:"#8022d9",
 border:0.5
},
button1 : {
  marginTop:10,
marginBottom:20,
alignItems: "center",
backgroundColor: "#8022d9",
borderRadius:10,
paddingLeft:25,
paddingRight:25,
paddingTop:10,
paddingBottom:10,
marginLeft:50,
marginRight:50
},

});
