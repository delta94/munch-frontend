import React from "react"

class Signup extends React.Component{
    state={
        /* avatar: "", // ideally want this to be an option for users to upload an image so it can be more interactive */
        username: "",
        email: "",
        password: "",
        confirm_password: "",
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    
    localSignupHandler = (e) => {
        e.preventDefault()
        this.props.signUpHandler(this.state)

        this.setState(()=>({
            username: "",
            email: "",
            password: "",
            confirm_password: ""
        }))
    }
    
    // validate = () => {
    // }


    render(){
        return(
            <>
            <h4>Create a new account below</h4>
            <form onSubmit={this.localSignupHandler}>
                <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.changeHandler} />
                <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.changeHandler} />
                <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.changeHandler} />
                <input type="password" name="confirm_password" placeholder="Confirm Password" value={this.state.confirm_password} onChange={this.changeHandler} />
                <input type="submit" value="sign up" />
            </form>
            </>
        )
    }
}

export default Signup