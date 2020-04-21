import React from "react";
import {Avatar, Card, Col, Divider, Radio, Row} from "antd";

const {Meta} = Card;

const radioStyle = {
  display: 'flex',
};

const Impostor = () => {
    return(
        <div>
            <h2>
                El administrador te pide que revices y guardes las tarjetas.
                Hay una tarjeta que no pertenece al grupo selecciona cual es.
            </h2>
            <Divider/>

            <Row gutter={16}>

                <Col span={8}>
                    <Card style={{ width:300 }}>
                        <Meta
                            avatar={<Avatar />}
                            title="cebra"
                        />
                        <Divider dashed/>
                        <p>alimentación: herbívoro</p>
                        <p>genero: hembra</p>
                        <p>tamaño: 1.4  metros</p>
                        <p>peso: 300 kg</p>
                        <p>habitad natural: sabana</p>
                        <Divider/>
                        <p>Tarjeta 1</p>
                    </Card>
                </Col>

                <Col span={8}>
                    <Card style={{ width:300 }}>
                        <Meta
                            avatar={<Avatar />}
                            title="antilope"
                        />
                        <Divider dashed/>
                        <p>alimentación: herbívoro</p>
                        <p>genero: hembra</p>
                        <p>tamaño: 1.8  metros</p>
                        <p>peso: 250 kg</p>
                        <p>habitad natural: sabana</p>
                        <p>depredadores: leones, hienas y cocodrilos</p>
                        <Divider/>
                        <p>Tarjeta 3</p>
                    </Card>
                </Col>

                <Col span={8}>
                    <Card style={{ width:300 }}>
                        <Meta
                            avatar={<Avatar />}
                            title="ñu"
                        />
                        <Divider dashed/>
                        <p>alimentación: herbívoro</p>
                        <p>genero: hembra</p>
                        <p>tamaño: 1.8  metros</p>
                        <p>peso: 250 kg</p>
                        <p>habitad natural: praderas</p>
                        <p>depredadores: leones, hienas y cocodrilos</p>
                        <Divider/>
                        <p>Tarjeta 7</p>
                    </Card>
                </Col>

            </Row>
            {/*<Divider dashed={true}/>*/}
            <br/>

            <Row  justify={"center"}>
                <Col span={24}>
                    <Radio.Group onChange={e => {}} size={"large"}>

                        <Radio.Button value={1} >
                                Tarjeta 1
                        </Radio.Button>

                        <Divider type="vertical" />
                        <Divider type="vertical" />

                        <Radio.Button value={3}>
                               Tarjeta 3
                        </Radio.Button>

                        <Divider type="vertical" />
                        <Divider type="vertical" />

                        <Radio.Button value={2}>
                               Tarjeta 7
                        </Radio.Button>

                    </Radio.Group>
                </Col>
            </Row>
        </div>

    )
};

export default Impostor;