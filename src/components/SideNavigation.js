import React from 'react';
import {Layout, Menu, Icon} from "antd";

import CardGame from "./cardGame";

const {Header, Content, Footer, Sider} = Layout;


const SideNavigation = (props) => {
        // console.log('props in SideNavitaion', props.games);
    return(
        <Layout>
            <Sider style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0,
            }}>
                <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <Icon type="play-circle" theme="filled" />
                            <span className="nav-text">Juego</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="setting" theme="filled" />
                            <span className="nav-text">Configuración</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="logout" />
                            <span className="nav-text">Salir</span>
                        </Menu.Item>
                    </Menu>
            </Sider>
            <Layout style={{ marginLeft: 200 }}>
                <Header style={{ background: '#fff', padding: 0 }} />
                <Content style={{ margin: '24px 16px 0', overflow: 'initial' }} >
                    <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>

                        <CardGame game={props.games}/>

                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design DEliss Here</Footer>
            </Layout>
        </Layout>
        )
};

export default SideNavigation