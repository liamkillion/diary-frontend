import React from "react";
import { services } from "../services";
import EmojiField from "emoji-picker-textfield";
// import { prompts } from "./prompts";

class NewEntryForm extends React.Component {
  state = {
    content: "",
    timestamp: "",
    location: [],
    weather: "",
    img_src: "",
    mood: ""
  };

  componentDidMount = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        const location = [position.coords.latitude, position.coords.longitude];
        this.setState({ location });
        services.entries
          .getWeather(location)
          .then(json => this.setState({ weather: json }));
      });
    }
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleEmojiChange = (event, value) => {
    const unicodeValue = this._field.getUnicode();
    this.setState({ mood: unicodeValue });
  };
  //
  // handleFileSelect = event => {
  //   file = event.target.value;
  // };

  handleSubmit = event => {
    event.preventDefault();
    this.props.handleCreateEntry(this.state);
  };

  render() {
    let formStyle = {
      padding: 10,
      borderRadius: 10
    };
    let file = "";
    const prompts = [
      "Write about going back to school after summer vacation. ",
      "Write a thank you note to a friend who gave you onion andj garlic-flavored chewing gum.",
      "Draw an imaginary constellation. Write a story such as ancient people might have told about it.",
      "Describe a real made-up dream or nightmare.",
      "Write about your favorite childhood toy.",
      "Write out the best or the worst day of your life.",
      "Finish this thought: if I could change one thing about myself (if you can't think of anything, you might want to consider telling how you got to be perfect!)",
      "If and when I raise children, I'll never",
      "I have never been more frightened than when...",
      "Persuade a friend to give up drugs.",
      "Five years from now, I will be...",
      "Write about a day you'd like to forget.",
      "Invent and describe a new food.",
      "Describe an event that changed your life forever, or make up and describe an event that would change your life forever.",
      "Describe someone who is a hero to you and explain why.",
      "Write about a time in your life when you struggled with a choice and made the right one.",
      "Imagine yourself in a different century and describe an average day in your life.",
      "Which character from a book would you most like to meet and why?",
      "Three goals I have set for myself are...",
      "What would you do if 300 mice had just gotten out of their cages in a pet shop where you worked?",
      "What would you do if you were locked inside your favorite department store overnight?",
      "What would you do if you woke up one morning to find yourself invisible?",
      "What would you do if you were able to communicate with animals?",
      "What would you do if you could travel into the future?",
      "What would you do if you could travel into the past?"
    ];
    let promptIndex = Math.floor(Math.random() * 25) + 1;

    return (
      <div>
        <h1>NewEntryForm</h1>
        <div className="row">
          <div className="col s5">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">Today's Prompt</span>
                <span>{prompts[promptIndex]}</span>
              </div>
            </div>
          </div>
          <div className="col s7">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">Create a New Entry</span>
                <form
                  className="card teal darken-1 z-depth-4"
                  style={formStyle}
                >
                  <div className="row">
                    <div className="input-field materialize-textarea">
                      <label className="black-text active">
                        Welcome to your daily diary! Complete your entry today
                        and click Submit to save it. On the left you can see
                        information that will be included in your post :).
                      </label>
                      <textarea
                        id="textarea1"
                        className="materialize-textarea"
                        name="content"
                        onChange={this.handleChange}
                        maxLength="500"
                        data-length="500"
                      />
                      <div className="input-field inline">
                        <EmojiField
                          name="mood"
                          onChange={this.handleEmojiChange}
                          autoClose={true}
                          fieldType="textfield"
                          data-emoji-input="unicode"
                          ref={_field => (this._field = _field)}
                        />
                        <label forhtml="emojiInput" className="black-text">
                          #Mood
                        </label>
                      </div>
                      <div className="file-field input-field">
                        <div className="btn">
                          <span>File</span>
                          <input type="file" />
                        </div>
                        <div className="file-path-wrapper">
                          <input
                            className="file-path validate"
                            type="text"
                            onChange={this.handleFileSelect}
                          />
                        </div>
                      </div>
                      <a
                        onClick={this.handleSubmit}
                        className="waves-effect waves-light btn"
                      >
                        Submit
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//                       ___________________________
//                      | ____                      |
//                      ||  _ \ ___  __ _  ___ ___  |
//                      || |_) / _ \/ _` |/ __/ _ \ |
//                      ||  __/  __/ (_| | (_|  __/ |
//                      ||_|   \___|\__,_|\___\___| |
//                      |___________________________|
//                                    |
//                                    |
//            .,:;:;,.                |
//           :;.' `.:::               |
//           %%%%%%%%%&'              |
//           : o   o  :`           .\ p
//           :   c    :          .'  \ )
//           :`. -  .':        .'     .`
//           ;::`--':::      .'     .'|
//         _.:;:oooo::;._  .'     .'
//       ."  :::.__.;::  "'     .'
//       '   :::    :::       .'
//      .                   .'
//      '    .  .-|-.     .'
//     .     ' .  |  .    :
//     '    ,  `./|\.'    :
//    .    .     `"'      :
//    '    :              :
//   .    ':              :
//  .____' :              :
//  '  '   :______________:
// ''''     :`-.'  -,.._`;
//          :'.-.-`_.-.,':
//          :-'.'_`'.-,.,:
//          :.-`_.-_.-` -:
//          : -'.'`,`.,`-;
//          :'.` -'_'. _.:
//          ;-`.,-`-','._:
//          ;`- `-`- '. _:
//          :-.`,_.`'.-.`:
//          :,-'.`-.',-_':
//          :._,`-''.,-.-;
//          ;.-`--`.-,.,`:
//          :,.-`._'.`-._:
//          :`.'.-_.''.`.:
//          `-.'`-'.---.-`
//            `..'  `..' mh
//

export default NewEntryForm;
