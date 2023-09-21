import { useState } from "react";
import Link from "../Link/link";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const NavBar = () => {

    const [openMenu, setOpenMenu] = useState(false);

    const routes = [
        { path: '/', name: 'Home', id: 0 },
        { path: '/about', name: 'About', id: 1 },
        { path: '/products', name: 'Products', id: 2 },
        { path: '/products/:id', name: 'Product Detail', id: 3 },
        { path: '/contact', name: 'Contact', id: 4 },
    ];

    return (
        <nav className="bg-yellow-200 p-6">
            <div className="md:hidden text-2xl" onClick={() => setOpenMenu(!openMenu)}>
                {
                    openMenu === true ? 
                    <AiOutlineClose></AiOutlineClose> 
                    : <AiOutlineMenu></AiOutlineMenu>
                }
                
            </div>
            <ul className={`md:flex absolute md:static duration-1000 ${openMenu ? 'top-16' : '-top-60'} bg-yellow-200 px-6 rounded-4`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;