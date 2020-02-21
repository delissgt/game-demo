import React from 'react';
//import './BlocklyComponents.css';
// import './App.css';
import './BlocklyComponent.css';
import Blockly from 'blockly/core';
import locale from 'blockly/msg/en';
import 'blockly/blocks';

Blockly.setLocale(locale);

class BlocklyComponent extends React.Component {

    componentDidMount() {
        const { initialXml, children, ...rest } = this.props;
        this.primaryWorkspace = Blockly.inject(
            this.blocklyDiv,
            {
                toolbox: this.toolbox,
                ...rest
            },
        );

        if (initialXml) {
            Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(initialXml), this.primaryWorkspace);
        }

        const wrapFunctions = ['getInverseScreenCTM', 'updateInverseScreenCTM', 'isVisible',
            'createDom', 'dispose', 'newBlock', 'resize', 'getCanvas', 'getBubbleCanvas',
            'getParentSvg', 'translate', 'getWidth', 'setVisible', 'render', 'highlightBlock',
            'paste', 'recordDeleteAreas', 'isDeleteArea', 'startDrag', 'moveDrag', 'isDragging',
            'isDraggable', 'getBlocksBoundingBox', 'cleanUp', 'updateToolbox', 'markFocused',
            'zoom', 'zoomCenter', 'zoomToFit', 'scrollCenter', 'centerOnBlock', 'setScale',
            'setResizesEnabled', 'clear', 'registerButtonCallback', 'getButtonCallback',
            'removeButtonCallback', 'registerToolboxCategoryCallback', 'getToolboxCategoryCallback',
            'removeToolboxCategoryCallback', 'getAudioManager'];
        wrapFunctions.forEach((fn) => {
            const workspace = this.primaryWorkspace;
            this[fn] = (...args) => {
                workspace[fn].apply(workspace, args);
            }
        })
    }

    get workspace() {
        return this.primaryWorkspace;
    }

    setXml(xml) {
        Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(xml), this.primaryWorkspace);
    }

    render() {
        const { children } = this.props;
        console.log('CHILDRENSSS', children);
        console.log('CHILDREN PROPSS', this.props);
        // console.log('estado', this.);

        return <React.Fragment>
            <div
                ref={e => this.blocklyDiv = e}
                id="blocklyDiv"
                style={{ "height": 348, "width": "70%" }}
            />
            <xml
                deliss="hola deliss"
                xmlns="https://developers.google.com/blockly/xml"
                is="blockly" style={{ display: 'none' }}
                // ref={(toolbox) => { this.toolbox = toolbox; }}
            >
                {children}
            </xml>
        </React.Fragment>;
    }
}

export default BlocklyComponent;