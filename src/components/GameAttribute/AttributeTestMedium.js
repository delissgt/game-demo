import React, {Component} from 'react';
import {Button, Transfer, notification} from "antd";
import classes from './style.css';

const mockDataCustom = [
    {key: 1, title: "color_plumaje = \"rojo\"", chosen: false},
    {key: 2, title: "color_pelaje = \"naranja\"", chosen: false},
    {key: 3, title: "numero_llantas = 4", chosen: false},
    {key: 4, title: "especie = \"animal\"", chosen: false},
    {key: 5, title: "familia = \"felino\"", chosen: false},
    {key: 6, title: "modelo = \"BMW-i8\"", chosen: false},
    {key: 7, title: "vertebrado = true", chosen: false},
    {key: 8, title: "numero_patas = 4", chosen: false},
    {key: 9, title: "numero_Placa = \"AB-2W-OO\"", chosen: false},
];

const mockData = [];
for (let i = 0; i < 9; i++) {
    mockData.push({
        // key: i.toString(),
        // title: `content${i + 1}`
        key: mockDataCustom[i].key.toString(),
        title: mockDataCustom[i].title
    });
}

const oriTargetKeys = mockData.filter(item => +item.key % 3 > 1).map(item => item.key);

class AttributeTestMedium extends Component{
    state = {
        targetKeys: oriTargetKeys,
        selectedKeys: [],
        qualification: 0
    };

    handleChange = (nextTargetKeys, direction, moveKeys) => {
        this.setState({ targetKeys: nextTargetKeys });
    };

    handleSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
        this.setState({ selectedKeys: [...sourceSelectedKeys, ...targetSelectedKeys] });
    };

    handleScroll = (direction, e) => {
        console.log('direction:', direction, 'target', e.target);
    };


    componentDidMount() {
        this.getMock();
    };

    getMock = () => {
        const targetKeys = [];
        const mockData = [];
        const dataCustom = [
            {key: 1, title: "color_plumaje = \"rojo\"", chosen: false},
            {key: 2, title: "color_pelaje = \"naranja\"", chosen: false},
            {key: 3, title: "numero_llantas = 4", chosen: false},
            {key: 4, title: "especie = \"animal\"", chosen: false},
            {key: 5, title: "familia = \"felino\"", chosen: false},
            {key: 6, title: "modelo = \"BMW-i8\"", chosen: false},
            {key: 7, title: "vertebrado = true", chosen: false},
            {key: 8, title: "numero_patas = 4", chosen: false},
            {key: 9, title: "numero_Placa = \"AB-2W-OO\"", chosen: false}
        ];

        for (let i = 0; i < 9; i++) {
            const data = {
                // key: i.toString(),
                // title: `content${i + 1}`,
                key:  dataCustom[i].key.toString(),
                title: dataCustom[i].title,
                chosen: Math.random() * 2 > 1,
            };

            if (data.chosen) {
                targetKeys.push(data.key);
            }
            mockData.push(data);
        }

        this.setState({ mockData, targetKeys });

    };

    handleChange = (targetKeys, direction, moveKeys) => {
        console.log(targetKeys, direction, moveKeys);
        this.setState({ targetKeys });
    };

    //className="custom-item"
    renderItem = item => {
        const customLabel = (
            <span style={{ marginTop: 5, color: "blue"}}>
        {item.title}
       </span>
        );

        return {
            label: customLabel, // for displayed item
            value: item.title, // for title and filter matching
        };
    };

    checkAnswer = () => {
        const badAnswers=[2, 4, 5, 7, 8];
        const inputAnswers = this.state.targetKeys;
        let qualification = 0;
        // eslint-disable-next-line array-callback-return
        inputAnswers.map(a => {
            // eslint-disable-next-line no-unused-vars,array-callback-return
            const result = badAnswers.filter(ba =>  {
                // eslint-disable-next-line no-unused-expressions
                ba === parseInt(a) ? qualification+= 20 : ''
            });
        });

        this.setState({qualification});

        if (inputAnswers.length < 5){
            notification.warn({
                message: 'Faltan atributos',
                description: 'Intentalo de nuevo',
            })
        } else if (inputAnswers.length > 5) {
            notification.error({
                message: 'ho noo! ',
                description: 'Hay atributos que no describen al objeto',
            })
        }else{
            if(qualification < 100){
                notification.warn({
                    message: 'Estas seguro???',
                    description: 'Hay atributos que no describen al objeto',
                })
            }else{
                notification.success({
                    message: 'GENIAL !!!',
                    description: 'reto superado!',
                })
            }
        }

    };

    render(){
        const { targetKeys, selectedKeys } = this.state;

        return(
            <div>
                <h2>Mueve los atributos que describan a la clase</h2>
                <Transfer
                    className={classes.antTransferListHeaderSelected}
                    showSelectAll={false}
                    listStyle={{ display: 'inline-table', textAlign: 'left' }}
                    dataSource={mockData}
                    titles={['Atributos', 'Clase Gato']}
                    operations={['Agregar', 'Quitar']}
                    targetKeys={targetKeys}
                    selectedKeys={selectedKeys}
                    onChange={this.handleChange}
                    onSelectChange={this.handleSelectChange}
                    onScroll={this.handleScroll}
                    render={item => item.title}
                />
                <div style={{ paddingTop: "2%" }} >
                    <Button type="primary" ghost
                        onClick={()=> {this.checkAnswer()}}>Revisar Ejercicio
                    </Button>
                </div>
            </div>
        )
    }

}

export default AttributeTestMedium;