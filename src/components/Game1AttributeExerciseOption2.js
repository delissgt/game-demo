import React, {Component} from "react";
import toyCar from '../assets/ToyCarRed.png';
import carTransformed from '../assets/ToyCarRedTransformed.png';
import {Button, Table, notification} from "antd";
// import {Menu, Dropdown, Button, Icon, message, Table} from "antd";
// import ModalFinishedGame from "./ModalFinishedGame";
import {GlassMagnifier} from "react-image-magnifiers";
// const {Table} = antd;

class Game1AttributeExerciseOption2 extends Component {
    // constructor
    state= {
        buttonDisable: true,
        rowKeys: [],
    };

    render(props) {
        console.log('props de GAmq1', props);

        const columns = [
            {
                title: 'Attributos',
                dataIndex: 'attribute',
            },
            {
                title: 'Valor',
                dataIndex: 'value',
            }
        ];

        const data = [
            {
                key:'1',
                attribute: 'numero_de_llantas',
                value: '4'
            },
            {
                key:'2',
                attribute: 'color',
                value: 'rojo'
            },
            {
                key:'3',
                attribute: 'numero_de_puertas',
                value: '2'
            },
            {
                key:'4',
                attribute: 'tiene_alas',
                value: 'true'
            }
        ];

        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                console.log('selectRowKeys:', selectedRowKeys, 'selectedRows:', selectedRows);
                this.setState({rowKeys: selectedRowKeys});

                changeButtonState(selectedRowKeys);
            },
            // getCheckboxProps: record => ({
            //     disable: record.name === 'Disable User',
            //     name: record.name,
            // }),
        };

        const changeButtonState = (rowKeys)=> {
            rowKeys.length > 0 ? this.setState({buttonDisable: false}) : this.setState({buttonDisable: true});
        };

        const checkAnswer= ()=> {
            let grade = true;

            const result = this.state.rowKeys.map(rk => {
                if (rk === "4") {grade= false}
                return console.log('grade', grade);
            });


            console.log('result', result);

            if(grade === true) {
                notification.open({
                    message: 'genial !!!',
                    description: 'lo has logrado'
                })
            }else {
                notification.open({
                    message: 'hoooo nooo!!!',
                    description: 'los autos aun no vuelan'
                })
            }
        };


        return(
            <div>
                <h4>Selecciona los atributos del objeto. Fijate bien!!! 0.0 </h4>

                {/*<img src={carTransformed} style={{width: 300, height: 200}}/>*/}

                <GlassMagnifier
                    imageSrc={carTransformed}
                    largeImageSrc={toyCar}
                    style={{ width:500, height:300, display: 'inline-block' }}/>

                <Table rowSelection={rowSelection} columns={columns} dataSource={data}/>
                <Button disabled={this.state.buttonDisable} onClick={()=> {checkAnswer()}}>Revisar Ejercicio</Button>
            </div>
        );
    }


}

export default Game1AttributeExerciseOption2;


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