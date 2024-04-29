// // // import {
// // //   StyleSheet,
// // //   Text,
// // //   TextInput,
// // //   View,
// // //   Dimensions,
// // //   Button,
// // //   FlatList,
// // //   ScrollView,
// // //   SectionList,
// // // } from 'react-native';
// // // import React, {useState} from 'react';
// // // import PassingData from './PassingData';
// // // const width = Dimensions.get('screen').width;
// // // const PracticeReactNative = () => {
// // //   const [name, setName] = useState();
// // //   const [email, setEmail] = useState();
// // //   const [password, setPassword] = useState();
// // //   const [display, setDisplay] = useState(false);
// // //   // const [text, setText] = useState('');
// // //   const resetForm = () => {
// // //     setName('');
// // //     setEmail('');
// // //     setPassword('');
// // //     setDisplay(false);
// // //   };
// // //   let userData = [
// // //     {
// // //       id: 1,
// // //       name: 'Jack',
// // //       email: 'hassanmarwat@gmail.com',
// // //       password: '12222223',
// // //     },
// // //     {
// // //       id: 2,
// // //       name: 'Jade',
// // //       email: 'hassanmarwat@gmail.com',
// // //       password: '1223',
// // //     },
// // //     {
// // //       id: 3,
// // //       name: 'Goat',
// // //       email: 'hassanmarwat@gmail.com',
// // //       password: '1223',
// // //     },
// // //     {
// // //       id: 4,
// // //       name: 'Tony',
// // //       email: 'hassanmarwat@gmail.com',
// // //       password: '1223',
// // //     },
// // //   ];
// // //   const nestedList = [
// // //     {
// // //       id: 1,
// // //       name: 'Hassan',
// // //       data: ['React Native', 'Node JS'],
// // //     },
// // //     {
// // //       id: 2,
// // //       name: 'Shuja',
// // //       data: ['ACCA'],
// // //     },
// // //     {
// // //       id: 3,
// // //       name: 'Shakir',
// // //       data: ['Major'],
// // //     },
// // //     {
// // //       id: 4,
// // //       name: 'Imran',
// // //       data: ['ASI'],
// // //     },
// // //     {
// // //       id: 5,
// // //       name: 'Kuch bhi',
// // //       data: ['React Native', 'React JS'],
// // //     },
// // //   ];
// // //   return (
// // //     <View style={styles.container}>
// // //       {/* <Text
// // //         style={{
// // //           fontSize: 24,
// // //           color: 'black',
// // //           alignSelf: 'flex-start',
// // //           marginLeft: 20,
// // //           margin: 10,
// // //         }}>
// // //         Your name is : {name}
// // //       </Text> */}
// // //       {/* <TextInput
// // //         placeholder="Username"
// // //         placeholderTextColor={'grey'}
// // //         value={name}
// // //         style={{
// // //           fontSize: 18,
// // //           color: 'black',
// // //           borderWidth: 2,
// // //           borderColor: 'grey',
// // //           width: 380,
// // //           borderRadius: 10,
// // //           padding: 10,
// // //           margin: 10,
// // //         }}
// // //         onChangeText={text => setName(text)}
// // //       />
// // //       <TextInput
// // //         placeholder="Password"
// // //         placeholderTextColor={'grey'}
// // //         value={password}
// // //         secureTextEntry={true}
// // //         style={{
// // //           fontSize: 18,
// // //           color: 'black',
// // //           borderWidth: 2,
// // //           borderColor: 'grey',
// // //           width: 380,
// // //           borderRadius: 10,
// // //           padding: 10,
// // //           margin: 10,
// // //         }}
// // //         onChangeText={text => setPassword(text)}
// // //       />
// // //       <TextInput
// // //         placeholder="Email"
// // //         placeholderTextColor={'grey'}
// // //         value={email}
// // //         style={{
// // //           fontSize: 18,
// // //           color: 'black',
// // //           borderWidth: 2,
// // //           borderColor: 'grey',
// // //           width: 380,
// // //           borderRadius: 10,
// // //           padding: 10,
// // //           margin: 10,
// // //         }}
// // //         onChangeText={text => setEmail(text)}
// // //       />
// // //       <Button title="Show Value" onPress={() => setDisplay(true)} />

