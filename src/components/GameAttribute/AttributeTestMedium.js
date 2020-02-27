import React, {Component} from 'react';
import {Button, Transfer} from "antd";



const mockDataCustom = [
    {key: 1, title: "Color_de_plumaje: rojo", chosen: false},
    {key: 2, title: "Color_de_pelaje: naranja/amarillo", chosen: false},
    {key: 3, title: "Numero_de_llantas: 4", chosen: false},
    {key: 4, title: "especie: animal", chosen: false},
    {key: 5, title: "familia: felino", chosen: false},
    {key: 6, title: "modelo: BMW-i8", chosen: false},
    {key: 7, title: "vertebrado: true", chosen: false},
    {key: 8, title: "Numero_de_patas: 4", chosen: false},
    {key: 9, title: "Numero_Placa: AB-2W-OO", chosen: false},
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

        console.log('targetKeys: ', nextTargetKeys);
        console.log('direction: ', direction);
        console.log('moveKeys: ', moveKeys);
    };

    handleSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
        this.setState({ selectedKeys: [...sourceSelectedKeys, ...targetSelectedKeys] });

        console.log('sourceSelectedKeys: ', sourceSelectedKeys);
        console.log('targetSelectedKeys: ', targetSelectedKeys);
    };

    handleScroll = (direction, e) => {
        console.log('direction:', direction);
        console.log('target:', e.target);
    };


    componentDidMount() {
        this.getMock();
    };

    getMock = () => {
        const targetKeys = [];
        const mockData = [];
        const dataCustom = [
            {key: 1, title: "Color_de_plumaje: rojo", chosen: false},
            {key: 2, title: "Color_de_pelaje: naranja/amarillo", chosen: false},
            {key: 3, title: "Numero_de_llantas: 4", chosen: false},
            {key: 4, title: "especie: animal", chosen: false},
            {key: 5, title: "familia: felino", chosen: false},
            {key: 6, title: "modelo: BMW-i8", chosen: false},
            {key: 7, title: "vertebrado: true", chosen: false},
            {key: 8, title: "Numero_de_patas: 4", chosen: false},
            {key: 9, title: "Numero_Placa: AB-2W-OO", chosen: false}
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
        console.log('check check');
        console.log('check Estado', this.state.targetKeys);
        console.log('check EstadoTYPEEE', typeof (this.state.targetKeys));
        const inputAnswers = this.state.targetKeys;
        let qualification = 0;
        inputAnswers.map(a => {
            console.log(a);
            console.log(a);
            // eslint-disable-next-line no-unused-vars
            const result = badAnswers.filter(ba =>  {
                // eslint-disable-next-line no-unused-expressions
                ba === parseInt(a) ? qualification+= 20 : ''
            });
        });

        this.setState({qualification});

        if (inputAnswers.length < 5){
            console.log('parece que faltan atributos')
        } else if (inputAnswers.length > 5) {
            console.log('pueden hay halla algunos atributos demás');
        }else{
            if(qualification < 100){
                console.log('estas seguro que son los atributos correctos??');
            }else{
                console.log('woooo lo logre');
            }
        }

    };

    render(){
        const { targetKeys, selectedKeys } = this.state;

        return(
            <div>
                instrucciones aquí
                <Transfer
                    showSelectAll={false}
                    listStyle={{ display: 'inline-table', textAlign: 'left' }}
                    dataSource={mockData}
                    titles={['Atributos', 'Clase Gato']}
                    targetKeys={targetKeys}
                    selectedKeys={selectedKeys}
                    onChange={this.handleChange}
                    onSelectChange={this.handleSelectChange}
                    onScroll={this.handleScroll}
                    render={item => item.title}
                />
                <div style={{ paddingTop: "2%" }} >
                    <Button
                        onClick={()=> {this.checkAnswer()}}>Revisar Ejercicio
                    </Button>
                </div>
            </div>
        )
    }


}

export default AttributeTestMedium;