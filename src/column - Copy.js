import React, { Component } from 'react'; 
import {Droppable} from 'react-beautiful-dnd';
import Task from './task';
import { Provider } from 'react-redux';

class column extends Component {
     
    render() {
        return (
            <div className="container">
                <h3 className='h3'>{this.props.column.title}</h3> 

                 
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


            </div>
        );
    }
}

export default column;