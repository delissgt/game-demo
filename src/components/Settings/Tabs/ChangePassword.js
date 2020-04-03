import React, {Component} from "react";
import {Form, PageHeader, Button, Input} from 'antd';
import {studentPassword} from "../../../utils/HttpRequests";
import {withRouter} from "react-router-dom";


class ChangePassword extends Component {

    onFinish = values => {
        studentPassword(values, this.props['history']);
    };

    render() {
        return(
            <div>
                <PageHeader title="Cambia tu contraseña"/>
               <Form
                   onFinish={this.onFinish}
               >
                   <Form.Item
                       name="password"
                       label="Contraseña"
                       rules={[
                           {
                               required: true,
                               message: 'Ingresa tu contraseña!',
                           },
                           () => ({
                               validator(rule, value) {
                                   if (typeof(value) !== "undefined") {
                                       if (value.length >= 8){
                                           return Promise.resolve();
                                       }
                                   }
                                   return Promise.reject('La contreseña debe ser de minimo 8 caracteres');
                               },
                           }),
                       ]}
                       hasFeedback
                   >
                       <Input.Password/>
                   </Form.Item>

                   <Form.Item
                       name="confirm"
                       label="Repite tu contraseña"
                       dependencies={['password']}
                       hasFeedback
                       rules={[
                           {
                               required: true,
                               message: 'Repite tu contraseña!'
                           },
                           ({getFieldValue}) => ({
                               validator(rule, value) {
                                   if (!value || getFieldValue('password') === value) {
                                       return Promise.resolve();
                                   }
                                   return Promise.reject('Las contraseñas que ingresaste no coinciden');
                               },
                           }),
                       ]}
                   >
                       <Input.Password/>
                   </Form.Item>

                   <Form.Item>
                       <Button type="primary" htmlType="submit" key="submit" onClick={this.handleChangeValues}>
                           Guardar Cambios
                       </Button>
                   </Form.Item>


                   {/*<Form.Item*/}
                   {/*    name="password"*/}
                   {/*    label="Contraseña"*/}
                   {/*    rules={[*/}
                   {/*    // {*/}
                   {/*    //     required: true,*/}
                   {/*    //     message: "ingresa tu nueva contraseña",*/}
                   {/*    // },*/}
                   {/*    () => ({*/}
                   {/*        validator(rule, value) {*/}
                   {/*            if (typeof(value) !== "undefined") {*/}
                   {/*                if (value.length >= 8){*/}
                   {/*                    return Promise.resolve();*/}
                   {/*                }*/}
                   {/*                return Promise.reject('La contreseña debe ser de minimo 8 caracteres');*/}
                   {/*            }*/}
                   {/*        },*/}
                   {/*    }),*/}
                   {/*    ]}*/}
                   {/*    hasFeedback*/}
                   {/*    >*/}
                   {/*    <Input.Password/>*/}
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

                   {/*    <Form.Item>*/}
                   {/*        <Button type="primary" htmlType="submit" key="submit" onClick={this.handleChangeValues}>*/}
                   {/*            Guardar Cambios*/}
                   {/*        </Button>*/}
                   {/*    </Form.Item>*/}

               </Form>

            </div>

        );
    }

}

export default withRouter(ChangePassword);