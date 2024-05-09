import logo from "../assets/Mass_Effect_logo.png"
import { Outlet, Link } from "react-router-dom";
function Smalllogo () {
    return (
        <div className="w-32 h-8 logo">
            <Link to="/"><img src={logo}></img></Link>
        </div>
    )
}
export default Smalllogo;