// // //       <Button title="Delete Value" onPress={() => resetForm()} />
// // //       {display ? (
// // //         <View>
// // //           <Text style={{fontSize: 24}}>{name}</Text>
// // //           <Text style={{fontSize: 24}}>{email}</Text>
// // //           <Text style={{fontSize: 24}}>{password}</Text>
// // //         </View>
// // //       ) : null} */}
// // //       {/* <TextInput
// // //         style={{
// // //           fontSize: 18,
// // //           color: 'black',
// // //           borderWidth: 2,
// // //           borderColor: 'grey',
// // //           width: 380,
// // //           borderRadius: 10,
// // //           padding: 10,
// // //         }}
// // //         placeholder="Type here to translate!"
// // //         onChangeText={newText => setText(newText)}
// // //         defaultValue={text}
// // //       />
// // //       <Text style={{padding: 10, fontSize: 42}}>
// // //         {text
// // //           .split(' ')
// // //           .map(word => word && '🍕')
// // //           .join(' ')}
// // //       </Text> */}
// // //       {/* Map function */}
// // //       {/* <View style={{width: width, padding: 20}}>
// // //         <Text style={{color: 'blue', fontSize: 24}}>Handle Text Input</Text>
// // //         <ScrollView>
// // //           {userData.map(item => (
// // //             <Text
// // //               style={{
// // //                 fontSize: 28,
// // //                 backgroundColor: 'blue',
// // //                 padding: 10,
// // //                 margin: 5,
// // //               }}>
// // //               {item.name}
// // //             </Text>
// // //           ))}
// // //         </ScrollView>
// // //       </View>
// // //       <FlatList
// // //         style={{width: width, padding: 20}}
// // //         data={userData}
// // //         renderItem={({item}) => (
// // //           <ScrollView contentContainerStyle={{paddingBottom: '10%'}}>
// // //             <View>
// // //               <Text style={{fontSize: 24, backgroundColor: 'blue', margin: 5}}>
// // //                 {item.name}
// // //               </Text>
// // //               <Text style={{fontSize: 24, backgroundColor: 'blue', margin: 5}}>
// // //                 {item.email}
// // //               </Text>
// // //               <Text style={{fontSize: 24, backgroundColor: 'blue', margin: 5}}>
// // //                 {item.password}
// // //               </Text>
// // //             </View>
// // //           </ScrollView>
// // //         )}
// // //         keyExtractor={item => item.id}
// // //       /> */}
// // //       <Text
// // //         style={{
// // //           color: 'blue',
// // //           fontSize: 24,
// // //           marginBottom: 40,
// // //           marginTop: 20,
// // //           margin: 30,
// // //           alignItems: 'center',
// // //         }}>
// // //         Grid with Dynamic
// // //       </Text>
// // //       {/* <ScrollView>
// // //         <View
// // //           style={{
// // //             flex: 1,
// // //             flexDirection: 'row',
// // //             flexWrap: 'wrap',
// // //             padding: 10,
// // //             backgroundColor: '#fff',
// // //           }}>
// // //           {userData.map((item, index) => (
// // //             <View
// // //               style={{
// // //                 width: width / 1.1,
// // //                 height: width / 3,
// // //                 margin: 10,
// // //                 backgroundColor: 'blue',
// // //                 justifyContent: 'center',
// // //                 alignItems: 'center',
// // //                 borderRadius: 10,
// // //                 padding: 10,
// // //               }}>
// // //               <Text style={{fontSize: 24, backgroundColor: 'blue', margin: 5}}>
// // //                 {item.name}
// // //               </Text>
// // //             </View>
// // //           ))}
// // //         </View>
// // //       </ScrollView> */}
// // //       {/* <FlatList
// // //         data={userData}
// // //         renderItem={({item}) => <PassingData item={item} />}
// // //         contentContainerStyle={{paddingBottom: '10%', padding: 10}}
// // //       /> */}
// // //       <SectionList
// // //         sections={nestedList}
// // //         renderItem={({item}) => (
// // //           <Text style={{fontSize: 23, color: 'black', textAlign: 'center'}}>
// // //             {item}
// // //           </Text>
// // //         )}
// // //         renderSectionHeader={({section: {name}}) => {
// // //           return (
// // //             <Text
// // //               style={{
// // //                 color: 'black',
// // //                 fontSize: 23,
// // //                 margin: 10,
// // //                 textAlign: 'center',
// // //               }}>
// // //               {name}
// // //             </Text>
// // //           );
// // //         }}
// // //       />
// // //     </View>
// // //   );
// // // };

// // // export default PracticeReactNative;

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     flexWrap: 'wrap',
// // //     alignItems: 'center',
// // //     // justifyContent: 'center',
// // //     // backgroundColor: '#ccc',
// // //   },
// // // });

// // // import React from 'react';
// // // import {StyleSheet, Text, View} from 'react-native';

// // // const PassingData = props => {
// // //   const item = props.item;
// // //   return (
// // //     <View style={styles.box}>
// // //       <Text style={styles.item}>{item.name}</Text>
// // //       <Text style={styles.item}>{item.email}</Text>
// // //     </View>
// // //   );
// // // };

// // // export default PassingData;

