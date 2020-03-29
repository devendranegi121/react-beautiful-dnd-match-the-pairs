const initialData={
    states:[
        {id: 100, stateName: "Rajasthan" },
        {id: 101, stateName: "Delhi" },
        {id: 102, stateName: "Uttarakhand" },
    ],
    capitals:[
        {id:200, name:"Dehradun"},
        {id:201, name:"Jaipur"},
        {id:202, name:"New Delhi"}
    ],
    columns:{
        'column-1':{
            id: "column-1",
            title: "State Name",
            teskIds: ["task-1", 'task-2' , 'task-3']
        },
        'column-2':{
            id: "column-2",
            title: "capital Name",
            teskIds: []
        },
         
    },
    columnOrder:["column-1", "column-2" ],
    line:[],
    x:0,
    y:0,
    x1:0,
    y1:0
};

export default initialData;