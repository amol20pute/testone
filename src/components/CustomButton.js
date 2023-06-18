
import React from 'react';

import {
    Text,TouchableOpacity,StyleSheet
} from 'react-native';



const CustomButton=(props)=>{

const {title}=props;
    return (<TouchableOpacity onPress={props.onPress} style={styles.button}>
<Text style={styles.textColor}> {title} </Text>
    </TouchableOpacity>)
        
    
}
const styles=StyleSheet.create({
    button:{
        width:"95%",
        marginVertical:16,
        marginHorizontal:16,
        alignSelf:'center',
        backgroundColor:'blue',
        alignItems:'center',


        padding:10,borderRadius:8
            },
            textColor:{color:'white',alignItems:'center',justifyContent:"center"}
});
export default CustomButton;