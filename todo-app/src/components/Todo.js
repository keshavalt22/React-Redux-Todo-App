import { connect } from "react-redux";

function Todo(props) {
    console.log(props.todo)
    return (
        <li className="todo_list">
            <input
                type="checkbox"
                checked={props.todo.isCompleted}
                onChange={(event) => {
                    props.dispatch({
                        type: 'handleChecked',
                        payload: { value: props.todo.isDone, index: props.index }
                    })
                }}
            />
            <span>{props.todo.title}</span>
            <button
                onClick={(event) => {
                    props.dispatch({
                        type: "deleteTodo",
                        payload: props.index
                    })
                }}
            >X</button>
        </li>
    )
}

export default connect()(Todo);