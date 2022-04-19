import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';
import tw from 'twrnc';


export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);


  let data = [];

    const gotoHome = () => {
        console.log(data)
        navigation.navigate('Home',
        data
        )
    }

    const login = async () => {
      let response = await fetch(
        'http://192.168.8.104:8000/api/login',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({email: email, password: password})
        }
      );
      data = await response.json();
      // console.log(data);

      if(data.success){
        setEmailError(false);
        setPasswordError(false);
        gotoHome() 
      }
      else
      {
        setEmailError(true);
        setPasswordError(true);
      }

    }

   return (
      <View style={tw.style('h-full bg-white')}>
        <View style={[tw.style(' justify-center bg-purple-600 pb-20 rounded-bl-full	'),{
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
        } ]}>
          <Text style={tw.style('pt-30 text-center text-3xl text-white')}>Login</Text>
          <TextInput style={tw.style('w-80 h-12 ml-8 mt-5 rounded-xl bg-white pl-3')} placeholder="User email" onChangeText={(value) => setEmail(value)}></TextInput>
          {emailError && <Text style={tw.style('text-sm ml-10 text-red-500')}>incorrect useremail</Text>}
          <TextInput style={tw.style('w-80 h-12 ml-8 mt-5 rounded-xl bg-white pl-3')} placeholder="Password" secureTextEntry={true} onChangeText={(value) => setPassword(value)}></TextInput>
          {passwordError && <Text style={tw.style('text-sm ml-10 text-red-500')}>incorrect password</Text>}
          
          <TouchableOpacity 
          style={tw.style('w-80 h-12 ml-8 mt-10 rounded-3xl justify-center items-center bg-purple-700')}
          onPress={() => login()}
          >
            <Text style={tw.style('text-center text-white')}>Login</Text>
          </TouchableOpacity>
          
        </View>
        <View style={tw.style('justify-center items-center bg-white')}>
          <Text style={tw.style('pt-20 text-gray-300')}>Need an account?</Text>
          <View style={tw.style('flex-row')}>
            <TouchableOpacity>
                <Image style={tw.style('h-10 w-10')} source={require('../assets/images/google.png')} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={tw.style('h-10 w-10')} source={require('../assets/images/facebook.png')} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={tw.style('h-10 w-10')} source={require('../assets/images/twitter.png')} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={tw.style('w-80 h-12 mt-10 rounded-3xl justify-center items-center bg-purple-700')}>
            <Text style={tw.style('text-center text-white')}>Sign up</Text>
          </TouchableOpacity>
        </View>
        
      </View>
    );

}