import React from 'react';
import {Card as CardAntd, Rate, Col} from "antd";
import { TrophyFilled } from "@ant-design/icons";
import {Link} from "react-router-dom";
import classes from './Card.css';

const card = (props) => {

    return props.games.map( game => {
        return(
        <React.Fragment key={game.id}>
            <Col span={12}>
                <Link to={game.gamePage }>
                    <CardAntd
                        className={classes}
                        title={game.title}
                        bordered={false}
                        actions={[
                            <Rate character={<TrophyFilled />}/>,
                        ]}
                    >
                        <p>{game.description}</p>
                    </CardAntd>
                </Link>
            </Col>
        </React.Fragment>
        )
    })
};

export default card;