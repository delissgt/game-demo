import React, { Component } from "react";
import { Tabs } from "antd";
import { SmileOutlined, UnlockOutlined } from "@ant-design/icons";

import ChangePassword from "./Tabs/ChangePassword";
import ChangeComponentsSize from "./Tabs/ChangeComponentsSize";

const { TabPane } = Tabs;

class settingForm extends Component {
    state = {
        size: localStorage.getItem("size"),
    };

    onChangeSize = () => {
        this.setState({ size: localStorage.getItem("size") });
    };

    render() {
        const { size } = this.state;

        return (
            <div>
                <Tabs defaultActiveKey="1">
                    <TabPane
                        forceRender={true}
                        tab={
                            <span>
                                <SmileOutlined />
                                Tamaño
                            </span>
                        }
                        key="1"
                    >
                        <ChangeComponentsSize componentSize={this.state.size} callback={this.onChangeSize} />
                    </TabPane>
                    <TabPane
                        forceRender={true}
                        tab={
                            <span>
                                <UnlockOutlined />
                                Contraseña
                            </span>
                        }
                        key="2"
                    >
                        <ChangePassword componentSize={this.state.size} />
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}

export default settingForm;
