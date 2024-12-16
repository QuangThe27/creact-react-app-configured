import React from 'react';

/*
    JSX -> Return về block
*/

class MyComponent extends React.Component {
    render() {
        return (
            <div>
                <from>
                    <label for="fname">First name:</label>
                    <input type="text" value="John" /> <br />
                    <label for="lname">Last name:</label>
                    <input type="text" value="Doe" /> <br />
                    <input type="submit" value="Submit" />
                </from>
            </div>
        );
    }
}

export default MyComponent;
