import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';
import tw from 'twrnc';
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay';



export default function Signup({ navigation }) {

  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  let data = [];

    const gotoHome = () => {
        console.log(data)
        navigation.navigate('Home',
        data
        )
    }

    const signup = async () => {
    //   setIsLoading(true);
      let response = await fetch(
        'http://192.168.8.104:8000/api/register',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({name: username, email: email, password: password, blood_type: 'O+', c_password: password, phoneNumber: phone})
        }
      );
      data = await response.json();

      setIsLoading(false);

      if(data.success){
        gotoHome() 
      }
      else
      {
        console.log(data.error)
        Alert.alert(  
            'Error',  
            String(data.error.email[0])
            + '\n' +
            String(data.error.password[0])
            + '\n' +
            String(data.error.phoneNumber[0])
            ,  
            [  
                {  
                    text: 'Cancel',  
                    onPress: () => console.log(data.error.c_password),  
                    style: 'cancel',  
                },  
                {text: 'OK', onPress: () => console.log('OK Pressed')},  
            ]  
        );  
      }

    }

   return (
      <View style={tw.style('h-full bg-white')}>
        <View style={[tw.style(' justify-center bg-purple-600 pb-20 rounded-bl-full	h-150'),{
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
        } ]}>
          <Text style={tw.style('pt-30 text-center text-3xl text-white')}>Signup</Text>
          <TextInput style={tw.style('w-80 h-12 ml-8 mt-5 rounded-xl bg-white pl-3')} placeholder="User name" onChangeText={(value) => setUsername(value)}></TextInput>
          <TextInput style={tw.style('w-80 h-12 ml-8 mt-5 rounded-xl bg-white pl-3')} placeholder="User email" onChangeText={(value) => setEmail(value)}></TextInput>
          <TextInput style={tw.style('w-80 h-12 ml-8 mt-5 rounded-xl bg-white pl-3')} placeholder="User phone" onChangeText={(value) => setPhone(value)}></TextInput>
          <TextInput style={tw.style('w-80 h-12 ml-8 mt-5 rounded-xl bg-white pl-3')} placeholder="Password" secureTextEntry={true} onChangeText={(value) => setPassword(value)}></TextInput>
          
          <TouchableOpacity 
          style={tw.style('w-80 h-14 ml-8 mt-10 rounded-3xl justify-center items-center bg-purple-700')}
          onPress={() => signup()}
          >
            <Text style={tw.style('text-center text-white')}>Register</Text>
          </TouchableOpacity>
          <OrientationLoadingOverlay
            visible={isLoading}
            color="white"
            indicatorSize="large"
            messageFontSize={24}
            message="Loading..."
          />
          
        </View>
        
      </View>
    );

}