import React, {useState} from "react";
import {Card, Divider, Col, Row, Button, Radio, Affix} from 'antd';
import LionFace from '../../assets/attributes/LionFace.png';
import TigerFace from '../../assets/attributes/TigerFace.png';
import LeopardFace from '../../assets/attributes/LeopardFace.png';
import FoxFace from '../../assets/attributes/FoxFace.png';
import Ok from '../../assets/attributes/Ok.png';
import {Avatar} from "antd/es";
import "./style.css";

const {Meta} = Card;

const DobleCards = () => {
    const [answer1, setAnswer1] = useState(0);
    const [answer2, setAnswer2] = useState(0);
    const [answer3, setAnswer3] = useState(0);

    const handleClick = () => {
        console.log('click , revisar respuestas');
        console.log('answer1', answer1);
        console.log('answer2', answer2);
        console.log('answer3', answer3);
    };


  return(
     <div>
         <h2>
             Estas solo en la oficina, hace mucho calor y por una soda,pero cuando regresas, sorpresa!.
             Hay tarjetas repetidas. Ayudate con la tarjeta del Leon.
         </h2>
         <Row gutter={16}>
             <Col span={12}>
                 <Card style={{ width: 300, alignContent: "left"}} >
                     <Meta
                         avatar={<Avatar src={LionFace} />}
                         title="Leon"
                         description={"caracteristicas:"}
                     />
                     <Divider dashed/>
                     <p>alimentacion: carnivoro</p>
                     <p>genero: macho</p>
                     <p>edad: 3 años</p>
                 </Card>
             </Col>
             <Col span={12} >
                 <Affix offsetTop={20}>
                     <Button type="primary" size={"large"} onClick={() => {handleClick()}} >Revisar Mis Respuestas</Button>
                 </Affix>
             </Col>
         </Row>

         <Divider/>
         <div>
             <Row gutter={16}>
                 <Col span={8}>
                     <Card style={{ width: 300, alignContent: "left"}} >
                         <Meta
                             avatar={<Avatar src={TigerFace}/>}
                             title="Tigre"
                         />
                         <Divider dashed/>
                         <p>alimentacion: Carnivoro</p>
                         <p>genero: Hombre</p>
                         <p>edad: 3 lunas</p>
                         <Divider style={{ borderWidth: "2px 0 0" }}/>
                         <p>Targeta 1</p>
                         {/*<Button onClick={()=> handleClick('1')} size={'large'} block={true} style={{ width: "80%" }}>OK</Button>*/}
                     </Card>
                 </Col>

                 <Col span={8}>
                     <Radio.Group onChange={e => setAnswer1(e.target.value)} size={"large"}>
                         <Radio.Button value={1}>
                             Izquierda 1
                         </Radio.Button>
                         <Divider type={"vertical"} />
                         <Divider type={"vertical"} />
                         <Radio.Button value={3}>
                             Derecha 3
                         </Radio.Button>
                     </Radio.Group>
                     {/*<div>*/}
                     {/*    <img src={Ok} style={{ height: "40px", width: "40px" }}/>*/}
                     {/*</div>*/}
                 </Col>

                 <Col span={8}>
                     <Card  style={{ width: 300, alignContent: "left"}} >
                         <Meta
                             avatar={<Avatar src={TigerFace}/>}
                             title="Tigre"
                         />
                         <Divider dashed/>
                         <p>alimentacion: Carnivoro</p>
                         <p>genero: Macho</p>
                         <p>edad: 3 años</p>
                         <Divider style={{ borderWidth: "2px 0 0" }}/>
                         <p>Tarjeta 3</p>
                         {/*<Button onClick={()=> handleClick('2')} size={'large'} style={{ width: "80%" }}>OK</Button>*/}
                     </Card>
                 </Col>
             </Row>

             <Divider/>

             <Row gutter={16}>
                 <Col span={8}>
                     <Card style={{ width: 300, alignContent: "left"}} >
                         <Meta
                             avatar={<Avatar src={LeopardFace} />}
                             title="Leopardo"
                         />
                         <Divider dashed/>
                         <p>alimentacion: Carnivoro</p>
                         <p>genero: Macho</p>
                         <p>edad: 8 meses</p>
                         <Divider style={{ borderWidth: "2px 0 0" }}/>
                         <p>Tarjeta 4</p>
                         {/*<Button onClick={()=> handleClick('1')} size={'large'} block={true} style={{ width: "80%" }}>OK</Button>*/}
                     </Card>
                 </Col>

                 <Col span={8}>
                     <Radio.Group onChange={e => setAnswer2(e.target.value)} size={"large"}>
                         <Radio.Button value={4}>
                             Izquierda 4
                         </Radio.Button>
                         <Divider type={"vertical"} />
                         <Divider type={"vertical"} />
                         <Radio.Button value={6}>
                             Derecha 6
                         </Radio.Button>
                     </Radio.Group>
                 </Col>

                 <Col span={8}>
                     <Card style={{ width: 300, alignContent: "left"}} >
                         <Meta
                             avatar={<Avatar src={LeopardFace} />}
                             title="Leopardo"
                         />
                         <Divider dashed/>
                         <p>alimentacion: Omnívoro</p>
                         <p>genero: Macho</p>
                         <p>edad: 8 meses</p>
                         <Divider style={{ borderWidth: "2px 0 0" }}/>
                         <p>Tarjeta 6</p>
                         {/*<Button onClick={()=> handleClick('2')} size={'large'} block={true} style={{ width: "80%" }}>OK</Button>*/}
                     </Card>
                 </Col>
             </Row>

             <Divider/>

             <Row gutter={16}>
                 <Col span={8}>
                     <Card style={{ width: 300, alignContent: "left"}} >
                         <Meta
                             avatar={<Avatar src={FoxFace} />}
                             title="Zorro"
                         />
                         <Divider dashed/>
                         <p>alimentacion: Carnivoro</p>
                         <p>genero: Macho</p>
                         <p>edad: 5 años</p>
                         <Divider style={{ borderWidth: "2px 0 0" }}/>
                         <p>Tarjeta 7</p>
                         {/*<Button onClick={()=> handleClick('1')} size={'large'} block={true} style={{ width: "80%" }}>OK</Button>*/}
                     </Card>
                 </Col>

                 <Col span={8}>
                     <Radio.Group onChange={e => setAnswer3(e.target.value)} size={"large"}>
                         <Radio.Button value={7}>
                             Izquierda 7
                         </Radio.Button>
                         <Divider type={"vertical"} />
                         <Divider type={"vertical"} />
                         <Radio.Button value={9}>
                             Derecha 9
                         </Radio.Button>
                     </Radio.Group>
                 </Col>

                 <Col span={8}>
                     <Card style={{ width: 300, alignContent: "left"}} >
                         <Meta
                             avatar={<Avatar src={FoxFace} />}
                             title="Zorro"
                         />
                         <Divider dashed/>
                         <p>alimentacion: Carnivoro</p>
                         <p>genero: Macho</p>
                         <p>edad: 3 siglos</p>
                         <Divider style={{ borderWidth: "2px 0 0" }}/>
                         <p>Tarjeta 9</p>
                         {/*<Button onClick={()=> handleClick('2')} size={'large'} block={true} style={{ width: "80%" }}>OK</Button>*/}
                     </Card>
                 </Col>
             </Row>

         </div>
     </div>
  );
};

export default DobleCards;