// // // const styles = StyleSheet.create({
// // //   box: {
// // //     flex: 1,
// // //     // backgroundColor:'orange',
// // //     flexDirection: 'row',
// // //     padding: 10,
// // //     borderWidth: 2,
// // //     borderColor: 'orange',
// // //     padding:10
// // //   },
// // //   item: {
// // //     fontSize: 20,
// // //     color: 'orange',
// // //     // backgroundColor: 'blue',
// // //     padding: 15,
// // //     margin: 5,
// // //     textAlign: 'center',
// // //   },
// // // });

// // import {Button, StyleSheet, Text, View} from 'react-native';
// // import React, {useEffect, useState} from 'react';

// // const PracticeReactNative = () => {
// //   const [count, setCount] = useState(0);
// //   useEffect(() => {
// //     console.warn('hello');
// //   }, []);
// //   function deleteCount() {
// //     setCount("");
// //   }
// //   return (
// //     <View style={{flex: 1, justifyContent: 'center'}}>
// //       <Text>PracticeReactNative</Text>
// //       <Text style={{color: 'black', fontSize: 20, textAlign: 'center'}}>
// //         {count}
// //       </Text>
// //       <View style={{marginBottom: 20}}>
// //         <Button
// //           title="Press button"
// //           onPress={() => setCount(count + 1)}
// //         />
// //       </View>
// //       <Button title="Press button" onPress={() => deleteCount()} />
// //     </View>
// //   );
// // };

// // export default PracticeReactNative;

// // import React, {useEffect, useState} from 'react';
// // import {Button, StyleSheet, Text, View} from 'react-native';

// // const PracticeReactNative = () => {
// //   const [count, setCount] = useState(0);
// //   const [data, setData] = useState(100);
// //   useEffect(() => {}, [count]);
// //   return (
// //     <View>
// //       <Text style={{color: 'black', fontSize: 24}}>
// //         {data} left data right counter {count}
// //       </Text>
// //       <Button title="Count" onPress={() => setCount(count + 1)} />
// //       <Button title="Data" onPress={() => setData(data + 1)} />
// //       <User info={{count, data}} />
// //     </View>
// //   );
// // };

// // const User = props => {
// //   useEffect(() => {}, [props.info.data]);
// //   return (
// //     <View>
// //       <Text style={{fontSize: 30, color: 'orange'}}>
// //         data : {props.info.data}
// //       </Text>
// //       <Text style={{fontSize: 30, color: 'orange'}}>
// //         count : {props.info.count}
// //       </Text>
// //     </View>
// //   );
// // };

// // export default PracticeReactNative;

// // const styles = StyleSheet.create({});

// // import React, {useState} from 'react';
// // import {View, Text, Button, StyleSheet} from 'react-native';

// // const PassingData = () => {
// //   // const [isVisible, setIsVisible] = useState(false);
// //   const [show, setShow] = useState(false);

// //   return (
// //     <View style={styles.container}>
// //       {/* <Button
// //         title={isVisible ? 'Hide Component' : 'Show Component'}
// //         onPress={toggleVisibility}
// //       />
// //       {isVisible && (
// //         <Text>This component is {isVisible ? 'visible' : 'hidden'}!</Text>
// //       )} */}
// //       <Text style={{fontSize: 20}}>Show/Hide Component</Text>
// //       <Button title="Toggle Component" onPress={() => setShow(!show)} />
// //       {show ? <User /> : null}
// //     </View>
// //   );
// // };
// // const User = () => {
// //   return <Text style={{fontSize: 24, color: 'white'}}>User Component</Text>
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     backgroundColor: 'black',
// //   },
// // });

// // export default PassingData;

// import React, {useEffect, useState} from 'react';
// import {Button, StyleSheet, Text, View} from 'react-native';

// const PracticeReactNative = () => {
//   const [show, setShow] = useState(false);
//   return (
//     //Responsive
//     <View style={styles.container}>
//       {/* <Text style={{fontSize: 24, color: 'black'}}>Toggle Component</Text>
//       <Button title="Toggle" onPress={() => setShow(!show)} />
//       {show ? <User /> : null}
//       <User /> */}
//       <View style={styles.box1}>
//         <View style={styles.InnerBox1}></View>
//         <View style={styles.InnerBox2}></View>
//         <View style={styles.InnerBox3}></View>
//       </View>
//       <View style={styles.box2}></View>
//       <View style={styles.box3}></View>
//     </View>
//   );
// };

// // const User = () => {
// // let time = setInterval(() => {
// //   console.log('Timer');
// // }, 2000);
// // useEffect(() => {
// //   return () => {
// //     // clearInterval(time);r
// //     console.log('Hello');
// //   };
// // });
// // return <Text style={{fontSize: 24, color: 'green'}}>User Component</Text>;
// // };

