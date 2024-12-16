import React from 'react';
import './ListTodo.scss';
import AddTodo from './AddTodo';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class ListTodo extends React.Component {
    state = {
        ListTodos: [
            { id: 1, title: 'TheQuang' },
            { id: 2, title: 'TheQuyet' },
            { id: 3, title: 'TheCanh' },
        ],
    };

    // Add Todo, sử dụng phương phán Spread syntax (...)
    addNewTodo = (todo) => {
        this.setState({
            ListTodos: [...this.state.ListTodos, todo],
        });

        // Sử dụng thư viện react-toastify làm thông báo khi thêm thành công
        toast.success('Thêm thành công!');
    };

    render() {
        let { ListTodos } = this.state;
        // let ListTodos = this.state.Listodos

        return (
            <div className="list-todo-container">
                <AddTodo addNewTodo={this.addNewTodo} />

                <div className="list-todo-content">
                    {ListTodos &&
                        ListTodos.length > 0 &&
                        ListTodos.map((item, index) => {
                            return (
                                <div className="todo-child" key={item.id}>
                                    <span>
                                        {index + 1} - {item.title}
                                    </span>
                                    <button className="edit">Edit</button>
                                    <button className="delete">Delete</button>
                                </div>
                            );
                        })}
                </div>
            </div>
        );
    }
}

export default ListTodo;
