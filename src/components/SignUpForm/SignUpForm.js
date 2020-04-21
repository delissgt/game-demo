import React from 'react';
import {Modal, Button, Form, Input, Space} from "antd";


const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol : {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};

const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};



const signUpForm = (props) => {

    const onFinish = values => {
        props.handleOk(values);
        console.log('registerValues', values);
    };

    return (
       <Space size={50} direction={"vertical"}>
           <Button  type="link" onClick={props.showModal} size={"large"}>
               Quiero registrarme!
           </Button>
           <Modal
               visible={props.visible}
               title="Title"
               onCancel={props.handleCancel}
               footer={[
                   <Button key="back" onClick={props.handleCancel}>
                       Cancelar
                   </Button>,
               ]}
           >
               <Form
                   { ...formItemLayout }
                   name="register"
                   onFinish={onFinish}
                   size={"large"}
               >
                   <Form.Item
                       name="name"
                       label="Nombre de usuario"
                       rules={[
                           {
                               required: true,
                               message: 'Ingresa tu nombre de usuario', whitespace: true
                           }
                       ]}
                   >
                       <Input autoFocus={true} />
                   </Form.Item>

                   <Form.Item
                       name="enrollment"
                       label="Matrícula"
                       rules={[
                           {
                               required: true,
                               message: 'Este campo es requerido',
                           },
                           {
                               pattern: /^[0-9]+$/,
                               message: 'No es una matricula valida',
                           },
                           ()=> ({
                               validator(rule, value) {
                                  if (value != null) {
                                      const enrollment = value.toString();
                                      if (enrollment.length === 9){
                                          return Promise.resolve();
                                      }
                                  }
                                   return Promise.reject('La matricula debe de ser de 9 digitos');
                               },
                           }),
                       ]}
                   >
                       <Input/>
                   </Form.Item>

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

                   <Form.Item { ...tailFormItemLayout } >
                       <Button
                           type="primary"
                           htmlType="submit"
                           key="submit"
                       >
                           Registrarme
                       </Button>
                   </Form.Item>
               </Form>

           </Modal>
       </Space>
    )
};

export default signUpForm;