// export default PracticeReactNative;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // flexDirection: 'row',
//     backgroundColor: 'skyblue',
//   },
//   box1: {
//     flex: 1,
//     // backgroundColor: 'red',
//     margin: 10,
//     flexDirection: 'row',
//     borderWidth: 1,
//   },
//   InnerBox1: {
//     flex: 1,
//     backgroundColor: 'yellow',
//     margin: 10,
//   },
//   InnerBox2: {
//     flex: 1,
//     backgroundColor: 'purple',
//     margin: 10,
//   },
//   InnerBox3: {
//     flex: 1,
//     backgroundColor: 'orange',
//     margin: 10,
//   },
//   box2: {
//     flex: 1,
//     backgroundColor: 'green',
//   },
//   box3: {
//     flex: 1,
//     backgroundColor: 'blue',
//   },
// });

// import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';
// import React, {useState} from 'react';
// import {TouchableOpacity} from 'react-native';

// const PracticeReactNative = () => {
//   const skill = [
//     {
//       id: 1,
//       name: 'React Native',
//     },
//     {
//       id: 2,
//       name: 'React',
//     },
//     {
//       id: 3,
//       name: 'Redux',
//     },
//     {
//       id: 4,
//       name: 'Redux-Saga',
//     },
//     {
//       id: 5,
//       name: 'Redux-Toolkit',
//     },
//     {
//       id: 6,
//       name: 'Redux-Thunk',
//     },
//     {
//       id: 7,
//       name: 'React-Native-Navigation',
//     },
//     {
//       id: 8,
//       name: 'React-Native-Paper',
//     },
//     {
//       id: 9,
//       name: 'React-Native-Web',
//     },
//     {
//       id: 10,
//       name: 'React-Native-Firebase',
//     },
//   ];
//   const [selectValue, setSelectValue] = useState(1);
//   return (
//     // TouchableHighlight Button
//     <View style={styles.container}>
//       {/* <TouchableHighlight>
//           <Text style={styles.button}>Button</Text>
//         </TouchableHighlight> */}
//       {/* <TouchableOpacity>
//         <View>
//           <Text style={styles.radioButton1}>Radio 1</Text>
//         </View>
//       </TouchableOpacity> */}
//       {skill.map((item, index) => {
//         return (
//           <TouchableOpacity key={index} onPress={() => setSelectValue(item.id)}>
//             <View style={{flexDirection: 'row', alignItems: 'center'}}>
//               <View style={styles.radio}>
//                 {selectValue === item.id ? (
//                   <View style={styles.radioBg}></View>
//                 ) : null}
//               </View>
//               <Text style={styles.radioButton1}>{item.name}</Text>
//             </View>
//           </TouchableOpacity>
//         );
//       })}
//       {/* <TouchableOpacity onPress={() => setSelectValue(2)}>
//         <View style={{flexDirection: 'row', alignItems: 'center'}}>
//           <View style={styles.radio}>
//             {selectValue === 2 ? <View style={styles.radioBg}></View> : null}
//           </View>
//           <Text style={styles.radioButton1}>Radio 2</Text>
//         </View>
//       </TouchableOpacity> */}
//     </View>
//   );
// };

// export default PracticeReactNative;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // backgroundColor: 'black',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   //   button: {
//   //     backgroundColor: '#ccc',
//   //     color: '#fff',
//   //     fontSize: 20,
//   //     padding: 10,
//   //     margin: 10,
//   //     borderRadius: 10,
//   //     shadowColor: 'red',
//   //     shadowOffset: {width: 0, height: 2},
//   //     shadowOpacity: 1,
//   //     shadowRadius: 2,
//   //   },
//   radioButton1: {
//     fontSize: 20,
//     color: 'skyblue',
//     padding: 10,
//     borderRadius: 10,
//   },
//   radio: {
//     width: 20,
//     height: 20,
//     borderRadius: 10,
//     borderWidth: 1.5,
//     borderColor: 'skyblue',
//     backgroundColor: 'white',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   radioBg: {
//     width: 10,
//     height: 10,
//     borderRadius: 10,
//     borderWidth: 1.5,
//     borderColor: 'skyblue',
//     backgroundColor: 'skyblue',
//   },
// });

// Activity Indicator

// import {StyleSheet, Text, View, ActivityIndicator, Button} from 'react-native';
// import React, {useState} from 'react';

// const PracticeReactNative = () => {
//   const [show, setShow] = useState(false);
//   const displayLoader = () => {
//     setShow(true);
//     setTimeout(() => {
//       setShow(false);
//     }, 2000);
//   };
//   return (
//     <View style={styles.container}>
//       <ActivityIndicator size={50} color={'grey'} animating={show} />
//       <View style={{margin: 10}}>
//         <Button title="Show" onPress={() => setShow(displayLoader)} />
//       </View>
//     </View>
//   );
// };

// export default PracticeReactNative;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'black',
//   },
// });

// Modal || Dialog box

// import {
//   Button,
//   Modal,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
//   Pressable,
//   Alert,
// } from 'react-native';
// import React, {useState} from 'react';

