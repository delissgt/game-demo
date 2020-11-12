import React from "react";
import { Card as CardAntd, Rate, Col } from "antd";
import { StarFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";
import classes from "./Card.css";

const card = props => {
    let cardColor = "#1890ff";

    console.log('PROPS EN CARD', props);

    return props.games.map(game => {
        {
            game.url === "#" ? (cardColor = "#d9d9d9") : (cardColor = "#fafafa");
        }
        console.log('game', game.score);
        return (
            <React.Fragment key={game.id}>
                <Col span={12}>
                    <Link to={game.url}>
                        <CardAntd
                            style={{ backgroundColor: cardColor }}
                            className={classes}
                            title={game.title}
                            bordered={false}
                            id={"cardAttributes"}
                            actions={[
                                <Rate character={<StarFilled />} disabled defaultValue={game.score} count={3}/>,
                            ]}
                        >
                            <p>{game.description}</p>
                        </CardAntd>
                    </Link>
                </Col>
            </React.Fragment>
        );
    });
};

export default card;
