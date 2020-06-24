export default class VoiceCommands {

    constructor (ArtyomInstance){
        this._artyom = ArtyomInstance;
    }

    loadCommands(){
        let Artyom = this._artyom;

        return Artyom.addCommands([
            {
                indexes: ["Hello", "Hi"],
                action: () => {
                    // command for testing in Ensglish
                    Artyom.say("Hello, how are you?");
                }
            },
            {
                indexes: ["Hola"],
                smart: true,
                action: () => {
                    // command for testing in Spanish
                    Artyom.say("Hola estoy funcionando");
                }
            },
            {
                indexes: ["option one", "option 1"],
                // indexes: ["tarjeta uno", "tarjeta 1"],
                action: () => {
                    Artyom.say("one choose");
                    // Artyom.say("elegir opcion");
                    document.getElementById("buttonOne").click();
                }
            },
            {
                indexes: ["option three", "option 3"],
                // indexes: ["tarjeta tres", "tarjeta 3"],
                action: () => {
                    Artyom.say("three choose");
                    // Artyom.say("elegir opcion");
                    document.getElementById("buttonThree").click();
                }
            },
            {
                indexes: ["option four", "option 4", "option for"],
                // indexes: ["tarjeta cuatro", "tarjeta 4"],
                action: () => {
                    // Artyom.say("elegir opcion");
                    Artyom.say("four choose");
                    document.getElementById("buttonFour").click();
                }
            },
            {
                indexes: ["option six", "option 6"],
                // indexes: ["tarjeta Seis", "tarjeta 6"],
                action: () => {
                    Artyom.say("six choose");
                    document.getElementById("buttonSix").click();
                }
            },
            {
                indexes: ["option seven", "option 7"],
                // indexes: ["tarjeta cuatro", "tarjeta 4"],
                action: () => {
                    Artyom.say("seven choose");
                    document.getElementById("buttonSeven").click();
                }
            },
            {
                indexes: ["option nine", "option 9"],
                // indexes: ["tarjeta Seis", "tarjeta 6"],
                action: () => {
                    Artyom.say("nine choose");
                    document.getElementById("buttonNine").click();
                }
            },
        ]);
    }
}