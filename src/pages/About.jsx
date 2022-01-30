import Card from "../shared/Card";
import {Link} from "react-router-dom"


const About = () => {
  return <Card>
      <div className="about">
          <h1>About This Project</h1>
          <p>This is a react app for feedback</p>
          <p>Version 1.0.0</p>
          <p>
              <Link to="/">Go back to home</Link>
          </p>
      </div>
  </Card>;
};

export default About;
