import React, {Component} from 'react';
import {Layout, Menu} from "antd";
import { SettingOutlined, PlayCircleOutlined, LogoutOutlined } from "@ant-design/icons";
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import {deleteTokenValid} from "../Helpers/TokenValid";
import SettingForm from "./Settings/SettingForm";

const {Sider, Header, Content, Footer} = Layout;

class SideNavigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedKey: props.currentKey,
            children: props.children
        };
    }

    menuClicked = (e) => {
        this.setState({selectedKey: e.key });
    };

    render() {
        let {selectedKey} = this.state;

        if (selectedKey === "3"){
            deleteTokenValid();
            return (<Redirect to={{ pathname: "/login" }} />);
        }

        return(
            <Layout>
            <Sider style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0,
            }}>
                <div className="logo" />
                <Menu
                    theme="light"
                    mode="inline"
                    defaultSelectedKeys={[this.state.selectedKey]}
                    selectedKeys={[this.state.selectedKey]}
                    onClick={this.menuClicked}>

                    <Menu.Item key="1">
                        <Link to={"/games"}>
                            <PlayCircleOutlined />
                            <span className="nav-text"> Juego</span>
                        </Link>
                    </Menu.Item>

                    <Menu.Item key="2">
                        <Link to={'/settings'}>
                            <SettingOutlined />
                            <span className="nav-text"> Configuración</span>
                        </Link>
                    </Menu.Item>

                    <Menu.Item key="3">
                            <LogoutOutlined />
                            <span className="nav-text">Salir</span>
                    </Menu.Item>
                </Menu>
            </Sider>
                <Layout style={{ marginLeft: 200 }}>
                    <Header style={{ background: '#fff', padding: 0 }} />
                    <Content style={{ margin: '24px 16px 0', overflow: 'initial' }} >
                        <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>

                            {this.state.children}

                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design DEliss Here</Footer>
                </Layout>
            </Layout>
        )

    }

}

export default SideNavigation