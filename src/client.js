import React from 'react';
import ReactDOM from 'react-dom';

/*class Button1 extends React.Component {
    render(){
        return(<button>lalala</button>);
    }
}

class Inpucik extends React.Component {
    render()
    {
        return (
            <input className="input" type="text" />
        );
    }
}*/
class Inpucik extends React.Component {
    input = null;

    constructor(props)
    {
        // Pass props to parent class
        super(props);
        // Set initial state
        this.state = {
            data: []
        }
    }

    render()
    {
        return (
            <div>
                <input ref={node =>{
                    this.input = node;
                }} className="input" type="text" defaultValue="sasa"/>
                <button onClick={() =>{
                    this.props.addTodo(this.input.value);
                    //this.input.value='';
                }}>{this.props.buttonName}</button>
            </div>
        );
    }
}

const Taskfield = ({todos}) =>{
    const todoNode = todos.map((todo) =>{
        return (<li key={todo.id}>{todo.text}</li>);
    });
    return (
        <fieldset>
            <legend>Tasks</legend>
            <ul id="taskList">
                {todoNode}
            </ul>
        </fieldset>
    );
}
function getRandomizer(bottom, top) {
    return Math.floor( Math.random() * ( 1 + top - bottom ) ) + bottom;
}

class TodoApp extends React.Component {
    constructor(props)
    {
        // Pass props to parent class
        super(props);
        // Set initial state
        this.state = {
            data: []
        }
    }

    addTodo(val)
    {
        const todo = {text: val, id:getRandomizer(3,999)};
        this.state.data.push(todo);
        this.setState({data: this.state.data});
    }

    render()
    {
        return (
            <div>
                <Inpucik buttonName="Add" addTodo={this.addTodo.bind(this)}/><br/> <Taskfield todos={this.state.data}/>
            </div>
        );
    }
}

ReactDOM.render(
    <div>
        <TodoApp/>

    </div>,
    document.getElementById('root')
);