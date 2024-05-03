import { Outlet, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

function Navlinks() {
    return (
        <>
            <Link to="/">Home</Link>
            <Link to="/history">History</Link>
            <Link to="/companions">Comapnions</Link>
        </>
    )
}

function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavBar = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <div className="flex w-1/3 justify-end">
                <div className="hidden w-full md:flex justify-between">
                    <Navlinks />
                </div>
                <div className="md:hidden">
                    <button onClick={toggleNavBar}>
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="flex flex-col items-center basis-full">
                    <Navlinks />
                </div>
            )}
        </>
    )
}
export default Nav;