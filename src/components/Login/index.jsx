import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const Login = () => {
  return (
    <div>
      <Link to="/dashboard">
        <Button className="px-2">Login</Button>
      </Link>
    </div>
  );
}

export default Login