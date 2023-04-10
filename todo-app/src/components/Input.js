import { connect } from 'react-redux';

function Input(props) {

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                props.dispatch({
                    type: 'addTodo',
                    payload: { title: event.target.input.value, isDone: false }
                })
            }}
        >
            <input
                type="text"
                name="input"
                id='input'
                placeholder="Enter the todo"
            />
            <button type='submit'>Submit</button>
        </form>
    )

}


export default connect()(Input);