// const PracticeReactNative = () => {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: 'black',
//       }}>
//       <Pressable
//         onPress={() => Alert.alert('Button pressed!')}
//         onLongPress={() => Alert.alert('Long press detected!')}
//         onPressIn={() => console.log('Press started')}
//         onPressOut={() => console.log('Press ended')}>
//         <Text
//           style={{
//             fontSize: 20,
//             color: '#fff',
//             backgroundColor: 'purple',
//             padding: 15,
//             borderRadius: 10,
//           }}>
//           Pressable
//         </Text>
//       </Pressable>
//     </View>
//   );
// };

// export default PracticeReactNative;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // justifyContent: 'center',
//     // alignItems: 'center',
//     backgroundColor: 'black',
//   },
//   buttonView: {
//     flex: 1,
//     justifyContent: 'flex-end',
//   },
//   centeredView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 22,
//   },
//   innerModal: {
//     backgroundColor: 'skyblue',
//     padding: 30,
//     borderRadius: 10,
//     alignItems: 'center',
//     justifyContent: 'center',
//     shadowColor: 'black',
//     elevation: 5,
//   },
// });

// Status Bar
// import {StyleSheet, Text, View, StatusBar, Button} from 'react-native';
// import React, {useState} from 'react';

// const PracticeReactNative = () => {
//   const [hide, setHide] = useState(false);
//   const [barStyle, setBarStyle] = useState('default');
//   const toggleBarStyle = barStyle === 'default' ? 'light-content' : 'default';

//   return (
//     <View style={{flex: 1, justifyContent: 'center'}}>
//       <StatusBar backgroundColor={'orange'} barStyle={barStyle} hidden={hide} />
//       {/* <View style={{justifyContent:'center'}}> */}
//       <View style={{marginBottom: 20}}>
//         <Button title="Toggle Button" onPress={() => setHide(!hide)} />
//       </View>
//       <Button
//         title="Update Style"
//         onPress={() => setBarStyle(toggleBarStyle)}
//       />
//       {/* </View> */}
//     </View>
//   );
// };

// export default PracticeReactNative;

// const styles = StyleSheet.create({});

// Platform.OS
// import React from 'react';
// import {StyleSheet, Text, View, Platform} from 'react-native';

// const PracticeReactNative = () => {
//   return (
//     <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
//       <Text style={{fontSize: 30, color: 'black'}}>
//         Platform: {Platform.OS}
//       </Text>
//       {Platform.OS == 'android' ? (
//         <View
//           style={{width: 100, height: 100, backgroundColor: 'green'}}></View>
//       ) : (
//         <View style={{width: 100, height: 100, backgroundColor: 'red'}}></View>
//       )}
//       <Text style={styles.text}>Hello</Text>
//       <Text style={styles.text1}>{JSON.stringify(Platform)}</Text>
//     </View>
//   );
// };

// export default PracticeReactNative;

// const styles = StyleSheet.create({
//   text: {
//     color: Platform.OS == 'android' ? 'orange' : 'red',
//     fontSize: Platform.OS == 'android' ? 24 : 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   text1: {
//     color: 'orange',
//     fontSize: 18,
//     textAlign: 'center',
//     margin: 10,
//   },
// });

// React native Web View
// import React from 'react';
// import {StyleSheet, Text, View} from 'react-native';
// import {WebView} from 'react-native-webview';
// const PracticeReactNative = () => {
//   return (
//       <WebView source={{uri: 'https://reactnative.dev/'}} />
//   );
// };

// export default PracticeReactNative;

// const styles = StyleSheet.create({});

// Refresh Control

// import React from 'react';
// import {
//   RefreshControl,
//   SafeAreaView,
//   ScrollView,
//   StyleSheet,
//   Text,
// } from 'react-native';

// const PracticeReactNative = () => {
//   const [refreshing, setRefreshing] = React.useState(false);

//   const onRefresh = React.useCallback(() => {
//     setRefreshing(true);
//     setTimeout(() => {
//       setRefreshing(false);
//     }, 2000);
//   }, []);

//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView
//         contentContainerStyle={styles.scrollView}
//         refreshControl={
//           <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
//         }>
//         <Text>Pull down to see RefreshControl indicator</Text>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   scrollView: {
//     flex: 1,
//     backgroundColor: 'pink',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// export default PracticeReactNative;

// import React, {useState} from 'react';
// import {Button, StyleSheet, Text, View, Dimensions} from 'react-native';
// import {TextInput} from 'react-native-gesture-handler';

