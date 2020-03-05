import React, {Component} from "react";
import toyCar from '../../assets/attributes/ToyCarRed.png';
import carTransformed from '../../assets/attributes/ToyCarRedTransformed.png';
import {Button, notification, Radio} from "antd";
import {GlassMagnifier} from "react-image-magnifiers";

class AttributeExercise extends Component {
    // constructor
    state= {
        value: 0,
        sizeRadioButton: 'large',
        answer: 4,
        qualification: 0
    };

    onChange = e => {
        this.setState({value: e.target.value});
    };

    checkAnswer= ()=> {

        if(this.state.answer === this.state.value) {
            this.setState({qualification: 100});
            notification.success({
                message: 'GENIAL !!!',
                description: 'reto superado'
            })
        }else {
            notification.error({
                message: 'ho nooo! Intentalo de nuevo...',
                description: 'estos atributos no describen bien al objeto'
            })
        }
    };

    render() {

        return(
            <div>
                <h2>Selecciona los atributos que describan mejor al objeto. </h2>

                <GlassMagnifier
                    imageSrc={carTransformed}
                    largeImageSrc={toyCar}
                    style={{ width:500, height:300, display: 'inline-block' }}/>

                <div style={{ marginTop: 16 }}>
                    <Radio.Group onChange={this.onChange} value={this.state.value} size={this.state.sizeRadioButton}>
                        <Radio value={1}>numero_de_llantas = 4; color = "rojo"; tiene_ventanas = false;</Radio><br/>
                        <Radio value={2}>numero_de_patas = 4; color = "verde"; tiene_ventanas = false;</Radio><br/>
                        <Radio value={3}>numero_de_llantas = 0; color = "rojo"; tiene_ventanas = true;</Radio><br/>
                        <Radio value={4}>numero_de_llantas = 4; color = "rojo"; tiene_ventanas = true;</Radio><br/>
                    </Radio.Group>
                </div>
                <div style={{ paddingTop: "2%" }}>
                <Button type="primary" ghost
                    onClick={()=> {this.checkAnswer()}}>Revisar Ejercicio</Button>
                </div>
            </div>
        );
    }


}

export default AttributeExercise;
