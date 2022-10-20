import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View,TextInput,Image,TouchableOpacity,Dimensions } from 'react-native';

export default function RegisterScreen({navigation}) {

  const [height, setHeight] = useState();
  const [width, setWidth] = useState();

  
  useEffect(() => {

    setHeight(Dimensions.get('window').width);
    setWidth(Dimensions.get('window').height);
   

}, []);

  return (
    <View style={styles.container}>
      <View style={styles.viewLogo}>
          <Image  style={styles.logo1}  source={require('../../assets/login.png')} />  
        </View>
     
        <TextInput
        style={styles.input}
        //onChangeText={setNom}
      // value={nom}
        placeholder="Pseudo"
        keyboardType="default"
        
      />
      <TextInput
        style={styles.input}
        //onChangeText={setNom}
      // value={nom}
        placeholder="Ville"
        keyboardType="default"
        
      />
      <TextInput
        style={styles.input}
        //onChangeText={setNom}
      // value={nom}
        placeholder="Email"
        keyboardType="default"
        
      />

<TextInput
        style={styles.input}
        //onChangeText={setNom}
      // value={nom}
        placeholder="Password"
        keyboardType="default"
        
      />


<TouchableOpacity
        style={styles.button}
        onPress={() =>  navigation.navigate('Login')} >     
        <Text style={{color:"white"}}>
         Register
           </Text>
      </TouchableOpacity>
   
     
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
      backgroundColor: '#f0f0f0',
     // alignItems: 'center',
      padding:10,
      justifyContent: 'center',
  },
  rightCircle: {
    backgroundColor: '#8022d9',
    position : "absolute",
    width: 400,
    height: 400,
    borderRadius:200,
    right: -480,
    top: -200
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
  //  marginLeft:60,
    //marginRight:10,
    marginTop:20,
    marginBottom:30
},    
 logo1:{     
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height/1.5,
    alignContent:'center',
    position:'absolute',
    top:-190,
    left:-10,
    right:-10
},
  input: {
    height: 40,
    margin: 5,
    paddingTop: 10,
    //paddingRight:20,
    paddingLeft:20,
    paddingRight:20,
    //paddingBottom:20,
    marginLeft:10,
    marginRight:10,
    borderRadius:2,
    borderBottomWidth:1,
    borderColor:"#DDD" 
   },
    button : {
      marginTop:50,
  //  marginBottom:20,
    alignItems: "center",
    backgroundColor: "#8022d9",
    borderRadius:10,
    paddingLeft:45,
    paddingRight:45,
   paddingTop:10,
   paddingBottom:10,
   marginLeft:50,
   marginRight:50
  },
  button1 : {
   // marginTop:10,
//  marginBottom:20,
  alignItems: "center",
  //backgroundColor: "#8022d9",
  borderRadius:10,
 // paddingLeft:45,
  //paddingRight:45,
 paddingTop:10,
 paddingBottom:10,
 marginLeft:50,
 marginRight:50
},
  
});
