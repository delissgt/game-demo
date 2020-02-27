import React, {Component} from "react";
import toyCar from '../../assets/ToyCarRed.png';
import carTransformed from '../../assets/ToyCarRedTransformed.png';
import {Button, notification, Radio} from "antd";
// import {Menu, Dropdown, Button, Icon, message, Table} from "antd";
// import ModalFinishedGame from "./ModalFinishedGame";
import {GlassMagnifier} from "react-image-magnifiers";
// const {Table} = antd;

class AttributeExercise extends Component {
    // constructor
    state= {
        // buttonDisable: true,
        // rowKeys: [],
        value: 0,
        sizeRadioButton: 'large',
        answer: 4,
        qualification: 0
    };

    onChange = e => {
        this.setState({value: e.target.value});
        // this.changeButtonState(e);
    };

    // changeButtonState = (e) => {
    //     e.target.value !== 0 ? this.setState({buttonDisable: false}) : this.setState({buttonDisable: true});
    // };

    checkAnswer= ()=> {

        console.log('ESTATE check', this.state);

        if(this.state.answer === this.state.value) {
            this.setState({qualification: 100});
            notification.open({
                message: 'genial !!!',
                description: 'lo has logrado'
            })
        }else {
            notification.open({
                message: 'hoooo nooo!!!',
                description: 'los atributos de esta respuesta no describen a este objeto. Intentalo de nuevo...'
            })
        }
    };

    render() {

        console.log('thiESTATE', this.state);
        console.log('thiPROPS', this.props);

        return(
            <div>
                <h4>Selecciona los atributos del objeto. Fijate bien!!! 0.0 </h4>

                <GlassMagnifier
                    imageSrc={carTransformed}
                    largeImageSrc={toyCar}
                    style={{ width:500, height:300, display: 'inline-block' }}/>


                <div style={{ marginTop: 16 }}>
                    <Radio.Group onChange={this.onChange} value={this.state.value} size={this.state.sizeRadioButton}>
                        <Radio.Button value={1}>numero_de_llantas: 4 , color:rojo, tiene_ventanas: false</Radio.Button><br/>
                        <Radio.Button value={2}>numero_de_patas: 4 , color:verde, tiene_ventanas: false</Radio.Button><br/>
                        <Radio.Button value={3}>numero_de_llantas: 0 , color:rojo, tiene_ventanas: true</Radio.Button><br/>
                        <Radio.Button value={4}>numero_de_llantas: 4 , color:rojo, tiene_ventanas: true</Radio.Button><br/>
                    </Radio.Group>
                </div>
                <div>
                <Button
                    // disabled={this.state.buttonDisable}
                    onClick={()=> {this.checkAnswer()}}>Revisar Ejercicio</Button>
                </div>
            </div>
        );
    }


}

export default AttributeExercise;


// render()
// {
//     const handleMenuClick = (e) => {
//         message.info('Click en menu item');
//         console.log('eeee', e);
//     };

    //clase
//     const menu = (
//         <Menu onClick={handleMenuClick}>
//             <Menu.Item key="1">
//                 <Icon type="user"/>
//                 Item primero
//             </Menu.Item>
//             <Menu.Item key="2">
//                 <Icon type="user"/>
//                 Item dos
//             </Menu.Item>
//             <Menu.Item key="3">
//                 <Icon type="user"/>
//                 Item tres
//             </Menu.Item>
//         </Menu>
//     );
//
//     return(
//         <div>
//             {/*, position: "absolute", zIndex: 1*/}
//             <div style={{height: 300, width: 300}}>
//                 <img src={classCat} style={{width: 300}}/>
//             </div>
//
//             <div style={{position: "absolute", zIndex:2}}>
//                 <Dropdown overlay={menu}>
//                     <Button>Boton1<Icon type="down"/></Button>
//                 </Dropdown>
//                 <Dropdown overlay={menu}>
//                     <Button>Boton2<Icon type="down"/></Button>
//                 </Dropdown>
//                 <Dropdown overlay={menu}>
//                     <Button>Boton3<Icon type="down"/></Button>
//                 </Dropdown>
//                 <Dropdown overlay={menu}>
//                     <Button>Boton4<Icon type="down"/></Button>
//                 </Dropdown>
//             </div>
//
//
//         </div>
//     );
// }