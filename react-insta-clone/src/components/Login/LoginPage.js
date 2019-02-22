import React from 'react';



class LoginPage extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
    }
    
    submitHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleLoginSubmit = e => {
        const user = this.state.username;
        localStorage.setItem('userName', user);
        window.location.reload();
    }
    
    
    render() {
        return (
            <div>
                <input 
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={this.state.username}
                    onChange={this.submitHandler} 
                />
                <input 
                    type="text"
                    name="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.submitHandler} 
                />
                <button onClick={this.handleLoginSubmit}>Login</button>
            </div>
        );
    }  
}

export default LoginPage;