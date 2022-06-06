export default class VoiceCommandsSpanish {
    constructor(ArtyomInstance) {
        this._artyom = ArtyomInstance;
    }

    actions = (buttonId) => {
        console.log('***ejecutar boton', buttonId);
    };

    loadCommands() {
        let Artyom = this._artyom;

        return Artyom.addCommands([
            {
                indexes: ["Hola"],
                action: () => {
                    Artyom.say("estoy escuchandote");
                },
            },
            {
                indexes: ["como estas", "Comó estás"],
                // smart: true,
                action: () => {
                    // command for testing in Spanish
                    Artyom.say("Estoy bien ");
                },
            },
            //Open games
            {
                indexes: ["Jugar atributos", "atributos", "abrir atributos", "Juego 1"],
                action: () => {
                    this.actions("cardAttributes");
                    document.getElementById("cardAttributes") === null
                        ? Artyom.say("Lo siento no se puede hacer esta accion por ahora")
                        : document.getElementById("cardAttributes").click();
                },
            },
            //Choose option
            {
                indexes: ["opcion uno", "opción 1"],
                action: () => {
                    document.getElementById("buttonOne") === null
                        ? Artyom.say("Lo siento no se puede hacer esta accion por ahora")
                        : document.getElementById("buttonOne").click();
                },
            },
            {
                indexes: ["opcion tres", "opción 3"],
                action: () => {
                    Artyom.say("tres seleccionado");
                    document.getElementById("buttonThree").click();
                },
            },
            {
                indexes: ["opcion cuatro", "opción 4"],
                action: () => {
                    Artyom.say("cuatro seleccionado");
                    document.getElementById("buttonFour").click();
                },
            },
            {
                indexes: ["opcion Seis", "opción 6"],
                action: () => {
                    Artyom.say("seis seleccionado");
                    document.getElementById("buttonSix").click();
                },
            },
            {
                indexes: ["opcion siete", "opción 7"],
                action: () => {
                    Artyom.say("siete seleccionado");
                    document.getElementById("buttonSeven").click();
                },
            },
            {
                indexes: ["opcion Nueve", "opción 9"],
                action: () => {
                    Artyom.say("nueve seleccionado");
                    document.getElementById("buttonNine").click();
                },
            },
            //check answer
            {
                indexes: ["revisar respuestas"],
                action: () => {
                    Artyom.say("revisando");
                    document.getElementById("buttonSendAnswers").click();
                },
            },
            // next step in games
            {
                indexes: ["siguiente"],
                action: () => {
                    document.getElementById("buttonNextStep") === null
                        ? Artyom.say("Este comando no esta disponible en esta pagina")
                        : document.getElementById("buttonNextStep").click();
                },
            },
            {
                indexes: ["fin"],
                action: () => {
                    // Artyom.say("");
                    document.getElementById("buttonFinalStep").click();
                },
            },
            //change between seleccion at the site
            {
                indexes: ["juego"],
                action: () => {
                    // Artyom.say("");
                    document.getElementById("pageGame").click();
                },
            },
            {
                indexes: ["configuracion", "ir a configuracion"],
                action: () => {
                    // Artyom.say("");
                    document.getElementById("pageConfiguration").click();
                },
            },
            {
                indexes: ["juegos", "ir a juegos"],
                action: () => {
                    // Artyom.say("");
                    document.getElementById("pageGame").click();
                },
            },
        ]);
    }
}
