/*Screen to register the user*/
import React from 'react';
import { ScrollView, KeyboardAvoidingView, View, Alert, Text } from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'UserDatabase.db' });
export default class RegisterUser extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  registration_Function = () => {
    var that = this;
    if (this.state.name) {
      if (this.state.email) {
        if (this.state.password) {
          fetch('https://cschubert.000webhostapp.com/registration_api.php', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              user_name: this.state.name,
              user_email: this.state.email,
              user_password: this.state.password
            })

          }).then((response) => response.json())
            .then((responseJson) => {

              // Showing response message coming from server after inserting records.
              //Alert.alert(responseJson);
              Alert.alert(
                'Success',
                'You are Registered Successfully',
                [
                  {
                    text: 'Ok',
                    onPress: () =>
                      that.props.navigation.navigate('HomeScreen'),
                  },
                ],
                { cancelable: false }
              );
            }).catch((error) => {
              console.error(error);
            });
        } else {
          alert('Please fill Password');
        }
      } else {
        alert('Please fill Email');
      }
    } else {
      alert('Please fill Name');
    }
  }


  render() {
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <ScrollView keyboardShouldPersistTaps="handled">
          <KeyboardAvoidingView behavior="padding" style={{ flex: 1, justifyContent: 'space-between' }}>

            <Text style={{ fontSize: 20, color: "#000", textAlign: 'center', marginBottom: 15, marginTop: 10 }}>
              App User Registration Form
            </Text>

            <Mytextinput
              placeholder="Enter User Name"
              onChangeText={data => this.setState({ name: data })}
              style={{ padding: 10 }}
            />

            <Mytextinput
              placeholder="Enter User Email Address"
              onChangeText={data => this.setState({ email: data })}
              style={{ padding: 10 }}
            />

            <Mytextinput
              placeholder="Enter User Password"
              onChangeText={data => this.setState({ password: data })}
              underlineColorAndroid='transparent'
              style={{ padding: 10 }}
              secureTextEntry={true}
            />

            <Mybutton
              title="Submit"
              customClick={this.registration_Function.bind(this)}
            />

          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    );
  }

}
