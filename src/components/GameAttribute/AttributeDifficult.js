import React, {Component} from "react";
import Artyom from "artyom.js";
// import Artyom from "artyom.js/source/artyom";
import AttributeExercise from "./AttributeExercise";

import {Radio, Card, Button, notification} from "antd";
// import Artyom from "artyom.js/source/artyom";
// import Artyom from "artyom.js";

// import CodeMirror from "react-codemirror";
// import "codemirror/lib/codemirror.css";
// import "codemirror/mode/javascript/javascript";

// import AttributeJava1 from '../../assets/attributes/AttributesJava1.png';
// import AttributeJava2 from '../../assets/attributes/AttributesJava2.png';
// import AttributeJava3 from '../../assets/attributes/AttributesJava3.png';
//
// import AttributeJavaScript1 from '../../assets/attributes/AttributesJs1.png';
// import AttributeJavaScript2 from '../../assets/attributes/AttributesJs2.png';
// import AttributeJavaScript3 from '../../assets/attributes/AttributesJs3.png';
//
// import AttributePython1 from '../../assets/attributes/AttributesPython1.png';
// import AttributePython2 from '../../assets/attributes/AttributesPython2.png';
// import AttributePython3 from '../../assets/attributes/AttributesPython3.png';

// const code = ' \n bye bye\n const hi = "hellowwww"{ \n  const val = 1 }';
// window.SpeechRecognition = window.SpeechRecognition || window.SpeechRecognition;
// const recognition = new window.SpeechRecognition();
// recognition.onresult = (event) => {
//     const speechToText = event.results[0][0].transcript;
// };
// recognition.start();


const Jarvis = new Artyom();


class AttributeDifficult extends Component {
    constructor(props, context) {
        super(props, context);

        this.startAssistant = this.startAssistant.bind(this);
        this.stopAssistant = this.stopAssistant.bind(this);
        this.speakText = this.speakText.bind(this);
        this.handleTextareaChange = this.handleTextareaChange.bind(this);

        this.state = {
            artyomActive: false,
            textAreaValue: "",
            artyomIsReading: false
        };

        let CommandsManager = new AttributeExercise(Jarvis);
        CommandsManager.loadCommands();
    }

    startAssistant(){
        let _this = this;

        console.log('Artyom inicio BIEN!');
        Jarvis.initialize({
            lang: "en-GB",
            debug: true,
            continuous: true,
            soundex: true,
            listen: true
        })
            .then(() => {
                console.log(Jarvis.getAvailableCommands());
                Jarvis.say("hello there, how are you ?");

                _this.setState({artyomActive: true});
            })
            .catch((err) => {
                console.error("OOOOoops daisy", err);

                _this.setState({artyomActive: false})
            });
    }

    stopAssistant() {
        let _this = this;

        Jarvis.fatality().then(() => {
            console.log("Jarvis has been succesfully stopped");

            _this.setState({ artyomActive: false });

        }).catch((err) => {
            console.error("Oopsy daisy, this shouldn't happen neither!", err);

            _this.setState({ artyomActive: false });
        });
    }

    speakText() {
        let _this = this;

        _this.setState({artyomIsReading: true});

        Jarvis.say(_this.state.textAreaValue, {
            onEnd() {
                _this.setState({ artyomIsReading: false });
            }
        })
    };

    handleTextareaChange(event) {
        this.setState({textareaValue: event.target.value});
    }

    render() {
        return (
            <div>
                {/*<h1>Welcome to Jarvis Assistant DELISSS HERE!</h1>*/}
                {/*<p>In this very basic assistant, you can say hello and ask for some reports e.g `Generate report of April of this year`</p>*/}
                {/* Voice commands action buttons */}
                <input type="button" value="Start Artyom" disabled={this.state.artyomActive} onClick={this.startAssistant}/>
                <input type="button" value="Stop Artyom" disabled={!this.state.artyomActive} onClick={this.stopAssistant}/>

                {/*/!* Speech synthesis Area *!/*/}

                {/*<p>I can read some text for you if you want:</p>*/}

                {/*<textarea rows="5" onChange={this.handleTextareaChange} value={this.state.textareaValue}/>*/}
                {/*<br/>*/}
                {/*/!* Read the text inside the textarea with artyom *!/*/}
                {/*<input type="button" value="Read Text" disabled={this.state.artyomIsReading} onClick={this.speakText}/>*/}
            </div>
        )
    }
}

export default AttributeDifficult;
