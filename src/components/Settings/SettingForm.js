import React, {Component} from "react";
import {Form, Radio} from 'antd';


class settingForm extends Component {
    state = {
      size: 'default',
    };

    handleSizeChange = e => {
      this.setState({size: e.target.value});
        console.log('handle size state', this.state.size);
    };

    render(){
        const { size } = this.state;
            console.log('render', size);
        return(
            <div>
                <Form
                    labelCol={{ span: 4, }}
                    wrapperCol={{ span: 14, }}
                    layout="horizontal"
                    size={size}
                >
                    <Form.Item label="Form Size" name="size">
                        <Radio.Group value={size} size={size} onChange={this.handleSizeChange}>
                            <Radio.Button value="small">Small</Radio.Button>
                            <Radio.Button value="default">Middle</Radio.Button>
                            <Radio.Button value="large">Large</Radio.Button>
                        </Radio.Group>
                    </Form.Item>
                </Form>
            </div>
        )}
}

export default settingForm;