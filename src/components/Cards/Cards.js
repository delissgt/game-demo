import React from "react";
import {Row} from "antd";

import Card from './Card/Card';

const Cards = (props) => {

        return (
            <div style={{backgroundImage : "linear-gradient(0deg, rgba(24,144,255,100)11%, rgba(114,250,202,1)100%)", padding: '30px'}}>
            {/*<div style={{background: '#ECECEE', padding: '30px'}}>*/}
                <Row gutter={16}>
                    <Card games={props.games}/>
                </Row>
            </div>
        )
};

export default Cards;