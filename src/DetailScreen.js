import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,Dimensions,TouchableOpacity,ScrollView } from 'react-native';
import ImageGallery from "@paraboly/react-native-image-gallery";
import { FontAwesome,Entypo,Fontisto,AntDesign,MaterialCommunityIcons } from '@expo/vector-icons';
export default function DetailsScreen({navigation}) {
 
  return (
    <ScrollView >
        <View style={styles.container}>
       <View style={styles.viewLogo}>
      
      
        
       <Image  style={styles.logo1}  source={require('../assets/two.jpg')} /> 
       <Text style={{position: 'absolute',top:80,left:30}}>
      <AntDesign  name="star" size={80} color="#8022d9" /> </Text>
        </View>

        
        <TouchableOpacity
        style={styles.button}
        onPress={() =>  navigation.navigate('Details')} >     
        <Text style={{color:"black"}}>
       
        Moov recrute 2 Software developer
           </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>  navigation.navigate('Details')} >     
        <Text style={{color:"black"}}>
      
        <Entypo name="location" size={15} color="#8022d9" /> Lomé | CDI | <Fontisto name="date" size={15} color="#8022d9" /> 24  déc
           </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>  navigation.navigate('Details')} >     
        <Text style={{color:"black"}}>
     
         Experience : 2 ans | Niveau : Bac+3
           </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>  navigation.navigate('Details')} >     
        <Text style={{color:"black"}}>
        <AntDesign name="infocirlceo" size={15} color="#8022d9" /> <Text> </Text>
        Description : Nous recrutons
           </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>  navigation.navigate('Details')} >     
        <Text style={{color:"black"}}>
    
        <MaterialCommunityIcons name="gmail" size={40} color="#8022d9" />
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

});
