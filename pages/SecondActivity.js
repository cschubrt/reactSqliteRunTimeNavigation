import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

export default class SecondActivity extends Component {

    constructor(props) {
        super(props)
        this.state = {
            IdHolder: '',
            NameHolder: '',
            SemesterHolder: '',
            DepartmentHolder: '',
            PhoneNumberHolder: ''
        }
    }

    componentDidMount() {
        fetch('https://cschubert.000webhostapp.com/filter.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                // Getting the id.
                id: this.props.navigation.state.params.ListViewClickItemHolder
            })

        }).then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    IdHolder: responseJson[0].student_id,
                    NameHolder: responseJson[0].student_name,
                    SemesterHolder: responseJson[0].semester,
                    DepartmentHolder: responseJson[0].department,
                    PhoneNumberHolder: responseJson[0].student_phone_number
                })
            }).catch((error) => {
                console.error(error);
            });
    }

    render() {
        return (
            <View style={styles.MainContainer}>
                <View style={{ flex: 1, flexDirection: 'column' }} >
                    <Text style={styles.textViewContainer} > {'id = ' + this.state.IdHolder} </Text>
                    <Text style={styles.textViewContainer} > {'Name = ' + this.state.NameHolder} </Text>
                    <Text style={styles.textViewContainer} > {'Department = ' + this.state.DepartmentHolder} </Text>
                    <Text style={styles.textViewContainer} > {'Semester = ' + this.state.SemesterHolder} </Text>
                    <Text style={styles.textViewContainer} > {'Phone Number = ' + this.state.PhoneNumberHolder} </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    rowViewContainer: {
        fontSize: 20,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
    },
    MainContainer_For_Show_StudentList_Activity: {
        flex: 1,
        paddingTop: (Platform.OS == 'ios') ? 20 : 0,
        marginLeft: 5,
        marginRight: 5
    },
    MainContainer:
    {
        justifyContent: 'center',
        flex: 1,
        margin: 10
    },
    rowViewContainer: {
        fontSize: 20,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
    },
    textViewContainer: {
        padding: 5,
        fontSize: 20,
        color: '#000',
    }
});