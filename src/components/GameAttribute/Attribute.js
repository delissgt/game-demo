import React, {Component} from "react";
import {Steps, Button, message} from "antd";
import definition from '../../assets/game1Attributes.png';
import example from '../../assets/game1AttributesExample.png';

// import AttributeExerciseBlockly from './AttributeExerciseBlockly';
import AttributeExercise from "./AttributeExercise";
import AttributeTest from "./AttributeTest";
import '../steps.css';
import {Link} from 'react-router-dom';


const {Step} = Steps;


const steps=[
    {
        title: 'Introducción',
        content: <img src={definition}/> ,
    },
    {
        title: 'Ejemplo',
        content: <img src={example}/>,
    },
    {
        title: 'Ejercicio',
        content: <AttributeExercise/>,
    },
    {
        title: 'Test',
        content: <AttributeTest/>,
    }
];

class Attribute extends Component {

    constructor(props) {
        super(props);
        this.state = {
            current: 0
        }
    }

    next() {
        const current = this.state.current + 1;
        this.setState({current});
    }

    prev() {
        const current = this.state.current - 1;
        this.setState({current});
    }


    render() {

        const { current } = this.state;

        return(
            <div style={{ 'padding': 20 }}>
                Jueguito 1
                <Steps current={current}>
                    {steps.map(item => ( <Step
                            key={item.title}
                            title={item.title}
                        />
                    ))}
                </Steps>
                {/*<div className="steps-content">{steps[current].content}</div>*/}
                <div className="steps-content" style={{ 'padding': 20 }}>{steps[current].content}</div>

                <div className="steps-action">

                    {current > 0 && (
                        <Button style={{ marginRight: 16 }} onClick={()=> this.prev()}>
                            Anterior
                        </Button>
                    )}

                    {current < steps.length - 1 && (
                        <Button type="primary" onClick={() => this.next()}>Siguiente</Button>
                    )}

                    {current === steps.length - 1 && (
                        <Link to={'/games'}>
                        <Button type="primary"
                                onClick={() => message.success('Nivel Completado!!')}>
                            Al fin !!!
                        </Button>
                        </Link>
                    )}
                </div>
            </div>
        )
    }

}

export default Attribute;
