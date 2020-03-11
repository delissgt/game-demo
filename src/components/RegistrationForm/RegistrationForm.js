import React from 'react';
import {Modal, Button, Form, Input, InputNumber} from "antd";

const registrationForm = (props) => {

    const onFinish = values => {
      console.log('registerValues', values)
    };

    return (
       <div>
           <Button  type="link" onClick={props.showModal}>
               Quiero registrarme!
           </Button>
           <Modal
               visible={props.visible}
               title="Title"
               onOk={props.handleOk}
               onCancel={props.handleCancel}
               footer={[
                   <Button key="back" onClick={props.handleCancel}>
                       Cancelar
                   </Button>,
                   <Button type="primary" key="submit" onClick={props.handleOk} loading={props.loading}>
                       Registrarse
                   </Button>,
               ]}
           >
               <Form
                   name="register"
                   onFinish={onFinish}
               >
                   <Form.Item
                       name="nickname"
                       label="Nombre de usuario"
                       rules={[
                           {
                               required: true,
                               message: 'Ingresa tu nombre de usuario', whitespace: true
                           }
                       ]}
                   >
                       <Input placeholder="Alias" />
                   </Form.Item>

                   <Form.Item
                       name="enrollment"
                       label="Matrícula"
                       rules={[
                           {
                               required: true,
                               message: 'Este campo es requerido',
                               whiteSpace: false,
                           },
                           {
                               type: 'number',
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
                       <InputNumber/>
                   </Form.Item>

                   <Form.Item
                       name="password"
                       label="Contraseña"
                       rules={[
                           {
                               required: true,
                               message: 'Ingresa tu contraseña!',
                           },
                           // TODO validate password finish
                           () => ({
                               validator(rule, value) {
                                   if (value.length >= 8){
                                       return Promise.resolve();
                                   }
                                   return Promise.reject('La contreseña debe de ser minimo 8 caracteres');
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
               </Form>

           </Modal>
       </div>
    )
};

export default registrationForm;