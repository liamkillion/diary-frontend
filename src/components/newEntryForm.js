import React from "react";
import { services } from "../services";
import EmojiField from "emoji-picker-textfield";

class NewEntryForm extends React.Component {
  state = {
    content: "",
    timestamp: "",
    location: [],
    weather: "",
    img_src: "",
    mood: ""
  };

  // componentDidMount() {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     services.auth.getCurrentUser().then(user => {
  //       console.log("response fron current_user endpoint", user);
  //       const currentUser = { currentUser: user };
  //       this.setState({ auth: currentUser });
  //     });
  //   }
  // }

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
    this.setState({ mood: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    services.entries.createNewEntry(this.state);
    this.props.refreshEntries(this.state);
    this.props.history.push("/entries");
  };

  render() {
    console.log("Entry form state", this.state);
    const ReactS3Uploader = require("react-s3-uploader");
    return (
      <div>
        <h1>NewEntryForm</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field">
              <label>
                Welcome to your daily diary! Complete your entry today and click
                Submit to save it. On the left you can see information that will
                be included in your post :).
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
              <input type="submit" />
            </div>
          </div>
        </form>
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
