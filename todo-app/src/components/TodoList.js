import { connect } from "react-redux";
import Todo from "./Todo";

function TodoList(props) {
    console.log(props)
    return (
        <ul>
            {
                props.data.map((todo, i) => {
                    console.log(todo)
                    return <Todo key={i} todo={todo} index={i} />
                })
            }
        </ul>
    )
}

function mapStateToProps(state) {
    return {
        data: state.data
    }
}

export default connect(mapStateToProps)(TodoList);