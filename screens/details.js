import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native'
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import tw from 'twrnc';

export default function ProductDetails() {
    return(
        <View style={tw.style('bg-gray-200 h-full')}>
            <View style={[tw.style(' justify-center bg-purple-600 pb-20 h-40 rounded-bl-full'),{
                borderBottomLeftRadius: 50,
                borderBottomRightRadius: 50,
                } ]}>
            </View>
            <View style={tw.style('flex flex-col bg-gray-100 h-50 w-80 rounded-3xl justify-around items-center ml-8 mt--20')}>
                <View style={tw.style('flex-row')}>
                    <Image style={tw.style('h-30 w-70 mr-5')} source={require('../assets/images/shoes.jpg')} />
                
                </View>
                <View style={tw.style('flex flex-row')}>
                    <View style={tw.style('h-2 w-2 rounded-full bg-gray-900')}></View>
                    <View style={tw.style('h-2 w-2 rounded-full bg-gray-600 ml-1')}></View>
                    <View style={tw.style('h-2 w-2 rounded-full bg-gray-400 ml-1')}></View>
                    <View style={tw.style('h-2 w-2 rounded-full bg-gray-100 ml-1')}></View>
                </View>
            </View>
            <View style={tw.style('flex flex-row justify-between mt-5')}>
                <Text style={tw.style('ml-10 text-lg font-bold')}>150$</Text>
                <View style={tw.style('flex flex-row justify-between mr-10')}>
                    <TouchableOpacity style={tw.style('bg-white rounded-lg h-10 w-10 justify-center items-center')}><EvilIcons name="heart" size={30} color="#7552cc" /></TouchableOpacity>
                    <TouchableOpacity style={tw.style('ml-1 bg-white rounded-lg h-10 w-10 justify-center items-center')}><EvilIcons name="share-google" size={30} color="#7552cc" /></TouchableOpacity>
                </View>
            </View>
            <Text style={tw.style('ml-10 text-lg text-gray-600')}>Nike Air max 2090</Text>
            <View style={tw.style('flex flex-row ml-10 mt-3')}>
                <Image style={tw.style('h-30 w-30 rounded-lg mr-5')} source={require('../assets/images/shoe2.jpeg')} />
                <Image style={tw.style('h-30 w-30 rounded-lg mr-5')} source={require('../assets/images/shoe4.jpg')} />
                <Image style={tw.style('h-30 w-30 rounded-lg mr-5')} source={require('../assets/images/shoe4.jpg')} />
            </View>
            <Text style={tw.style('ml-10 text-lg text-gray-600 mt-3')}>Select size</Text>
            <View style={tw.style('ml-10 mt-2 flex flex-col')}>
                 <View style={tw.style('flex flex-row justify-between mr-5')}>
                    <View style={tw.style('bg-white rounded-lg h-15 w-15 justify-center items-center')}> 
                        <Text style={tw.style('font-bold')}>6</Text>
                    </View>
                    <View style={tw.style('bg-black rounded-lg h-15 w-15 justify-center items-center')}> 
                        <Text style={tw.style('text-white font-bold')}>6.5</Text>
                    </View>
                    <View style={tw.style('bg-white rounded-lg h-15 w-15 justify-center items-center')}> 
                        <Text style={tw.style('font-bold')}>7</Text>
                    </View>
                    <View style={tw.style('bg-white rounded-lg h-15 w-15 justify-center items-center')}> 
                        <Text style={tw.style('font-bold')}>8</Text>
                    </View>
                    
                 </View>
                 <View style={tw.style('flex flex-row justify-between mt-2 mr-5')}>
                    <View style={tw.style('bg-white rounded-lg h-15 w-15 justify-center items-center')}> 
                        <Text style={tw.style('font-bold')}>9</Text>
                    </View>
                    <View style={tw.style('bg-white rounded-lg h-15 w-15 justify-center items-center')}> 
                        <Text style={tw.style('text-black font-bold')}>6.5</Text>
                    </View>
                    <View style={tw.style('bg-white rounded-lg h-15 w-15 justify-center items-center')}> 
                        <Text style={tw.style('font-bold')}>9.5</Text>
                    </View>
                    <View style={tw.style('bg-white rounded-lg h-15 w-15 justify-center items-center')}> 
                        <Text style={tw.style('font-bold')}>10</Text>
                    </View>
                    
                 </View>
            </View>
            <View style={tw.style('ml-10 mt-4')}>
                <Text style={tw.style('text-sm font-bold text-gray-600')}>Description</Text>
                <Text style={tw.style('text-sm text-gray-500')}>Bring the post into the future with the Nike Air Max.</Text>
                <Text style={tw.style('text-sm text-gray-300')}>Bring the post into the future with the Nike Air Max.</Text>
            </View>
            <View style={tw.style('flex flex-row justify-center justify-between mx-10 my-1')}>
                <TouchableOpacity style={tw.style('h-15 w-40 justify-center items-center bg-gray-300 rounded-lg')}><Text style={tw.style('text-sm font-bold')}>Add To Cart</Text></TouchableOpacity>
                <TouchableOpacity style={tw.style('h-15 w-40 justify-center items-center bg-purple-600 rounded-lg ml-1')}><Text style={tw.style('text-sm text-white font-bold')}>Buy Now</Text></TouchableOpacity>
            </View>
        </View>
    )
}