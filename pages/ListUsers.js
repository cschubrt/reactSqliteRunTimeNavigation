import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

export default class ListUsers extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }

    OpenSecondActivity(id) {
        this.props.navigation.navigate('SecondActivity', { ListViewClickItemHolder: id });
    }

    componentDidMount() {
        return fetch('https://cschubert.000webhostapp.com/CollegeStudentsList.php')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson,
                }, function () {
                    // In this block you can do something with new state.
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    ListViewItemSeparator = () => {
        return (
            <View
                style={{
                    height: .5,
                    width: "100%",
                    backgroundColor: "#000",
                }}
            />
        );
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, paddingTop: 20 }}>
                    <ActivityIndicator />
                </View>
            );
        }
        return (
            <View style={styles.MainContainer_For_Show_StudentList_Activity}>
                <FlatList
                    data={this.state.dataSource}
                    ItemSeparatorComponent={this.ListViewItemSeparator}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => <Text style={styles.rowViewContainer}
                        onPress={this.OpenSecondActivity.bind(this, item.student_id)}> {item.student_name} </Text>}
                />
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