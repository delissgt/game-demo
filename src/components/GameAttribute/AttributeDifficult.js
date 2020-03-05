import React, {Component} from "react";
import {Radio, Card, Button, notification} from "antd";

import AttributeJava1 from '../../assets/attributes/AttributesJava1.png';
import AttributeJava2 from '../../assets/attributes/AttributesJava2.png';
import AttributeJava3 from '../../assets/attributes/AttributesJava3.png';

import AttributeJavaScript1 from '../../assets/attributes/AttributesJs1.png';
import AttributeJavaScript2 from '../../assets/attributes/AttributesJs2.png';
import AttributeJavaScript3 from '../../assets/attributes/AttributesJs3.png';

import AttributePython1 from '../../assets/attributes/AttributesPython1.png';
import AttributePython2 from '../../assets/attributes/AttributesPython2.png';
import AttributePython3 from '../../assets/attributes/AttributesPython3.png';

class AttributeDifficult extends Component {
    state = {
        value: 1,
        qualification: 0,
        code1: AttributeJava1,
        code2: AttributeJava2,
        code3: AttributeJava3,

    };

    onChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,

        });
    };

    onChangeCode = e => {
        if (e.target.value === 'a'){
            this.setState({code1: AttributeJava1, code2: AttributeJava2, code3: AttributeJava3});
        }else if (e.target.value === 'b'){
            this.setState({code1: AttributeJavaScript1, code2: AttributeJavaScript2, code3: AttributeJavaScript3});
        }else {
            this.setState({code1: AttributePython1, code2: AttributePython2, code3: AttributePython3});
        }
    };

    checkAnswer = () => {
      if (this.state.value === 3){
          this.setState({qualification: 100});
          notification.success({
              message: 'GENIAL',
              description: 'reto superado!'
          })
      }else{
      notification.error({
          message: 'ho nooo!, Intentalo de nuevo...',
          description: 'este codigo tiene un error'
      })
      }

    };

    render() {
        // console.log('che', this.state);
        return (
            <div>
                <div>
                <h2>Aquí hay solo una clase bien definida, elige la correcta.</h2>
                 <h4>Nota: Puedes elegir el lenguaje que estas aprendiendo</h4>
                </div>
                <div>
                    <Radio.Group defaultValue="a" buttonStyle="solid" onChange={this.onChangeCode}>
                        <Radio.Button value="a">Java</Radio.Button>
                        <Radio.Button value="b">JavaScript</Radio.Button>
                        <Radio.Button value="c">Python</Radio.Button>
                    </Radio.Group>
                </div>
            <Radio.Group onChange={this.onChange} value={this.state.value}>
                <Radio value={1} style={{ display: "inline-flex"}} >
                    <Card style={{ width: "80%" }} cover={<img alt="exa" src={this.state.code1}/>} />
                </Radio><br/>
                <Radio value={2} style={{ display: "inline-flex"}}>
                    <Card style={{ width: "80%" }} cover={<img alt="exa" src={this.state.code2}/>} />
                </Radio>
                <Radio value={3} style={{ display: "inline-flex"}}>
                    <Card style={{ width: "80%" }} cover={<img alt="exa" src={this.state.code3}/>} />
                </Radio>
            </Radio.Group>
                <div style={{ paddingTop: "2%" }} >
                    <Button type="primary" ghost
                        onClick={()=> {this.checkAnswer()}}>Revisar Ejercicio
                    </Button>
                </div>
            </div>
        );
    }
}

export default AttributeDifficult;

// ReactDOM.render(<App />, mountNode);