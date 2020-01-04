import React, { Component } from 'react';
import { StyleSheet, Text, View, ListView, ActivityIndicator } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import Mybutton from './components/Mybutton';
import Mytext from './components/Mytext';
import Mytextinput from './components/Mytextinput';

export default class ListUsers extends React.Component {

    static navigationOptions = {
            title: 'MainActivity',
        };

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }

    OpenSecondActivity(id) {
        this.props.navigation.navigate('Second', { ListViewClickItemHolder: id });
    }

    componentDidMount() {
        return fetch('https://cschubert.000webhostapp.com/CollegeStudentsList.php')
            .then((response) => response.json())
            .then((responseJson) => {
                let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
                this.setState({
                    isLoading: false,
                    dataSource: ds.cloneWithRows(responseJson),
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
            <View style={styles.MainContainer}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderSeparator={this.ListViewItemSeparator}
                    renderRow={(rowData) => <Text style={styles.rowViewContainer}
                        onPress={this.OpenSecondActivity.bind(this, rowData.id)}> {rowData.name} </Text>}
                />
            </View>
        );
    }

}