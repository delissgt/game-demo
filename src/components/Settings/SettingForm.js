import React, {Component} from "react";
import {Tabs} from 'antd';
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
            </div>
        )}
}

export default settingForm;