// const width = Dimensions.get('window').width;
// const PracticeReactNative = props => {
//   const [visible, setVisible] = useState(false);
//   const toggleVisible = () => {
//     props.navigation.navigate('Practicetwo', {name, age});
//   };
//   const age = 30;
//   const [name, setName] = useState('');
//   return (
//     <View style={styles.container}>
//       {visible ? (
//         <View style={styles.modal}>
//           <View style={styles.modalContent}>
//             <Text style={styles.text}>it's me Custom Modal</Text>
//             <Button title="Close Modal" onPress={() => setVisible(false)} />
//           </View>
//         </View>
//       ) : null}
//       <View style={{margin: 10}}>
//         <TextInput
//           placeholder="Name"
//           value={name}
//           onChangeText={text => setName(text)}
//           style={{
//             margin: 10,
//             fontSize: 16,
//             borderRadius: 10,
//             borderColor: '#ccc',
//             borderWidth: 1,
//             padding: 10,
//             width: width / 1.1,
//             height: 40,
//             color:'grey'
//           }}
//           placeholderTextColor={'black'}
//         />
//         <Button title="Pass Data" onPress={() => toggleVisible()} />
//       </View>
//       <Button title="Open Modal" onPress={() => setVisible(true)} />
//     </View>
//   );
// };

// export default PracticeReactNative;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'flex-end',
//   },
//   modal: {
//     flex: 1,
//     backgroundColor: 'rgba(50,50,50,.5)',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//     borderRadius: 10,
//   },
//   modalContent: {
//     backgroundColor: 'white',
//     padding: 20,
//     borderRadius: 10,
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: 300,
//     width: 300,
//   },
//   text: {
//     color: 'black',
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
// });

// import React, {useState} from 'react';
// import {Text, View, StyleSheet} from 'react-native';
// import Slider from '@react-native-community/slider';
// const ShadowPropSlider = ({label, value, ...props}) => {
//   return (
//     <>
//       <Text>
//         {label} ({value.toFixed(2)})
//       </Text>
//       <Slider step={1} value={value} {...props} />
//     </>
//   );
// };

// const PracticeReactNative = () => {
//   const [shadowOffsetWidth, setShadowOffsetWidth] = useState(0);
//   const [shadowOffsetHeight, setShadowOffsetHeight] = useState(0);
//   const [shadowRadius, setShadowRadius] = useState(0);
//   const [shadowOpacity, setShadowOpacity] = useState(0.1);

//   return (
//     <View style={styles.container}>
//       <View
//         style={[
//           styles.square,
//           {
//             shadowOffset: {
//               width: shadowOffsetWidth,
//               height: -shadowOffsetHeight,
//             },
//             shadowOpacity,
//             shadowRadius,
//           },
//         ]}
//       />
//       <View style={styles.controls}>
//         <ShadowPropSlider
//           label="shadowOffset - X"
//           minimumValue={-50}
//           maximumValue={50}
//           value={shadowOffsetWidth}
//           onValueChange={setShadowOffsetWidth}
//         />
//         <ShadowPropSlider
//           label="shadowOffset - Y"
//           minimumValue={-50}
//           maximumValue={50}
//           value={shadowOffsetHeight}
//           onValueChange={setShadowOffsetHeight}
//         />
//         <ShadowPropSlider
//           label="shadowRadius"
//           minimumValue={0}
//           maximumValue={100}
//           value={shadowRadius}
//           onValueChange={setShadowRadius}
//         />
//         <ShadowPropSlider
//           label="shadowOpacity"
//           minimumValue={0}
//           maximumValue={1}
//           step={0.05}
//           value={shadowOpacity}
//           onValueChange={val => setShadowOpacity(val)}
//         />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'space-around',
//     backgroundColor: '#ccc',
//     padding: 8,
//   },
//   square: {
//     alignSelf: 'center',
//     backgroundColor: 'white',
//     borderRadius: 4,
//     height: 150,
//     shadowColor: 'black',
//     width: 150,
//   },
//   controls: {
//     paddingHorizontal: 12,
//   },
// });

// export default PracticeReactNative;

// import React, {useState} from 'react';
// import {
//   FlatList,
//   Platform,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Switch,
//   Text,
//   TouchableWithoutFeedback,
//   View,
// } from 'react-native';
// import Slider from '@react-native-community/slider';

// const fontStyles = ['normal', 'italic'];
// const fontVariants = [
//   undefined,
//   'small-caps',
//   'oldstyle-nums',
//   'lining-nums',
//   'tabular-nums',
//   'proportional-nums',
// ];
// const fontWeights = [
//   'normal',
//   'bold',
//   '100',
//   '200',
//   '300',
//   '400',
//   '500',
//   '600',
//   '700',
//   '800',
//   '900',
// ];
// const textAlignments = ['auto', 'left', 'right', 'center', 'justify'];
// const textDecorationLines = [
//   'none',
//   'underline',
//   'line-through',
//   'underline line-through',
// ];
// const textDecorationStyles = ['solid', 'double', 'dotted', 'dashed'];
// const textTransformations = ['none', 'uppercase', 'lowercase', 'capitalize'];
// const textAlignmentsVertical = ['auto', 'top', 'bottom', 'center'];
// const writingDirections = ['auto', 'ltr', 'rtl'];

