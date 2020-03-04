import React, {Component} from "react";

import bird from '../../assets/attributes/bird.png';
import {Table, Input, Button, notification} from 'antd';


class AttributeTest extends Component {
    state = {
        rotate: 90,
        rotateY: 90,
        qualification: 0
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
            attribute: 'rotación en eje Y',
            // values: '0'
            values: this.state.rotateY
        }
    ];

    checkAnswer = () => {
        console.log('click!!');
        console.log('checkAnswer', this.state);
        if (this.state.rotate !== 90 || this.state.rotateY !== 90 ){
            console.log('Es check', this.state);
            if (this.state.rotate === "0" && this.state.rotateY === "9"){
                this.setState({qualification: 100});
                notification.success({
                    message: 'GENIAL !!!',
                    description: 'lo has logrado'
                })

            }else{
                notification.info({
                    message: 'Casi lo tienes',
                    description: 'asegurate de colocar bien la imagen'
                })
            }

        }else{
            notification.warn({
                message: 'Intentalo...',
                description: 'si modificas los valores, se modifica el objeto'
            })
        }

    };


    render() {
        console.log('test props', this.props);
        console.log('test state', this.state);
        return(
            <div>
                <div style={{width: '100%' }}>
                    <h2>Modifica los atributos y descubre que objeto es  </h2>
                </div>
            <div style={{display: "inline-flex"}}>

                <div style={{ margin: '1%'}}>
                    <img alt='secret-character' src={bird}
                         style={{
                             width: 300, height:300,
                             transform: 'rotate('+this.state.rotate+ 'deg) rotateY('+this.state.rotateY+'deg)' }}/>
                </div>
                <div style={{ margin: '1%'}}>
                    {/*table content*/}
                    <Table columns={this.columns} dataSource={this.data} />
                </div>

            </div>
                <div style={{ paddingTop: "2%" }}>
                <Button type="primary" ghost
                    // disabled={this.state.buttonDisable}
                    onClick={()=> {this.checkAnswer()}}>Revisar Ejercicio</Button>
                </div>
            </div>
        );
    }
}

export default AttributeTest;