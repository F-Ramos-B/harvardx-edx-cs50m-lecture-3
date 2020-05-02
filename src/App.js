import React from "react";
import "./styles.css";

import Todo from "./todo";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoName: "",
      todos: [
        {
          index: 0,
          checked: true,
          text: "Treinar React e ficar desapontado"
        },
        {
          index: 1,
          checked: true,
          text: "Continuar tentando"
        },
        {
          index: 2,
          checked: false,
          text: "Desistir e voltar pro Angular"
        }
      ]
    };
  }

  addTodo = () => {
    this.setState(prevState => ({
      todoName: "",
      todos: [
        ...prevState.todos,
        {
          index: prevState.todos.length,
          text: prevState.todoName,
          checked: false
        }
      ]
    }));
  };

  limparTudo = () => {
    this.setState({ todos: [] });
  };

  updateTodoName = todoName => {
    this.setState({ todoName });
  };

  capturarEvento = (index, e) => {
    let updatedList = [...this.state.todos];
    updatedList[index].checked = e;
    this.setState({ todos: updatedList });
  };

  onDeleteTodo = index => {
    this.setState(prevState => ({
      todos: [...this.state.todos].filter(t => t.index !== index)
    }));
  };

  render() {
    return (
      <div className="App">
        <h1>Testando React</h1>
        <hr />
        <div>{"Totais: " + this.state.todos.length}</div>
        <div>
          {"Não finalizados: " +
            this.state.todos.filter(t => !t.checked).length}
        </div>
        <p>Add todo:</p>
        <input
          placeholder="Digite o nome da tarefa..."
          type="text"
          value={this.state.todoName}
          onChange={event => this.updateTodoName(event.target.value)}
          onKeyPress={e => (e.key === "Enter" ? this.addTodo() : null)}
        />
        <button type="submit" onClick={() => this.addTodo()}>
          Add
        </button>
        <button type="button" onClick={() => this.limparTudo()}>
          Limpar tudo
        </button>
        {this.state.todos.length ? <h3>Tarefas:</h3> : null}
        {this.state.todos.map(todo => (
          <Todo
            onCheckBoxTeste={this.capturarEvento}
            checked={todo.checked}
            text={todo.text}
            key={todo.index}
            index={todo.index}
            onDeleteTodo={this.onDeleteTodo}
          />
        ))}
      </div>
    );
  }
}
