import React from "react";
import { Button } from "antd";
// Import the Artyom library
import Artyom from "artyom.js";

// import ArtyomCommandsManager from './ArtyomCommands.js';
import VoiceCommands from "./VoiceCommands";
import VoiceCommandsSpanish from "./VoiceCommandsSpanish";

// Create a "globally" accesible instance of Artyom
const Jarvis = new Artyom();

export default class VoiceControl extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.startAssistant = this.startAssistant.bind(this);
        this.stopAssistant = this.stopAssistant.bind(this);

        this.state = {
            artyomActive: false,
            // artyomActive: true
        };

        // Load some commands to Artyom using the commands manager
        // let CommandsManager = new VoiceCommands(Jarvis);
        let CommandsManager = new VoiceCommandsSpanish(Jarvis);
        CommandsManager.loadCommands();
    }

    startAssistant() {
        let _this = this;

        console.log("Artyom succesfully started !");

        Jarvis.initialize({
            // lang: "en-GB",
            lang: "es-ES",
            debug: true,
            continuous: true,
            soundex: true,
            listen: true,
            obeyKeyword: "Emma",
            executionKeyword: "ahora",
        })
            .then(() => {
                // Display loaded commands in the console
                console.log(Jarvis.getAvailableCommands());

                // Jarvis.say("there, how are you?");
                Jarvis.say("Hola estoy para ayudarte");

                _this.setState({
                    artyomActive: true,
                });
            })
            .catch(err => {
                console.error("Oopsy daisy, this shouldn't happen !", err);
            });
    }

    stopAssistant() {
        let _this = this;

        Jarvis.fatality()
            .then(() => {
                console.log("Jarvis has been succesfully stopped");

                _this.setState({
                    artyomActive: false,
                });
            })
            .catch(err => {
                console.error("Oopsy daisy, this shouldn't happen neither!", err);

                _this.setState({
                    artyomActive: false,
                });
            });
    }

    componentDidMount() {
        this.startAssistant();
    }

    render() {
        return (
            <div>
                {/* Voice commands action buttons */}
                <Button type={"primary"} />
                <Button value={"Start Artyom"} disabled={this.state.artyomActive} onClick={this.startAssistant}>
                    Iniciar comando por Voz
                </Button>
                <Button value={"Stop Artyom"} disabled={!this.state.artyomActive} onClick={this.stopAssistant}>
                    Detener comando por voz
                </Button>
                {/*<input type="button" value="Start Artyom" disabled={this.state.artyomActive} onClick={this.startAssistant}/>*/}
                {/*<input type="button" value="Stop Artyom" disabled={!this.state.artyomActive} onClick={this.stopAssistant}/>*/}
            </div>
        );
    }
}
