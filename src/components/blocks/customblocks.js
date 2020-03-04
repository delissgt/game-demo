import * as Blockly from 'blockly/core';
// import BlocklyReactField from '../fields/BlocklyReactField';

// import begood from  '../../assets/begood.png';
import bird from '../../assets/attributes/bird.png';
import cat from '../../assets/attributes/cat.png';

// Class Animal Bird
Blockly.Blocks['bird_block'] = {
    init: function () {

        const optionsLegs = [ ['0', '0'], ['2', '2'], ['4', '4'] ];

        this.setNextStatement(true, 'Action');
        this.setPreviousStatement(false);
        this.appendDummyInput()
            .appendField('Ave');

        this.appendValueInput('IMAGEN')
            .appendField('imagen:');
        this.validatorImage('IMAGE');


        // this.appendValueInput(new Blockly.InputConnection(null, this.validatorImage));
            // .appendField(new Blockly.FieldTextInput(null, this.validatorImage),'IMAGE');

        this.appendStatementInput('ATRIBUTOS')
            .appendField('atributos:');
        this.setColour(280);
        this.setTooltip('Return number of letters bla bla bla');
        this.setHelpUrl('http://facebook.com');

        this.appendDummyInput('PATAS')
            .appendField('patas:')
            .appendField(new Blockly.FieldDropdown(optionsLegs, this.validator), 'MODE');
    },

    validator: function (valor) {
        console.log('number of leg', valor);
        console.log('rererChildren', this.getSourceBlock().childBlocks_);
        // console.log('VAAAALUE', this.getFieldValue());
        // console.log('rerer', this.getSourceBlock().getChildren());
        return valor;
    },

    validatorImage: function (valueImage) {
        console.log('imaima', valueImage);
        // console.log(this.getSourceBlock().getChildren());
        // console.log('SOURCE BLOCK',  this.getSourceBlock());
        // console.log('SCOPE',  getScope());
        // console.log('SOURCE CODE',  this.getSourceCode() );
        // console.log('SOURCE',  this.getSource() );
    }

};

// Class Animal Cat
Blockly.Blocks['cat_block'] = {
    init: function () {

        this.state = {
            catLegs: 5
        };

        const optionsLegs = [ ['0', '0'], ['2', '2'], ['4', '4'] ];

        this.setNextStatement(true);
        this.setPreviousStatement(false);
        this.appendDummyInput()
            .appendField('Gato');

        this.appendValueInput('IMAGEN')
            .appendField('imagen:');

        this.appendStatementInput('ATRIBUTOS')
            .appendField('atributos:');
        this.setColour(280);
        this.setTooltip('Return number of letters bla bla bla');
        this.setHelpUrl('http://facebook.com');

        this.appendDummyInput('PATAS')
            .appendField('patas:')
            .appendField(new Blockly.FieldDropdown(optionsLegs, this.validator), 'MODE');
    },

    validator: function (numLegs) {
        console.log('number of leg choosen', numLegs);
        return (numLegs);
        // this.state.catLegs = numLegs;
        // console.log('catL', this.state.catLegs);
        // console.log('estate custom', this.state.catLegs);
        // return (this.setState({'legsCat': numLegs}));
    }

};

// Attributes Animal
Blockly.Blocks['duck_attribute_1'] = {
    init: function () {
        this.setColour(150);
        this.setNextStatement(true);
        this.setPreviousStatement(true);
        this.appendDummyInput()
            .appendField('plumas')
    }
};

Blockly.Blocks['duck_attribute_2'] = {
    init: function () {
        this.setColour(150);
        this.setNextStatement(true);
        this.setPreviousStatement(true);
        this.appendDummyInput()
            .appendField('pico')
    }
};

Blockly.Blocks['cat_attribute_1'] = {
    init: function () {
        this.setColour(150);
        this.setNextStatement(true);
        this.setPreviousStatement(true);
        this.appendDummyInput()
            .appendField('pelaje')
    }
};

Blockly.Blocks['cat_attribute_2'] = {
    init: function () {
        this.setColour(150);
        this.setNextStatement(true);
        this.setPreviousStatement(true);
        this.appendDummyInput()
            .appendField('bigotes')
    }
};


// Bird picture
Blockly.Blocks['bird_picture'] = {
    init: function () {
        this.setColour(210);
        this.setOutput(true);
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(bird, 100, 100, "*"));
    }
};

// Cat picture
Blockly.Blocks['cat_picture'] = {
    init: function () {
        this.setColour(210);
        this.setOutput(true);
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(cat, 100, 100, "*"));
    }
};

// Blockly.JavaScript['text_indexOf'] = function (block) {
//     var operator = block.getFieldValue('END')
// };


// this.setOutput(true, 'Number');
// this.appendValueInput('VALUE')
//     .setCheck('String')
//     .appendField('length off deliss');
// let validator = function (newValue) {
//   console.log('NEW VALUE', newValue);
//   return newValue % 2;
// };


// this.appendStatementInput('LEGS')
//     .appendField('legs');
// .appendField(new Blockly.FieldNumber);
// .appendField(new Blockly.FieldNumber('1', this.validator2));
// let field = new Blockly.FieldNumber('default');
// field.setValidator(validator);
//
// this.appendDummyInput().appendField(field);


// Blockly.Blocks['cat_attribute_1'] = {
//   init: function () {
//       this.appendValueInput('DUCKVALUE')
//           .appendField('Pati')
//           .appendField('hello');
//
//       this.setColour(20);
//       this.setTooltip('Return number of letters bla bla bla');
//       this.setHelpUrl('http://facebook.com');
//
//   }
// };



// Blockly.Blocks['test_react_field'] = {
//   init: function() {
//     this.appendDummyInput()
//         .appendField('custom field')
//         .appendField(new BlocklyReactField('Click me'), 'FIELD');
//     this.setStyle('loop_blocks');
//   }
// };