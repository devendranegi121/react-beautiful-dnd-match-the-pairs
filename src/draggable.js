import React, { Component } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Dragee from './task';
import Droopable from './dropee';
class Draggablec extends Component {

    render() {
        return (
            <div className="container coll">
                <div className='col2'>
                    <h3 className='h3'>{this.props.columnTitle}</h3>

                    {this.props.states.map((task, index) =>

                        <Droppable droppableId={index + "drags"} key={task.id}>
                            {provided => (

                                <div className='list'
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                >
                                    <Dragee index={index + 'drags'} task={task} />
                                    {provided.placeholder}
                                </div>
                            )}

                        </Droppable>
                    )}
                </div>
                <div className='col2'>
                    <h3 className='h3'>Capitals</h3>

                    {this.props.capitals.map((capital, index) =>

                        <Droppable droppableId={index + "drops"} key={capital.id}>
                            {provided => (
                                <div className='list'
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                >
                                    <Droopable index={index + 'drops'} capital={capital} />
                                    {provided.placeholder}
                                </div>
                            )}

                        </Droppable>
                    )}
                </div>

            </div>
        );
    }
}

export default Draggablec;