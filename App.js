import React,{useState} from 'react';
import { View, Text,Button , TextInput, Modal } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { or } from 'react-native-reanimated';
import { FlatList, ScrollView } from 'react-native-gesture-handler';


function StartScreen({navigation}) {
  const[org,setOrg] = useState(0);
  const[discount,setDiscount] = useState(0);
  const[final,setFinal] = useState();
  const[priceSaved,setPriceSaved] = useState(0);
  const[originalList,setOriginalList] = useState([]);
  const[finalList,setFinalList] = useState([]);
  const[reslt,setReslt] = useState(false);
  const[savved,setSavved] = useState(false);
  const[historry,setHistorry] = useState(false);

  const setOriginal = (text) =>{
    setOrg(text)
  }
  const setDiscounts = (val) =>{
    setDiscount(val)
  }
  const results = () =>{
    const aa = (discount/100)*org;
    const final = org-aa;
    setFinal(final)
    console.log(final)
    setPriceSaved(org-final);
    console.log(priceSaved);
 
    setReslt(true)
    
  }
  
  const Saved = ()=>{
    setOriginalList([...originalList,final])
    setFinalList([...finalList,priceSaved])
    setSavved(true)
    setOrg(0);
    setDiscounts(0);
  }
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' , width : '100%' }}>
      <View style={{ flexDirection : 'row' , paddingRight: 160}}>
           <Text style = {{ height : 30 , paddingTop : 33 , color : 'green' }} > Enter your Price :  </Text>
           <TextInput style = {{ margin : 15  , height : 50 , borderWidth : 3 , borderColor : 'red'
           , borderTopWidth : 0 , borderLeftWidth : 0 , borderRightWidth : 0  }} placeholder=" Enter your price"
           value={org}           onChangeText={setOriginal}></TextInput>
      </View>
     
      <View style={{ flexDirection : 'row' , paddingRight: 160 , paddingBottom : 35}}>
           <Text style = {{ height : 30 , paddingTop : 33 , color : 'green' }} > Enter your Price :  </Text>
           <TextInput style = {{ margin : 15  , height : 50 , borderWidth : 3 , borderColor : 'red'
           , borderTopWidth : 0 , borderLeftWidth : 0 , borderRightWidth : 0 }} placeholder=" Enter your price" value={discount}
           onChangeText={setDiscounts}></TextInput>
      </View>
      <View style={{flexDirection: 'row', width: '100%' , justifyContent : 'space-around'}}>
        <Button title = "Done" onPress={results}></Button>
        <Button title="Save" onPress={Saved}>Save</Button>
        <Button title="History" onPress={() => setHistorry(true)}>History</Button>
     
       
      </View>
      <View>
        <Modal visible = {reslt}>
          {results}
          <Text>final</Text>
          <Text>{final}</Text>
          <Text>You Saved</Text>
          <Text>{priceSaved}</Text>
          <Button title = "back" onPress={()=>setReslt(false)}></Button>
        </Modal>
      </View>

      <View>
        <Modal visible={false}>
            <Text>{originalList}</Text>
            <Text>{finalList}</Text>
            <Button title = "back" onPress={()=>setSavved(false)}></Button>
        </Modal>
      </View>
      <View>
    <Modal visible={historry}>
      <View style={{margin: 10 , padding: 15 , justifyContent : 'center' , flexDirection:'row'}}>
         <Text>Final Price</Text>
         <Text style={{marginLeft:20}}>Your priceSaved</Text>
      </View>
      <View style={{flexDirection:'row' , paddingVertical: 30}}>
      <View>
        <ScrollView style={{marginLeft:110}}>
          {originalList.map((item) => <Text>{item}</Text>)}
        </ScrollView>
      </View>
      <View>
        <ScrollView style={{marginLeft: 95}}>
          {finalList.map((item) => <Text>{item}</Text>)}
        </ScrollView>
      </View>
      </View>
     <View style={{flexDirection : 'row' , justifyContent:'space-around'}}>
     <Button title="Back" onPress={() => setHistorry(false)}></Button>
    <Button title = "ClearHistory" onPress={() =>{
      setOriginalList([]);
      setFinalList([]);
    }}></Button>
     </View> 
         </Modal>
  </View>

    
      
    
      

      
    </View>
  );
}




const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="StartScreen" component={StartScreen}
        options={{
          title: 'Start Screen',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
     </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
