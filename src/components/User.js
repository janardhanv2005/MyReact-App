import { useState } from "react";
const User = ({name, location}) => {

    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(1);
    return(
        <div className="user-details">
            <h3>Count: {count}</h3>
            <h3>Count2: {count2}</h3>
            <h3>User: {name}</h3>
            <h4>Location: {location} </h4>
            <h5>Contact: janardhanv@gmail.com</h5>

        </div>
    )
}

export default User;