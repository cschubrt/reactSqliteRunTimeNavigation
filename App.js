/*Example of SQLite Database in React Native*/
import React from 'react';
import { StyleSheet, View, Alert, TextInput, Button, Text, Platform, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
//For react-navigation 4.0+
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
 
import HomeScreen from './pages/HomeScreen';
import RegisterUser from './pages/RegisterUser';
import UpdateUser from './pages/UpdateUser';
import ViewUser from './pages/ViewUser';
import ViewAllUser from './pages/ViewAllUser';
import DeleteUser from './pages/DeleteUser';
import ListUsers from './pages/ListUsers';
import SecondActivity from './pages/SecondActivity';

const App = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Home',
      headerStyle: { backgroundColor: '#424242' },
      headerTintColor: '#ffffff',
    },
  },
  View: {
    screen: ViewUser,
    navigationOptions: {
      title: 'View User',
      headerStyle: { backgroundColor: '#424242' },
      headerTintColor: '#ffffff',
    },
  },
  ViewAll: {
    screen: ViewAllUser,
    navigationOptions: {
      title: 'View All User',
      headerStyle: { backgroundColor: '#424242' },
      headerTintColor: '#ffffff',
    },
  },
  Update: {
    screen: UpdateUser,
    navigationOptions: {
      title: 'Update User',
      headerStyle: { backgroundColor: '#424242' },
      headerTintColor: '#ffffff',
    },
  },
  Register: {
    screen: RegisterUser,
    navigationOptions: {
      title: 'Register User',
      headerStyle: { backgroundColor: '#424242' },
      headerTintColor: '#ffffff',
    },
  },
  Delete: {
    screen: DeleteUser,
    navigationOptions: {
      title: 'Delete User',
      headerStyle: { backgroundColor: '#424242' },
      headerTintColor: '#ffffff',
    },
  },
  ListView: {
    screen: ListUsers,
    navigationOptions: {
      title: 'List From Server',
      headerStyle: { backgroundColor: '#424242' },
      headerTintColor: '#ffffff',
    },
  },
  SecondActivity: {
    screen: SecondActivity,
    navigationOptions: {
      title: 'SecondActivity',
      headerStyle: { backgroundColor: '#424242' },
      headerTintColor: '#ffffff',
    },
  }
});

const styles = StyleSheet.create({
  MainContainer: {
    alignItems: 'center',
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#fff'
  },
  MainContainer_For_Show_StudentList_Activity: {
    flex: 1,
    paddingTop: (Platform.OS == 'ios') ? 20 : 0,
    marginLeft: 5,
    marginRight: 5
  },
  TextInputStyleClass: {
    textAlign: 'center',
    width: '90%',
    marginBottom: 7,
    height: 40,
    borderWidth: 1,
    borderColor: '#FF5722',
    borderRadius: 5,
  },
  TouchableOpacityStyle: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom: 7,
    width: '90%',
    backgroundColor: '#00BCD4'
  },
  TextStyle: {
    color: '#fff',
    textAlign: 'center',
  },
  rowViewContainer: {
    fontSize: 20,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
  }
});

export default createAppContainer(App);