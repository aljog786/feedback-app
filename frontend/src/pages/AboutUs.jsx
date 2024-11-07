import Card from "../components/shared/Card";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <Card>
        <div className="about">
            <h1>About this project</h1>
            <p>This is a feedback app</p>
            <p>version : 1.0</p>
            <p><Link to='/'>back to home</Link></p>
        </div>
    </Card>
  )
}
export default AboutUs