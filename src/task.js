import React, { Component } from 'react';
import {Draggable} from 'react-beautiful-dnd';
class Dragee extends Component {
   
    render() {
        return(
            <div className ='panel' key={this.props.index+'yes'} id={this.props.index}>
            <Draggable draggableId={this.props.index} index={this.props.task.sid} >
                {(provided)=>(
                    <div className="listitem"
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    > 
                    {this.props.task.stateName}
                    </div>
                )}
               
                </Draggable>
                </div>
        )  
    }
}

export default Dragee;