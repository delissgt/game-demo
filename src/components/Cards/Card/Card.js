import React from "react";
import { Card as CardAntd, Rate, Col } from "antd";
import { TrophyFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";
import classes from "./Card.css";

const card = props => {
    let cardColor = "#1890ff";

    return props.games.map(game => {
        {
            game.url === "#" ? (cardColor = "#d9d9d9") : (cardColor = "#fafafa");
        }
        return (
            <React.Fragment key={game.id}>
                <Col span={12}>
                    <Link to={game.url}>
                        <CardAntd
                            style={{ backgroundColor: cardColor }}
                            className={classes}
                            title={game.title}
                            bordered={false}
                            actions={[
                                <Rate character={<TrophyFilled />} />,
                                // <Rate character={<TrophyFilled />} disabled defaultValue={3}/>,
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
