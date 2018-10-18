import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      response: {
        results: [
          {
            
          }
        ]
      }
    }
  }
  componentDidMount() {
    var oxfordCreds = {
      apiId: "b5af5ac6",
      apiKey: "1ffc6a29363ac7760e8c8bca3ebb59a4"
    }
    
    fetch('https://od-api.oxforddictionaries.com/api/v1/entries/en/ace/regions=us',{
      method: 'GET',
      headers: new Headers({
        'app_id': oxfordCreds.apiId, 'app_key': oxfordCreds.apiKey
      }),
    }).then((response) => {
        console.log(response)
        this.setState({response: response});
      }, (error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <div>{this.state.response.results[0].id}</div>
      </div>
    );
  }
}

export default App;
