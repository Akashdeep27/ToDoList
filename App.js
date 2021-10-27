/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React , {useState} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {Tasks} from './components/Tasks';


export default function App(){


  const [task , setTask] = useState();

  const handleAllTask = () =>{
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  }

  const [taskItems , setTaskItems] = useState([]);
  
      const completeTask = (index) =>{
        let itemsCopy = [...taskItems];
        itemsCopy.splice(index , 1);
        setTaskItems(itemsCopy);
      }


  return(

      <View style = {styles.container}>

      <View style = {styles.tasksWrapper}>
        <Text style = {styles.sectionTitle}>
         Today's Tasks 
      
        </Text>

<View style = {styles.items}>

        {
          taskItems.map((items , index) => {
          return(
              <TouchableOpacity key = {index} onPress = { () => completeTask(index)}>
                  <Tasks text = {items} />

              </TouchableOpacity>
          )

          }
          )
        }
</View>
      </View>

      <KeyboardAvoidingView behavior= {
        Platform.OS === "android" ? "height?" : "padding"}
        style = {styles.WriteTextWrapper}
        >
            <TextInput style = {styles.input} placeholder = {"Write Your Task" } value = {task}  onChangeText = {text => setTask(text)}   />
              <TouchableOpacity  onPress ={ () => handleAllTask()}  >
                <View style = {styles.addWrapper}>
                  <Text style = {styles.textInput}>+</Text>
                </View>
              </TouchableOpacity>

          
        </KeyboardAvoidingView>
      

      </View>

  );
}

const styles = StyleSheet.create({


container: {
flex: 1,
backgroundColor:"#E8EAED",
},
tasksWrapper:{
  paddingTop: 80,
  paddingHorizontal: 20,

},
sectionTitle:{

  fontSize: 24,
  fontWeight: 'bold'
},
items:{
  marginTop: 30
},

WriteTextWrapper: {

  position: 'absolute',
  bottom: 10 ,
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center'
},

input :{

paddingHorizontal: 15,
paddingVertical: 15 ,
width: 250,
backgroundColor: '#FFF',
borderRadius: 60,
borderColor: '#C0C0C0',
borderWidth: 1,
},

addWrapper:{

  height:60,
  width: 60,
  backgroundColor:'#FFF',
  borderRadius: 60,
  justifyContent:'center',
  alignItems: 'center',
  borderWidth: 2,
  borderColor:'#C0C0C0'

},

textInput:{},


})