/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
    View,NativeModules, Button
} from 'react-native';
import CustomButton from 'components/CustomButton';


const RNEmulatorCheck = NativeModules.RNEmulatorCheck
const App =()=> {

const isEmulatorCheck=async()=>{
  let isEmulator= await RNEmulatorCheck && RNEmulatorCheck.isEmulator;
if(isEmulator){
  alert("Its Emulator ");
}else{
  alert("Its Not Emulator ");
}
}
    return (
<View style={{
  flex:1,
  alignItems:'center',
  justifyContent:'center'
}}>
<CustomButton title='Emulator' onPress={async()=>{
 isEmulatorCheck();
}} />
<CustomButton 
onPress={()=>{}}
title="HIi"
/>
<View >

</View>
</View>
    );
  
}
export default App;
