import React, {Component} from "react";
// import toyCar from '../../assets/attributes/ToyCarRed.png';
// import carTransformed from '../../assets/attributes/ToyCarRedTransformed.png';
import {Button, notification, Radio} from "antd";
import {GlassMagnifier} from "react-image-magnifiers";

// import Artyom from "artyom.js/source/artyom";


// ArtyomCommandsManager
// ArtyomCommands.js
class AttributeExercise extends Component {
    // constructor
    constructor(ArtyomInstance) {
        super(ArtyomInstance);
        this._artyom = ArtyomInstance;
    }

    loadCommands() {
        let Artyom = this._artyom;

        return Artyom.addCommands([
            {
                indexes: ["Hello", "Hi"],
                action: () => {
                    Artyom.say("Hello, how are you?");
                }
            },
            {
                indexes: [/How are you/, /Regular expressions supported/],
                smart: true,
                action: () => {
                    Artyom.say("I'm fine, thanks for asking !");
                }
            },
            {
                indexes: ["Generate reports of * of this year"],
                smart: true,
                action: (i, month) => {
                    let year = new Date().getFullYear();

                    Artyom.say(`Generating reports of ${month} ${year} `);

                    Artyom.say("Ready ! What were you expecting? write some code you lazy bear !");
                }
            },
        ]);
    }
}

export default AttributeExercise;
