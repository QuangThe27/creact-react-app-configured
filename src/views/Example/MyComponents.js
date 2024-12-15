import React from 'react';

/*
    JSX -> Return về block
*/

class MyComponent extends React.Component {
    state = {
        name: 'TheQuang',
        age: 21,
    };

    handleOnChangeName = (e) => {
        this.setState({
            age: e.target.value,
        });
    };

    render() {
        let name = 'Nguyễn Thế Quang';
        return (
            <div className="mycpn">
                <p>
                    Nhập tuổi của bạn{' '}
                    <input type="text" value={this.state.age} onChange={(e) => this.handleOnChangeName(e)} />
                </p>
                Hello my component {name}, {this.state.age} tuổi
            </div>
        );
    }
}

export default MyComponent;
