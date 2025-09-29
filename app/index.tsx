import { Image } from 'expo-image';
import {
Platform, 
StyleSheet, 
View,
Text, 
TextInput,   
TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { useState } from 'react';
export default function HomeScreen() {
const [num, setnum] = useState (0)
const [por, setpor] = useState (0)
const [r, setr] = useState (0)


 function calcular(){
  const s = Math.ceil(por*num)/100
  setr(s)
 }

  return (
   
    <View style={style.container}>
     <Text style={style.Titulo}>Calcule a porcentagem</Text> 
    <View style={style.estrutura}>
    <TextInput style={style.input}
    keyboardType='numeric'
    placeholder='Digite um numero '
    onChangeText={(text) => setnum (Number (text))}
    ></TextInput>
    <TextInput style={style.input}
    keyboardType='numeric'
    placeholder='Digite um numero (%)'
    onChangeText={(text) => setpor(Number (text))}
    ></TextInput>
    <TouchableOpacity style={style.bot} onPress={calcular}> <Text style={{fontWeight: 'bold', color: 'white'}}>Calcular</Text></TouchableOpacity>
    <Text style={style.resul}>{r}</Text>
    </View>
    </View>



  );
}

const style = StyleSheet.create({
 container:{
  flex: 1,
  backgroundColor:"black",
  alignItems: "center",
 },
Titulo:{
  color: "white",
  fontSize: 44,
  fontFamily: "fantasy",
  marginTop: "5%",
  marginBottom: 40,
},
estrutura:{
  width: "30%",
  height: "50%",
  backgroundColor: "white",
  alignItems: "center",
  justifyContent: "center",
},
input:{
  width: "60%",
  height: "10%", 
  borderWidth: 0.5,
  marginBottom: 5,
  textAlign: "center"
},
bot:{
  width: "60%",
  height: "10%", 
  borderWidth: 0.5,
  backgroundColor: "green",
  alignItems: 'center',
  justifyContent: 'center',
  
},
resul:{
  marginTop: 30,
},
});
