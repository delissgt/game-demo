import React, {Component} from "react";
// import {} from "react-blockly";  NO SE USA

import BlocklyComponent, {Block, Value, Field, Shadow} from "./Blocky";
import './blocks/customblocks'
import {Button} from "antd";

class AttributeExercise extends Component {
    render() {
        const checkAnswers = () => {
            console.log('Revisar respuestas..')
        };

        return(
            <div>
                <div>
                <h1>Blockly escribir algunas instrucciones :P </h1>
                    <Button type="primary" onClick={()=> {checkAnswers()}}>Revisar Respuestas</Button>
                </div>
                <div>
                <BlocklyComponent
                    style={{padding: 30}}
                    ref={e => this.simpleWorkspace = e}
                    readOnly={false}
                    move={{ scrollbars: true, drag: true, wheel: true }}
                    sounds={true}
                    trashcan={false}

                    initialXml={`
                    <xml>
<!--                        <Block type="controls_ifelse"></Block>-->
<!--                        <Block type="logic_compare" x="50" y ="100"/>-->
<!--                        <Block type="logic_operation" x="0" y ="0"/>-->
<!--                        <Block type="controls_repeat_ext" x="50" y ="100"/>-->

                        <Block type="bird_block" x="100" y="200"/>
                        <Block type="cat_block" x="200" y="100" >
                        </Block>
                   
                        <Block type="duck_attribute_1" x="200" y="200" />
                        <Block type="duck_attribute_2" x="210" y="210"/>
                        <Block type="cat_attribute_1" x="220" y="220" />
                        <Block type="cat_attribute_2" x="230" y="230" />
                        
                        <Block type="bird_picture" x="10" y="0" />
                        <Block type="cat_picture" x="20" y="0" />
                    </xml>
                `}
                >

                    {/*<Block type="logic_compare" x="50" y ="100"/>*/}

                </BlocklyComponent>
                </div>

            </div>
        )
    }


    // return ([argument0 + '.length', Blockly.JavaScript.ORDER_MEMBER]);

}

export default AttributeExercise;