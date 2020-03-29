import React, { Component } from 'react';
import 'reset-css';
import ReactDOM from 'react-dom';
import { DragDropContext } from 'react-beautiful-dnd';
import initialData from './data'
import Draggable from './draggable';

import './main.css';
class App extends Component {
    state = initialData;
      

    onDragStart = result => {
        
    }
    onDrageEnd = result => {

        console.log(result);
        
        const draggableId=result.draggableId;
        if(result.destination){
            const droppableId=result.destination.droppableId;
        
        
        if(droppableId==="0drops" || droppableId==="1drops" || droppableId==="2drops"){
        const x=document.getElementById(draggableId).offsetLeft + document.getElementById(draggableId).offsetWidth ;
        const y=document.getElementById(draggableId).offsetTop + (document.getElementById(draggableId).offsetHeight/2);
        
        const x1=document.getElementById(droppableId).offsetLeft;
        const y1=document.getElementById(droppableId).offsetTop + (document.getElementById(draggableId).offsetHeight/2);  
        if(document.getElementsByClassName(draggableId)[0]){
            document.getElementsByClassName(draggableId)[0].remove();
        }
        document.getElementsByClassName('line')[0].innerHTML+=`
        <line x1=${x} y1=${y} x2=${x1} y2=${y1} class=${draggableId} style="stroke:rgb(255,0,0);stroke-width:2" /> 
        `
        }
        }
    }
    render() {
        return (
            <div className='row'>
                <svg className='line'></svg> 
                <DragDropContext
                onDragStart={this.onDragStart}
                    onDragEnd={this.onDrageEnd}
                >
                    <Draggable key="col1" id="col1" columnTitle="State Name" states={this.state.states} capitals={this.state.capitals} /> 
                </DragDropContext>
            
            </div>
        )
    }
}
ReactDOM.render(<App />, document.getElementById("root"));
