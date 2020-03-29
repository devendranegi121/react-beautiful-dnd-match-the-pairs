import React, { Component } from 'react';
import {Draggable, Droppable} from 'react-beautiful-dnd';
class task extends Component {
   
    render() {
        return(
            <Draggable draggableId={this.props.task.id} index={this.props.index} >
                {(provided)=>(
                    <div className="container"
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    > 
                    {this.props.task.stateName}
                    </div>
                )}
               
                </Draggable>

<Droppable droppableId={this.props.column.id}>
{provided=>(
     <div className='list' 
     ref={provided.innerRef}
     {...provided.droppableProps}
      >
     {this.props.tasks.map((task, index)=><Task index={index} key={task.id} task={task} />)}

 {provided.placeholder}
 </div>
)}

</Droppable>
        )  
    }
}

export default task;