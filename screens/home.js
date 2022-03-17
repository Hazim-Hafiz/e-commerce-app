import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native'
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';



import tw from 'twrnc';

export default function Home({ navigation }) {
    const gotoDetails = () => {
        navigation.navigate('ProductDetails')
    }
    return(
        <View style={tw.style('flex flex-col')}>
            <View style={[tw.style(' justify-center bg-purple-600 pb-20 h-40 rounded-bl-full'),{
                borderBottomLeftRadius: 50,
                borderBottomRightRadius: 50,
                } ]}>
                <View style={tw.style('flex flex-row justify-between mx-5 items-center mt-auto')}>
                    <Text style={tw.style('text-lg text-white')}>E-commerce</Text>
                    <View style={tw.style('flex flex-row justify-between')}>
                        <TextInput 
                            style={tw.style('w-40 h-12 pl-2 bg-gray-200 rounded-lg')} 
                            placeholder="Search"
                            />
                        <TouchableOpacity style={tw.style('w-12 h-12 rounded-lg ml-1 justify-center items-center bg-gray-200')}>
                        <EvilIcons name="camera" size={30} color="black" />

                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={tw.style('flex flex-col bg-white h-40 w-80 rounded-3xl justify-around items-center ml-8 mt--12')}>
                <View style={tw.style('flex-row')}>
                    <Image style={tw.style('h-20 w-40 ml--5 mr-5')} source={require('../assets/images/shoes.jpg')} />
                    <View style={tw.style('flex flex-col')}>
                        <Text style={tw.style('font-bold text-black')}>Introducing</Text>               
                        <Text style={tw.style('text-xs text-gray-400')}>Air max</Text>
                        <TouchableOpacity style={tw.style('mt-1 bg-black rounded-lg')} ><Text style={tw.style('text-white text-sm p-1')}>BUY NOW</Text></TouchableOpacity>                    
                    </View>
                </View>
                <View style={tw.style('flex flex-row')}>
                    <View style={tw.style('h-2 w-2 rounded-full bg-gray-900')}></View>
                    <View style={tw.style('h-2 w-2 rounded-full bg-gray-600 ml-1')}></View>
                    <View style={tw.style('h-2 w-2 rounded-full bg-gray-400 ml-1')}></View>
                    <View style={tw.style('h-2 w-2 rounded-full bg-gray-100 ml-1')}></View>
                </View>
            </View>
            <View style={tw.style('flex flex-row justify-between mx-7 mt-5')}>
                <View style={tw.style('flex flex-col items-center')}>
                    <TouchableOpacity style={tw.style('h-17 w-17 bg-white rounded-lg justify-center items-center')}>
                        <MaterialIcons name="category" size={30} color="#7552cc" />
                    </TouchableOpacity>
                    <Text style={tw.style('text-xs text-purple-600 mt-2')}>Category</Text>
                </View>
                <View style={tw.style('flex flex-col items-center')}>
                    <TouchableOpacity style={tw.style('h-17 w-17 bg-white rounded-lg justify-center items-center')}>
                        <Octicons name="git-compare" size={30} color="#7552cc" />
                    </TouchableOpacity>
                    <Text style={tw.style('text-xs text-purple-600 mt-2')}>Compare</Text>
                </View>
                <View style={tw.style('flex flex-col items-center')}>
                    <TouchableOpacity style={tw.style('h-17 w-17 bg-white rounded-lg justify-center items-center')}>
                        <AntDesign name="tagso" size={30} color="#7552cc" />
                    </TouchableOpacity>
                    <Text style={tw.style('text-xs text-purple-600 mt-2')}>Sales</Text>
                </View>
                <View style={tw.style('flex flex-col items-center')}>
                    <TouchableOpacity style={tw.style('h-17 w-17 bg-white rounded-lg justify-center items-center')}>
                        <FontAwesome name="money" size={30} color="#7552cc" />
                    </TouchableOpacity>
                    <Text style={tw.style('text-xs text-purple-600 mt-2')}>Offers</Text>
                </View>
            </View>
            <View style={[tw.style('h-full w-100 bg-gray-200 mt-10'),
                    {
                        borderTopLeftRadius: 40,
                        borderTopRightRadius: 40,
                    }
                    ]}>
                <View style={tw.style('flex flex-row justify-between mx-7 mt-7')}>
                    <Text style={tw.style('text-sm font-bold')}>New Arrivals</Text>
                    <TouchableOpacity style={tw.style('bg-purple-600 rounded-lg')}>
                        <Text style={tw.style('text-white text-sm p-2')}>View All</Text>
                    </TouchableOpacity>
                </View>
                {/* <ScrollView horizontal={true}>   */}
                    <View style={tw.style('flex flex-row justify-between mt-5 ml-4')}>
                        <TouchableOpacity 
                        onPress={() => gotoDetails()}
                        >
                            <View style={tw.style('flex flex-col bg-white w-30 h-50 rounded-xl overflow-hidden')}>
                                <Image style={tw.style('h-30 w-30 ml-0')} source={require('../assets/images/shoe2.jpeg')} />
                                <Text style={tw.style('text-black font-bold pl-2')}>Nike</Text>
                                <Text style={tw.style('ml-1 items-center justify-center bg-gray-200 text-black rounded-lg h-5 w-15 text-xs pl-2 mt-1')}>7 colors</Text>
                                <View style={tw.style('flex flex-row justify-between mt-2 pl-2')}>
                                    <Text style={tw.style('text-gray-700 text-xs')}>150 $</Text>
                                    <Text style={tw.style('text-black text-2xl text-center mr-3')}>+</Text>
                                </View>

                            </View>
                        </TouchableOpacity>
                        <View style={tw.style('flex flex-col bg-white w-30 h-50 rounded-xl overflow-hidden ml-3')}>
                            <Image style={tw.style('h-30 w-30 ml-0')} source={require('../assets/images/shoe3.jpg')} />
                            <Text style={tw.style('text-black font-bold pl-2')}>Nike</Text>
                            <Text style={tw.style('ml-1 items-center justify-center bg-gray-200 text-black rounded-lg h-5 w-15 text-xs pl-2 mt-1')}>7 colors</Text>
                            <View style={tw.style('flex flex-row justify-between mt-2 pl-2')}>
                                <Text style={tw.style('text-gray-700 text-xs')}>150 $</Text>
                                <Text style={tw.style('text-black text-2xl text-center mr-3')}>+</Text>
                            </View>

                        </View>
                        <View style={tw.style('flex flex-col bg-white w-30 h-50 rounded-xl overflow-hidden ml-3')}>
                            <Image style={tw.style('h-30 w-30 ml-0')} source={require('../assets/images/shoe4.jpg')} />
                            <Text style={tw.style('text-black font-bold pl-2')}>Nike</Text>
                            <Text style={tw.style('ml-1 items-center justify-center bg-gray-200 text-black rounded-lg h-5 w-15 text-xs pl-2 mt-1')}>7 colors</Text>
                            <View style={tw.style('flex flex-row justify-between mt-2 pl-2')}>
                                <Text style={tw.style('text-gray-700 text-xs')}>150 $</Text>
                                <Text style={tw.style('text-black text-2xl text-center mr-3')}>+</Text>
                            </View>

                        </View>
                        <View style={tw.style('flex flex-col bg-white w-30 h-50 rounded-xl overflow-hidden ml-3')}>
                            <Image style={tw.style('h-30 w-30 ml-0')} source={require('../assets/images/shoe4.jpg')} />
                            <Text style={tw.style('text-black font-bold pl-2')}>Nike</Text>
                            <Text style={tw.style('ml-1 items-center justify-center bg-gray-200 text-black rounded-lg h-5 w-15 text-xs pl-2 mt-1')}>7 colors</Text>
                            <View style={tw.style('flex flex-row justify-between mt-2 pl-2')}>
                                <Text style={tw.style('text-gray-700 text-xs')}>150 $</Text>
                                <Text style={tw.style('text-black text-2xl text-center mr-3')}>+</Text>
                            </View>

                        </View>
                    </View>
                    
                {/* </ScrollView> */}
                
                <View style={[tw.style('flex flex-row justify-between mx-7 mt-15 bg-white h-40 overflow-hidden'),
                    {
                        borderTopLeftRadius: 50,
                        borderTopRightRadius: 50,
                    }
                ]}>
                    <View style={tw.style('flex flex-col items-center')}>
                        <TouchableOpacity style={tw.style('h-17 w-17 bg-white justify-center items-center')}>
                        <Octicons name="home" size={25} color="#7552cc" />
                        </TouchableOpacity>
                    </View>
                    <View style={tw.style('flex flex-col items-center')}>
                        <TouchableOpacity style={tw.style('h-17 w-17 bg-white justify-center items-center')}>
                            <SimpleLineIcons name="feed" size={25} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View style={tw.style('flex flex-col items-center')}>
                        <TouchableOpacity style={tw.style('h-17 w-17 bg-white justify-center items-center')}>
                            <Ionicons name="cart-outline" size={25} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View style={tw.style('flex flex-col items-center')}>
                        <TouchableOpacity style={tw.style('h-17 w-17 bg-white justify-center items-center')}>
                            <SimpleLineIcons name="user" size={25} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
                    
            </View>

        </View>
    )
}