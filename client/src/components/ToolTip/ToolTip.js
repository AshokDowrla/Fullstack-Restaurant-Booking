
import { Tooltip } from 'reactstrap'
import React, { Component } from 'react'
 class ToolTip extends Component {
     state={
         tooltip:false,
     }
    render() {
        return (
            
            <Tooltip placement="left" target={this.props.id} isOpen={this.state.tooltip} toggle={()=>this.setState({ tooltip: !this.state.tooltip})} >{this.props.text}</Tooltip>
            
        )
    }
}


export default ToolTip