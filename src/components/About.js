import User from "./User";
import UserClass from "./UserClass"
const About = () => {
    return(
        <div>
        <h1>This is About page</h1>
        {/* <User name={"Janardhan Rao"} location={"Cyberjaya"}/> */}
        <UserClass name={"Janardhan Rao"} location={"Cyberjaya"}/>
        </div>
    )
}

export default About;