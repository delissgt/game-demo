// import React from 'react';
// import ReactDOM from 'react-dom';
//
// import * as Blockly from 'blockly/core';
//
//
// class BlocklyReactField extends Blockly.Field {
//
//     showEditor_() {
//         this.div_ = Blockly.DropDownDiv.getContentDiv();
//         ReactDOM.render(<FieldRenderComponent />,
//             this.div_);
//
//         var border = this.sourceBlock_.getColourBorder();
//         border = border.colourBorder || border.colourLight;
//         Blockly.DropDownDiv.setColour(this.sourceBlock_.getColour(), border);
//
//         Blockly.DropDownDiv.showPositionedByField(
//             this, this.dropdownDispose_.bind(this));
//     }
//
//     dropdownDispose_() {
//         ReactDOM.unmountComponentAtNode(this.div_);
//     }
// }
//
// class FieldRenderComponent extends React.Component {
//
//     render() {
//         return <div style={{ color: '#fff' }}>
//             Hello from React!
//         </div>;
//     }
// }
// //
// export default BlocklyReactField;