// const PracticeReactNative = () => {
//   const [fontSize, setFontSize] = useState(10);
//   const [fontStyleIdx, setFontStyleIdx] = useState(0);
//   const [fontWeightIdx, setFontWeightIdx] = useState(0);
//   const [lineHeight, setLineHeight] = useState(10);
//   const [textAlignIdx, setTextAlignIdx] = useState(0);
//   const [textDecorationLineIdx, setTextDecorationLineIdx] = useState(0);
//   const [includeFontPadding, setIncludeFontPadding] = useState(false);
//   const [textVerticalAlignIdx, setTextVerticalAlignIdx] = useState(0);
//   const [fontVariantIdx, setFontVariantIdx] = useState(0);
//   const [letterSpacing, setLetterSpacing] = useState(0);
//   const [textDecorationStyleIdx, setTextDecorationStyleIdx] = useState(0);
//   const [textTransformIdx, setTextTransformIdx] = useState(0);
//   const [writingDirectionIdx, setWritingDirectionIdx] = useState(0);
//   const [textShadowRadius, setTextShadowRadius] = useState(0);
//   const [textShadowOffset, setTextShadowOffset] = useState({
//     height: 0,
//     width: 0,
//   });

//   const [, ...validFontVariants] = fontVariants;

//   return (
//     <View style={styles.container}>
//       <Text
//         style={[
//           styles.paragraph,
//           {
//             fontSize,
//             fontStyle: fontStyles[fontStyleIdx],
//             fontWeight: fontWeights[fontWeightIdx],
//             lineHeight,
//             textAlign: textAlignments[textAlignIdx],
//             textDecorationLine: textDecorationLines[textDecorationLineIdx],
//             textTransform: textTransformations[textTransformIdx],
//             textAlignVertical: textAlignmentsVertical[textVerticalAlignIdx],
//             fontVariant:
//               fontVariantIdx === 0
//                 ? undefined
//                 : [validFontVariants[fontVariantIdx - 1]],
//             letterSpacing,
//             includeFontPadding,
//             textDecorationStyle: textDecorationStyles[textDecorationStyleIdx],
//             writingDirection: writingDirections[writingDirectionIdx],
//             textShadowOffset,
//             textShadowRadius,
//           },
//         ]}>
//         Lorem Ipsum is simply dummy text of the printing and typesetting
//         industry. 112 Likes
//       </Text>
//       <ScrollView>
//         <View>
//           <Text>Common platform properties</Text>
//           <CustomSlider
//             label="Text Shadow Offset - Height"
//             value={textShadowOffset.height}
//             minimumValue={-40}
//             maximumValue={40}
//             handleValueChange={val =>
//               setTextShadowOffset(prev => ({...prev, height: val}))
//             }
//           />
//           <CustomSlider
//             label="Text Shadow Offset - Width"
//             value={textShadowOffset.width}
//             minimumValue={-40}
//             maximumValue={40}
//             handleValueChange={val =>
//               setTextShadowOffset(prev => ({...prev, width: val}))
//             }
//           />
//           <CustomSlider
//             label="Font Size"
//             value={fontSize}
//             maximumValue={40}
//             handleValueChange={setFontSize}
//           />
//           <CustomPicker
//             label="Font Style"
//             data={fontStyles}
//             currentIndex={fontStyleIdx}
//             onSelected={setFontStyleIdx}
//           />
//           <CustomPicker
//             label="Font Weight"
//             data={fontWeights}
//             currentIndex={fontWeightIdx}
//             onSelected={setFontWeightIdx}
//           />
//           <CustomSlider
//             label="Line Height"
//             value={lineHeight}
//             minimumValue={10}
//             maximumValue={50}
//             handleValueChange={setLineHeight}
//           />
//           <CustomPicker
//             label="Text Align"
//             data={textAlignments}
//             currentIndex={textAlignIdx}
//             onSelected={setTextAlignIdx}
//           />
//           <CustomPicker
//             label="Text Decoration Line"
//             data={textDecorationLines}
//             currentIndex={textDecorationLineIdx}
//             onSelected={setTextDecorationLineIdx}
//           />
//           <CustomSlider
//             label="Text Shadow Radius"
//             value={textShadowRadius}
//             handleValueChange={setTextShadowRadius}
//           />
//           <CustomPicker
//             label="Font Variant"
//             data={fontVariants}
//             currentIndex={fontVariantIdx}
//             onSelected={setFontVariantIdx}
//           />
//           <CustomSlider
//             label="Letter Spacing"
//             step={0.1}
//             value={letterSpacing}
//             handleValueChange={setLetterSpacing}
//           />
//           <CustomPicker
//             label="Text Transform"
//             data={textTransformations}
//             currentIndex={textTransformIdx}
//             onSelected={setTextTransformIdx}
//           />
//         </View>
//         {Platform.OS === 'android' && (
//           <View style={styles.platformContainer}>
//             <Text style={styles.platformContainerTitle}>
//               Android only properties
//             </Text>
//             <CustomPicker
//               label="Text Vertical Align"
//               data={textAlignmentsVertical}
//               currentIndex={textVerticalAlignIdx}
//               onSelected={setTextVerticalAlignIdx}
//             />
//             <CustomSwitch
//               label="Include Font Padding"
//               handleValueChange={setIncludeFontPadding}
//               value={includeFontPadding}
//             />
//           </View>
//         )}
//         {Platform.OS === 'ios' && (
//           <View style={styles.platformContainer}>
//             <Text style={styles.platformContainerTitle}>
//               iOS only properties
//             </Text>
//             <CustomPicker
//               label="Text Decoration Style"
//               data={textDecorationStyles}
//               currentIndex={textDecorationStyleIdx}
//               onSelected={setTextDecorationStyleIdx}
//             />
//             <CustomPicker
//               label="Writing Direction"
//               data={writingDirections}
//               currentIndex={writingDirectionIdx}
//               onSelected={setWritingDirectionIdx}
//             />
//           </View>
//         )}
//       </ScrollView>
//     </View>
//   );
// };

