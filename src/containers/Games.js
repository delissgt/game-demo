import React, {Component} from "react";
import SideNavigation from "../components/SideNavigation";
import {Layout} from "antd";
import Cards from "../components/Cards/Cards";
import jwt_decode from 'jwt-decode';
import {Redirect} from "react-router-dom";
const {Header, Content, Footer} = Layout;

class Games extends Component {
    state = {
        games: [
            {id:1, title:'Atributos', description:'Aprenderas Atributos', gamePage:'/games/attributes', buttonStatus: false },
            {id:2, title:'Metodos', description:'Aprenderas Metodos', gamePage:'/../games/methods', buttonStatus: true },
        ]
    };

    checkTokenValid = () => {
        const accessToken = localStorage.getItem('access_token');
        const refreshToken = localStorage.getItem('refresh_token');

        if (accessToken !== null) {
            const decoded = jwt_decode(accessToken);
            const date = decoded['exp'] * 1000;
            const now = Date.now();

            if (now >= date) {
                localStorage.clear();
                return  false
            } else {
                return true;
            }
        } else {
            localStorage.clear();
            return false;
        }
    };


    render() {
        if (this.checkTokenValid() === false) {
            return <Redirect to = {{pathname: "/login"}} />
        }

        return (
            <Layout>
                <SideNavigation currentKey="1"/>

                <Layout style={{ marginLeft: 200 }}>
                    <Header style={{ background: '#fff', padding: 0 }} />
                    <Content style={{ margin: '24px 16px 0', overflow: 'initial' }} >
                        <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>

                            <Cards games={this.state.games}/>

                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design DEliss Here</Footer>
                </Layout>
            </Layout>
        )
    }
}

export default Games;