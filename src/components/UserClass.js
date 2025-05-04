import React from 'react';
class UserClass extends React.Component {

     constructor(props){
        super(props);
        console.log(props);
        this.state = {
            count: 0
        }
    }

    render(){

        const {name, location} = this.props;
        const {count} = this.state;
        return(
            <div className="user-details">
                <h3>Count: {count}</h3><button onClick={()=>{
                    this.setState({
                        count: this.state.count+1
                    });
                }}>Increase Count</button>
                <h3>User: {name}</h3>
                <h4>Location: {location} </h4>
                <h5>Contact: janardhanv@gmail.com</h5>
    
            </div>
        )
    }
}

export default UserClass;