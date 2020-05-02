import React from "react";

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: this.props.checked,
      text: this.props.text,
      index: this.props.index
    };
  }

  checkTodo = e => {
    this.setState(prevState => ({ checked: !prevState.checked }));
    this.props.onCheckBoxTeste(this.state.index, e);
  };

  deleteTodo = () => {
    this.props.onDeleteTodo(this.state.index);
  };

  render() {
    return (
      <p>
        <input
          type="checkbox"
          defaultChecked={this.state.checked}
          onChange={event => this.checkTodo(event.target.checked)}
        />
        <span>{this.state.text}</span>
        <button
          className="button-delete"
          type="button"
          onClick={() => this.deleteTodo()}
        >
          X
        </button>
      </p>
    );
  }
}
