import * as React from 'react';
import {View, Text, StatusBar, LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Login from './src/screens/Auth/Login';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from './src/screens/Auth/SplashScreen';
import SignUp from './src/screens/Auth/SignUp';
import HomeScreen from './src/screens/mainScreens/HomeScreen';
import CreateScreen from './src/components/CreateScreen';
import PendingRequestScreen from './src/components/PendingRequestScreen';
import AdminScreen from './src/components/AdminScreen';
import ForgetPassword from './src/components/ForgetPassword';
import RejectScreen from './src/components/RejectScreen';
import ResetPasswordScreen from './src/components/ResetPasswordScreen';
import PracticeReactNative from './src/screens/PracticeReactNative';
import PassingData from './src/screens/PassingData';
import {Button} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import ProfileScreen from './src/components/ProfileScreen';

const Stack = createStackNavigator();
const App = ({navigation}) => {
  LogBox.ignoreAllLogs();

  return (
    <>
      <StatusBar backgroundColor={'black'} />
      <NavigationContainer>
        <Stack.Navigator initialRouteName={null}>
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false, gestureEnabled: false}}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false, gestureEnabled: false}}
          />
          <Stack.Screen
            name="CreateScreen"
            component={CreateScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="PendingRequest"
            component={PendingRequestScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Admin"
            component={AdminScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="RejectScreen"
            component={RejectScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ForgetPassword"
            component={ForgetPassword}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ProfileScreen"
            component={ProfileScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
            options={{headerShown: false}}
          />
          {/* <Stack.Screen
            name="Practice"
            component={PracticeReactNative}
            options={{
              headerTitle: () => <Button title="Button" />,
              headerShown: false,
              title: 'Open Modal',
              headerStyle: {
                backgroundColor: 'orange',
              },
              headerTintColor: 'white',
              headerTitleStyle: {fontSize: 20},
              headerRight: () => (
                <Button
                  title="Home"
                  onPress={() => navigation.navigate('Practicetwo')}
                />
              ),
            }}
          /> */}
          {/* <Stack.Screen
            name="Practicetwo"
            component={PassingData}
            options={{headerShown: false}}
          />
          {/* <Stack.Screen
            name="API"
            component={Api}
            options={{headerShown: false}}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
