import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { moveNextPage,moveLastPage } from '../../Actions/actionCreator';
import {bindActionCreators} from 'redux';
import './DemoChatBox.css';
const API = "http://localhost:3000/"     //API Base URL
const  DEFAULT_QUERY = 'resource/chatbottext.json'    //API

//import { Test } from './DemoChatBox.styles';

class DemoChatBox extends PureComponent { 
  constructor(props) {
    super(props);
    this.state = {
      chatBotLevel: 0,
      chatBotText : {},
      isLoading: false,
      finishState : false,
      error : null
    };
  }
  fetchChatBotText = () => {
    fetch(API + DEFAULT_QUERY)        
      .then(response => {console.log(response); return response.json()})
      .then(data =>
        {
          this.setState({
          chatBotText: data,
          isLoading: false,
        })
        }
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }
  componentDidMount() {
    this.fetchChatBotText();
  }

  getButtons = (t=1) => {
    const {chatBotLevel,chatBotText,} = this.state;
    if(chatBotText.options && chatBotLevel)
    {
      return (<div>
        {
          chatBotText.options.map(option =>(
            <button key = {option.answer} type="button" onClick={() =>{ this.onClickAnswer(option.answer);} } className={"btn-choiceselect"+t}>{option.answer}</button>
          ))
        }
        <button type="button" onClick={ () => this.setState({ chatBotLevel: chatBotLevel+1}) } className={"btn-choiceselect"+t}>Comment</button>    
      </div>)
    }else
      return null;
  }
  onClickAnswer = (s) => {
    const {chatBotLevel,chatBotText,} = this.state;
    const node = chatBotText.options.find(option => (option.answer === s));
    this.setState({chatBotLevel: chatBotLevel+1, chatBotText: node },() => {console.log("Updated");console.log(chatBotText)});
    if(node.options === null) setTimeout(this.props.moveNextPage,3000);
  }
  render () {
    const {chatBotLevel,chatBotText,isLoading} = this.state;
    return (
      <div className="DemoChatBoxWrapper">
        {(chatBotLevel >1)&&
        <button className="btn-close" onClick = {this.props.moveLastPage}>×</button>}
          {
            (chatBotLevel < 2) ?
            <div className="first">
              {chatBotLevel? <div className="chat-show" >{!isLoading? chatBotText.question: ""}  </div> : null }
              {(chatBotLevel < 2)&&<button type="button" onClick={ () => this.setState({ chatBotLevel: chatBotLevel===0?1:0}) } className="btn-mychat">Chat</button>}
              {this.getButtons()}
            </div>
          :<div className="second">
            {chatBotLevel? <div className="chat-nextshow" >{!isLoading? chatBotText.question: ""}  </div> : null }
            {this.getButtons(2)}
          </div>

          }

      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
      moveNextPage,
      moveLastPage
  }, dispatch)
}

export default connect(
  null,
  mapDispatchToProps,
)(DemoChatBox);
