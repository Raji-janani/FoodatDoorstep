
import React from "react"

class UserClass extends React.Component{

constructor(props){
    super(props);
    
    this.state = {
       userInfo:{
        name: "xxx",
        location: "yyy"
       }
    }
}

async componentDidMount(){
    const data = await fetch("https://api.github.com/users/Raji-janani")
    const json = await data.json();
    console.log(json);
    this.setState({
        userInfo : json
    })
}

    render() {
    //   const   { name, location} = this.props;
    //   const {name, location} = this.state.userInfo;



        return(
           <div className="user-card">
            <h2>name: {this.state.userInfo.name}</h2>
            <h3>location: {this.state.userInfo.location}</h3>
           </div>
        )
    }
}

export default UserClass;