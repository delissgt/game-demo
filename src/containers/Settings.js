import React, {Component} from "react";
import {Layout} from "antd";
import SideNavigation from "../components/SideNavigation";
import SettingForm from "../components/Settings/SettingForm";
import {Redirect} from "react-router-dom";
import {checkTokenValid} from "../Helpers/TokenValid";

const {Header, Content, Footer} = Layout;

class Settings extends Component {

    render() {

        if (checkTokenValid() === false) {
            return <Redirect to = {{pathname: "/login"}} />
        }

        return(
            <Layout>
                <SideNavigation currentKey="2"/>

                <Layout style={{ marginLeft: 200 }}>
                    <Header style={{ background: '#fff', padding: 0 }} />
                    <Content style={{ margin: '24px 16px 0', overflow: 'initial' }} >
                        <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>

                            <SettingForm/>

                        </div>
                    </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design DEliss Here</Footer>
                </Layout>
            </Layout>
        )
    }
}

export default Settings;