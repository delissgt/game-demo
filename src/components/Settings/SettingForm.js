import React, {Component} from "react";
import {Button, Divider, Form, Radio, Input, Tabs} from 'antd';
import {SmileOutlined, UnlockOutlined} from "@ant-design/icons";

import ChangePassword from "./Tabs/ChangePassword";
import ChangeComponentsSize from "./Tabs/ChangeComponentsSize";

const  {TabPane} = Tabs;

class settingForm extends Component {
    state = {
      size: 'default',
    };


    render(){
        const { size } = this.state;
            // console.log('render', size);
        return(
            <div>
                <Tabs defaultActiveKey="1">
                    <TabPane
                        tab={

                            <span>
                            <SmileOutlined />
                            Tamaño
                            </span>
                        }
                        key="1"
                    >

                        <ChangeComponentsSize/>

                    </TabPane>
                    <TabPane
                        tab={
                            <span>
                                <UnlockOutlined />
                                Contraseña
                            </span>
                        }
                        key="2"
                    >
                        <ChangePassword/>

                    </TabPane>
                </Tabs>
                {/*    <Form.Item*/}
                {/*        name="password"*/}
                {/*        label="Contraseña"*/}
                {/*        rules={[*/}
                {/*            // {*/}
                {/*            //     required: true,*/}
                {/*            //     message: "ingresa tu nueva contraseña",*/}
                {/*            // },*/}
                {/*            () => ({*/}
                {/*                validator(rule, value) {*/}
                {/*                    if (typeof(value) !== "undefined") {*/}
                {/*                        if (value.length >= 8){*/}
                {/*                            return Promise.resolve();*/}
                {/*                        }*/}
                {/*                        return Promise.reject('La contreseña debe ser de minimo 8 caracteres');*/}
                {/*                    }*/}
                {/*                },*/}
                {/*            }),*/}
                {/*        ]}*/}
                {/*        hasFeedback*/}
                {/*    >*/}
                {/*        <Input.Password/>*/}
                {/*    </Form.Item>*/}
                {/*    <Form.Item*/}
                {/*        name="confirm"*/}
                {/*        label="Repite la contraseña"*/}
                {/*        dependencies={["password"]}*/}
                {/*        hasFeedback*/}
                {/*        rules={[*/}
                {/*            // {*/}
                {/*            //     required: true,*/}
                {/*            //     message: "Este campo es necesario para cambiar la contraseña"*/}
                {/*            // },*/}
                {/*            ({getFieldValue}) => ({*/}
                {/*                validator(rule, value) {*/}
                {/*                    console.log('getValues cont', getFieldValue('password'));*/}
                {/*                    console.log('values REp Cont', value);*/}

                {/*                    if (getFieldValue('password') !== "undefined" && value === 'undefined')  {*/}
                {/*                        // if (getFieldValue('password').length !== 0 && value.length === 0){*/}
                {/*                            return Promise.resolve();*/}
                {/*                        // }*/}
                {/*                    }*/}
                {/*                    return Promise.reject('Este campo es nesario para cambiar la contraseña');*/}
                {/*                },*/}
                {/*            }),*/}

                {/*            ({getFieldValue}) => ({*/}
                {/*                validator(rule, value) {*/}
                {/*                    if (!value || getFieldValue('password') === value) {*/}
                {/*                        return Promise.resolve();*/}
                {/*                    }*/}
                {/*                    return Promise.reject('Las contraseñas que ingresaste no coinciden');*/}
                {/*                },*/}
                {/*            }),*/}
                {/*        ]}*/}
                {/*    >*/}
                {/*        <Input.Password/>*/}
                {/*    </Form.Item>*/}

                {/*    <Divider/>*/}

                {/*    <Form.Item>*/}
                {/*        <Button type="primary" htmlType="submit" key="submit" onClick={this.handleChangeValues}>*/}
                {/*            Guardar Cambios*/}
                {/*        </Button>*/}
                {/*    </Form.Item>*/}
                {/*</Form>*/}
            </div>
        )}
}

export default settingForm;