// const CustomSwitch = ({label, handleValueChange, value}) => {
//   return (
//     <>
//       <Text style={styles.title}>{label}</Text>
//       <View style={{alignItems: 'flex-start'}}>
//         <Switch
//           trackColor={{false: '#767577', true: '#DAA520'}}
//           thumbColor={value ? '#DAA520' : '#f4f3f4'}
//           onValueChange={handleValueChange}
//           value={value}
//         />
//       </View>
//     </>
//   );
// };

// const CustomSlider = ({
//   label,
//   handleValueChange,
//   step = 1,
//   minimumValue = 0,
//   maximumValue = 10,
//   value,
// }) => {
//   return (
//     <>
//       {label && (
//         <Text style={styles.title}>{`${label} (${value.toFixed(2)})`}</Text>
//       )}
//       <View style={styles.wrapperHorizontal}>
//         <Slider
//           thumbTintColor="#DAA520"
//           minimumTrackTintColor="#DAA520"
//           minimumValue={minimumValue}
//           maximumValue={maximumValue}
//           step={step}
//           onValueChange={handleValueChange}
//           value={value}
//         />
//       </View>
//     </>
//   );
// };

// const CustomPicker = ({label, data, currentIndex, onSelected}) => {
//   return (
//     <>
//       <Text style={styles.title}>{label}</Text>
//       <View style={styles.wrapperHorizontal}>
//         <FlatList
//           bounces
//           horizontal
//           data={data}
//           keyExtractor={item => String(item)}
//           renderItem={({item, index}) => {
//             const selected = index === currentIndex;
//             return (
//               <TouchableWithoutFeedback onPress={() => onSelected(index)}>
//                 <View
//                   style={[
//                     styles.itemStyleHorizontal,
//                     selected && styles.itemSelectedStyleHorizontal,
//                   ]}>
//                   <Text
//                     style={{
//                       textAlign: 'center',
//                       color: selected ? 'black' : 'grey',
//                       fontWeight: selected ? 'bold' : 'normal',
//                     }}>
//                     {item + ''}
//                   </Text>
//                 </View>
//               </TouchableWithoutFeedback>
//             );
//           }}
//         />
//       </View>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: StatusBar.currentHeight,
//     backgroundColor: 'grey',
//     padding: 8,
//   },
//   paragraph: {
//     color: 'black',
//     textDecorationColor: 'yellow',
//     textShadowColor: 'red',
//     textShadowRadius: 1,
//     margin: 24,
//   },
//   wrapperHorizontal: {
//     height: 54,
//     justifyContent: 'center',
//     color: 'black',
//     marginBottom: 12,
//   },
//   itemStyleHorizontal: {
//     marginRight: 10,
//     height: 50,
//     padding: 8,
//     borderWidth: 1,
//     borderColor: 'grey',
//     borderRadius: 25,
//     textAlign: 'center',
//     justifyContent: 'center',
//   },
//   itemSelectedStyleHorizontal: {
//     borderWidth: 2,
//     borderColor: '#DAA520',
//   },
//   platformContainer: {
//     marginTop: 8,
//     borderTopWidth: 1,
//   },
//   platformContainerTitle: {
//     marginTop: 8,
//   },
//   title: {
//     fontWeight: 'bold',
//     marginVertical: 4,
//   },
// });

// export default PracticeReactNative;


import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PracticeReactNative = () => {
  return (
    <View>
      <Text>PracticeReactNative</Text>
    </View>
  )
}

export default PracticeReactNative

const styles = StyleSheet.create({})