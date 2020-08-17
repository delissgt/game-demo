import React, { Component } from "react";
import { Layout, Menu } from "antd";
import { SettingOutlined, PlayCircleOutlined, LogoutOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { deleteTokenValid } from "../Helpers/TokenValid";
import SettingForm from "./Settings/SettingForm";
import VoiceControl from "./VoiceControl/VoiceControl";
import "./sideNavigation.css";

const { Sider, Header, Content, Footer } = Layout;

class SideNavigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedKey: props.currentKey,
            children: props.children,
        };
    }

    menuClicked = e => {
        this.setState({ selectedKey: e.key });
        window.location = e.item.props.children[1].props.to
    };

    render() {
        let { selectedKey } = this.state;

        if (selectedKey === "3") {
            deleteTokenValid();
            return <Redirect to={{ pathname: "/login" }} />;
        }

        return (
            <Layout>
                <Sider
                    style={{
                        overflow: "auto",
                        height: "100vh",
                        position: "fixed",
                        left: 0,
                    }}
                    theme={"light"}
                    className={"menu-item-adapted"}
                    width={150}
                >
                    <div className="logo" />
                    <Menu
                        theme="light"
                        mode="inline"
                        defaultSelectedKeys={[this.state.selectedKey]}
                        selectedKeys={[this.state.selectedKey]}
                        onClick={this.menuClicked}
                        style={{ display: "block", height: "71px" }}
                    >
                        <Menu.Item key="1" style={{ height: "71px" }} id={"pageGame"}>
                            <Link to={"/games"}>
                                <PlayCircleOutlined style={{ fontSize: "20px" }} />
                                <span className="nav-text"> Juego</span>
                            </Link>
                        </Menu.Item>

                        <Menu.Item key="2" style={{ height: "71px" }} id={"pageConfiguration"}>
                            <Link to={"/settings"}>
                                <SettingOutlined style={{ fontSize: "20px" }} />
                                <span className="nav-text"> Configuración</span>
                            </Link>
                        </Menu.Item>

                        <Menu.Item key="3" style={{ height: "71px" }}>
                            <LogoutOutlined style={{ fontSize: "20px" }} />
                            <span className="nav-text">Salir</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout style={{ marginLeft: 150 }}>
                    <Header style={{ background: "#fff", padding: 0 }}>
                        <VoiceControl />
                    </Header>
                    <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
                        <div style={{ padding: 24, background: "#fff", textAlign: "center" }}>
                            {this.state.children}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: "center" }}>... </Footer>
                </Layout>
            </Layout>
        );
    }
}

export default SideNavigation;
