import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
import dictionary from '../database';

export default class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      isSearchPressed: false,
      isLoading: false,
      word: "Loading...",
      lexicalCategory: '',
      definition: ""
    };
  }

  getWord = (text) => {
    var text = text.toLowerCase()
    try {
      var word = dictionary[text]["word"]

      var lexicalCategory = dictionary["lexicalCategory"]

      var definition = dictionary["definition"]

      this.setState({
        "word": word,
        "lexicalCategory": lexicalCategory,
        "definition": definition
      })
    }
    catch (err) {
      alert("Sorry This word is not available for now")
      this.setState({
        'text': '',
        'isSearchPressed': false
      })
    }
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#26282a" }}>
        <Header
          backgroundColor="#1e1e1e"
          centerComponent={{
            text: ' Pocket Dictionary',
            style: { color: '#eaeaea', fontSize: 30, marginLeft: -120, marginTop: 10, },
          }}
        />
        <View style={styles.inputBoxContainer}>
          <TextInput
            style={styles.inputBox}
            onChangeText={text => {
              this.setState({
                text: text,
                isSearchPressed: false,
                word: "Loading...",
                lexicalCategory: '',
                examples: [],
                defination: ""
              });
            }}
            value={this.state.text}
          />

          <TouchableOpacity
            style={styles.searchButton}
            onPress={() => {
              this.setState({ isSearchPressed: true });
              this.getWord(this.state.text)
            }}>
            <Text style={styles.searchText}>Search</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.outputContainer}>
          <Text style={{ fontSize: 20 }}>
            {
              this.state.isSearchPressed && this.state.word === "Loading..."
                ? this.state.word
                : ""
            }
          </Text>
          {
            this.state.word !== "Loading..." ?
              (
                <View style={{ justifyContent: 'center', marginLeft: 10 }}>
                  <View style={styles.detailsContainer}>
                    <Text style={styles.detailsTitle}> Word :{" "} </Text>
                    <Text style={{ fontSize: 18 }}>
                      {/*Display the word here*/}
                      {this.state.word}
                    </Text>
                  </View>
                  <View style={styles.detailsContainer}>
                    <Text style={styles.detailsTitle}> Type :{" "}  </Text>
                    <Text style={{ fontSize: 18 }}>
                      {/*Display the category here*/}
                      {this.state.word}
                    </Text>
                  </View>
                  <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    <Text style={styles.detailsTitle}> Definition :{" "} </Text>
                    <Text style={{ fontSize: 18 }}>
                      {/*Display the definition here*/}
                      {this.state.word}
                    </Text>
                  </View>
                </View>
              )
              : null
          }
          
        </View>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  inputBoxContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputBox: {
    width: '80%',
    alignSelf: 'center',
    marginLeft:-50,
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    borderColor: "#258afc",
    borderRadius: 10,
  },
  searchButton: {
    width: '40%',
    borderColor:'#b6b6b6',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderWidth: 2,
    borderRadius: 13,
    marginLeft:-190,
  },
  searchText: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'#ebebeb'
  },
  outputContainer: {
    flex: 0.7,
    alignItems: 'center',
    marginLeft: -90,
    marginBottom:60,
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    color: '#ebebeb'
  },
  detailsTitle: {
    color: '#52c5f4',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: -100
  }
});
