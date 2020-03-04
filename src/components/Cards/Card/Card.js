import React from 'react';
import {Card as CardAntd, Icon, Rate, Col} from "antd";
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
                            <Rate character={<Icon type="trophy" theme="filled"/>}/>,
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