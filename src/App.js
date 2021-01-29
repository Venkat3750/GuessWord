
import './App.css';
import React , {Component} from 'react';
import GuessedWords from './GuessedWords';
import Congrats from './Congrats';
import {connect} from 'react-redux';
import Input from './Input';
import {getSecretWord} from './actions';
export class UnconnectedApp extends Component {

  componentDidMount(){
    this.props.getSecretWord();
  }
  render(){
  return (
    <div className="container">
      <h3>Welcome to Sherlock game</h3> 
      {/* <div> The secret word is {this.props.secretWord} </div> */}
    <Congrats success={this.props.success} />
    <Input />
      <GuessedWords guessedWords={this.props.guessedWords}/>
    </div>
  );
  }
}

const mapStateToProps = (state) => {
const {success,guessedWords,secretWord} = state;
return {success,guessedWords,secretWord};
}

export default connect (mapStateToProps, {getSecretWord}) (UnconnectedApp);
