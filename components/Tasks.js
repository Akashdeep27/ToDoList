import React from "react";
import { StyleSheet, View , Text, TouchableOpacity } from "react-native";

const Tasks = (props) => {
return(

<View style = {styles.item}>
    <View style = {styles.itemLeft}>
        <View style = {styles.square}></View>
        <Text style = {styles.itemText}>{props.text}</Text>
    </View>
    <View style = {styles.circular}>

    </View>
</View>

)
}

export {Tasks};

const styles =  StyleSheet.create({

circular:{
    height: 12,
    width: 12,
    borderColor:'#55BCF6',
    borderWidth: 2,
    borderRadius: 5,

},


itemText:{},


square:{
width: 24,
height: 24,
backgroundColor:'#55BCF6',
opacity: 0.5,
borderRadius: 5,
marginRight: 15,
},


itemLeft:{
    flexDirection: 'row',
    alignItems:'center',
    flexWrap:'wrap'
},


item:{
backgroundColor: '#FFF',
padding: 15,
borderRadius: 10,
flexDirection:'row',
alignItems: 'center',
justifyContent: 'space-between',
marginBottom: 20 ,
},


})