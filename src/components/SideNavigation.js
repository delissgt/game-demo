import React, {Component} from 'react';
import {Layout, Menu, Icon} from "antd";
import {Link} from 'react-router-dom';
const {Sider} = Layout;

class SideNavigation extends Component {
    constructor(props) {
        super(props);
        this.state = {selectedKey: props.currentKey};
    }



    render() {

        const menuClicked = (e) => {
            console.log('click event', e);
            this.setState({selectedKey: e.key });
            this.setState({selectedKey: e.key });
            console.log('______');
        };

        return(
            <Sider style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0,
            }}>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={[this.state.selectedKey]}
                    selectedKeys={[this.state.selectedKey]}
                    onClick={menuClicked}>

                    <Menu.Item key="1">
                        <Link to={"/games"}>
                            <Icon type="play-circle" theme="filled" />
                            <span className="nav-text">Juego</span>
                        </Link>
                    </Menu.Item>

                    <Menu.Item key="2">
                        <Link to={'/settings'}>
                            <Icon type="setting" theme="filled" />
                            <span className="nav-text">Configuración</span>
                        </Link>
                    </Menu.Item>

                    <Menu.Item key="3">
                        <Link to={"/login"}>
                            <Icon type="logout" />
                            <span className="nav-text">Salir</span>
                        </Link>
                    </Menu.Item>
                </Menu>
            </Sider>
        )

    }


};

export default SideNavigation