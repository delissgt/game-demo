import React, {Component} from "react";
import {Modal} from "antd";

class ModalFinishedGame extends Component {
    state = {
        visible: false
    };

    showModal = () => {
      this.setState({modalVisible: true});
    };

    handleOk = e => {
      console.log('handleOK', e);
      this.setState({modalVisible: false});
    };

    handleCancel = e => {
      this.setState({modalVisible: false});
    };


    render(props) {
        console.log('SASASAS',props);
        return(
            <Modal title="My Modal simple"
                   visible={this.state.visible}
                   onOk={this.handleOk}
                   onCancel={this.handleCancel}
            >
                <p>Contenido deliss</p>
                <p>Contenido deliss</p>
                <p>Contenido deliss</p>
            </Modal>
        );
    }

}

export default ModalFinishedGame;