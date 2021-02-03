import React, { Component } from "react";
import { Button, ScrollView, SectionList, TouchableOpacity, TextInput, StyleSheet, Text, View } from "react-native";


class App extends Component {

  state = {
    email: '',
    password: ''
  }
  handleEmail = (text) => {
    this.setState({ email: text })
  }
  handlePassword = (text) => {
    this.setState({ password: text })
  }
  login = (email, pass) => {
    alert('email: ' + email + ' password: ' + pass)
  }

  Show1 = () => {
    alert("Welcome..!");

  }
  Show2 = (Num) => {
    alert(Num);

  }
  Show3 = (Num) => {
    alert(Num);

  }
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Button title="Button1" color = "Navy" onPress={this.Show1}></Button>
          <Button title="Button2" color = "Navy" onPress={this.Show2.bind(this, 100)}></Button>
          <Button title="Button3" color = "Navy" onPress={this.Show3.bind(this, "vishal..!!")}></Button>
          <SectionList
            sections={[
              { title: 'A', data: ['Ajay', 'Abbass', 'Aman'] },
              { title: 'B', data: ['Binod', 'Bhaskar', 'Bhavna'] },
              { title: 'C', data: ['Chandresh', 'Chintan', 'Chintu'] },
            ]}
            renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
            renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
            keyExtractor={(item, index) => index}
          />
             <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               placeholderTextColor = "#fff"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               placeholderTextColor = "#fff"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.login(this.state.email, this.state.password)
               }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#008080"
    
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 22,
    fontWeight: 'bold',
    color: "#fff",
    backgroundColor: '#CCCCFF',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
 
 input: {
    margin: 15,
    height: 40,
    borderColor: 'white',
    borderWidth: 1
 },
 submitButton: {
    backgroundColor: 'white',
    padding: 10,
    margin: 15,
    height: 40,
 },
 submitButtonText:{
    color: 'white',
 }
})
export default App;