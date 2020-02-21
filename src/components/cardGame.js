import React from "react";
import {Card, Icon, Button, Rate} from "antd";

// import Game1Attribute from "./Game1Attribute";
import {BrowserRouter, Route, Link} from 'react-router-dom';

const CardGame = (props) => {
    // console.log('props en CARD', props);
    // console.log('props GAME LINK', props.game);
    let drawCard = () => {
        props.game.map(g => {
           console.log('ONE GAME ', g);
        });
    };

    return props.game.map(g => {
        return <div style={{background: '#ECECEE', padding: '30px'}} key={g.id}>
                    <Card
                        title={g.title}
                        bordered={false}
                        style={{ width: 300 }}
                        actions={[
                              <Icon type="setting" key="setting" />,
                              <Icon type="edit" key="edit" />,
                              <Icon type="ellipsis" key="ellipsis" />,
                            <Link to={g.gamePage }>
                              <Button onClick={()=>{drawCard()}}>PLAY!</Button>
                            </Link>
                        ]}
                    >
                        <p>{g.description}</p>
                        <Rate character={<Icon type="trophy" theme="filled"/>}/>

                    </Card>
                </div>
    })

        // return(
        //     <div style={{background: '#ECECEE', padding: '30px'}}>
        //         <Card
        //             title={props.game[0].title}
        //             bordered={false}
        //             style={{ width: 300 }}
        //             actions={[
        //                   <Icon type="setting" key="setting" />,
        //                   <Icon type="edit" key="edit" />,
        //                   <Icon type="ellipsis" key="ellipsis" />,
        //                   <Button onClick={()=>{drawCard()}}>PLAY!</Button>
        //             ]}
        //         >
        //             <p>{props.game[0].description}</p>
        //
        //         </Card>
        //     </div>
        // )
};

export default CardGame;