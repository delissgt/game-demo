import React, {Component} from "react";

// import car from '../assets/ToyCarRed.png';
import bird from '../../assets/bird.png';
import {Table, Divider, Tag, Input} from 'antd';

// import {Radio} from "antd";
// class Game1AttributeTest extends Component {
//     state = {
//       value: 1
//     };
//
//     onChange = e => {
//       console.log('radio checked', e.target.value);
//       this.setState({ value: e.target.value });
//     };
//
//     render() {
//         const radioStyle = {
//           display: 'block',
//           height: '30px',
//           lineHeight: '30px'
//         };
//
//         return(
//             <div>
//                 <span style={radioStyle}>¿Qué es un atributo?</span>
//                 <Radio.Group onChange={this.onChange}>
//                     <Radio value={1} style={radioStyle}>Son las características de un objeto</Radio>
//                     <Radio value={2} style={radioStyle}>Son las cosas que puede hacer un objeto</Radio>
//                     <Radio value={3} style={radioStyle}>Es una forma de programar</Radio>
//                     <Radio value={4} style={radioStyle}>No lo se</Radio>
//                 </Radio.Group>
//             </div>
//         );
//     }
// }
//
// export default Game1AttributeTest;


class AttributeTest extends Component {
    state = {
        rotate: 90,
        rotateY: 90
    };

    transformation(index, event) {
        console.log('transformation');
        console.log('index:', index.key);
        console.log('vaevevev', event.target.value);
        this.setState({ [index.key] : event.target.value });
    }


    columns = [
        {
            title: 'Atributo',
            dataIndex: 'attribute',
            key: 'attribute'
        },
        {
            title: 'Valor',
            dataIndex: 'values',
            key: 'values',
            render: (values, index) => <Input
                defaultValue={values}
                onChange={(event) => {this.transformation(index, event)}} />

        }
    ];

    data = [
        {
            key: 'rotate',
            attribute: 'rotación',
            // values: '0'
            values: this.state.rotate
        },
        {
            key: 'rotateY',
            attribute: 'rotación en Y',
            // values: '0'
            values: this.state.rotateY
        }
    ];


    render() {
        console.log('1111111111');
        return(
            <div>
                <div style={{width: '100%' }}>
                    <h4>Modifica los atributos y descubre que objeto es... </h4>
                </div>
            <div style={{display: "inline-flex"}}>

                <div style={{ margin: '1%'}}>
                    {/*<img src={car} style={{width: 300, height:300, transform: 'rotate(90deg)' }}/>*/}
                    <img src={bird}
                         style={{
                             width: 300, height:300,
                             transform: 'rotate('+this.state.rotate+ 'deg) rotateY('+this.state.rotateY+'deg)' }}/>
                </div>
                <div style={{ margin: '1%'}}>
                    {/*table content*/}
                    <Table columns={this.columns} dataSource={this.data} />
                </div>

            </div>
            </div>
        );
    }
}

export default AttributeTest;