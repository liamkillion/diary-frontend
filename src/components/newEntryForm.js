import React from "react";
import { services } from "../services";
import EmojiField from "emoji-picker-textfield";
import { prompts } from "./prompts";

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

  handleSubmit = event => {
    event.preventDefault();
    this.props.handleCreateEntry(this.state);
  };

  render() {
    let formStyle = {
      padding: 10,
      borderRadius: 10
    };
    debugger;
    let promptIndex = Math.floor(Math.random() * 25) + 1;
    const ReactS3Uploader = require("react-s3-uploader");
    return (
      <div>
        <h1>NewEntryForm</h1>
        <div className="row">
          <div className="col s5">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">Today's Prompt</span>
                // <span>{prompts[promptIndex]}</span>
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
                      />
                      <div className="input-field inline">
                        <EmojiField
                          name="mood"
                          onChange={this.handleEmojiChange}
                          autoClose={true}
                          fieldType="textfield"
                          data-emoji-input="unicode"
                          className="black-text"
                          ref={_field => (this._field = _field)}
                        />
                        <label forhtml="emojiInput">#Mood</label>
                      </div>
                      <div className="file-field input-field">
                        <div className="btn">
                          <span>File</span>
                          <input type="file" />
                          <ReactS3Uploader />
                        </div>
                        <div className="file-path-wrapper">
                          <input className="file-path validate" type="text" />
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
