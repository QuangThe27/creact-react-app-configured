import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class AddTodo extends React.Component {
    state = {
        title: '',
    };

    handleOnChangeTitle = (e) => {
        this.setState({
            title: e.target.value,
        });
    };

    handleAddTodo = () => {
        if (!this.state.title) {
            toast.error('Thêm thất bại!');
            return;
        } else {
            let todo = {
                id: Math.floor(Math.random() * 1000),
                title: this.state.title,
            };

            this.props.addNewTodo(todo);

            // Clear input sau khi thêm
            this.setState({
                title: '',
            });
        }
    };

    render() {
        let { title } = this.state;

        return (
            <div className="add-todo">
                <input type="text" value={title} onChange={(e) => this.handleOnChangeTitle(e)} />
                <button type="button" className="add" onClick={() => this.handleAddTodo()}>
                    Add
                </button>
            </div>
        );
    }
}

export default AddTodo;
