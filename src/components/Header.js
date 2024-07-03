import { Bars3Icon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';


export default function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);


    return (
        <header className="flex justify-between p-5 bg-primary text-white sticky top-0 z-50">
            <a href="#" className="font-bold">PORTFOLIO</a>
            <nav className="hidden md:block">
                <ul className="flex cursor-pointer">
                <li><HashLink to="/#skills-section">Skills Acquired</HashLink></li>
                <li><HashLink to="/#project-section">My Projects</HashLink></li>

                </ul>
            </nav>
            {toggleMenu && (
  <nav className="block md:hidden h-auto w-auto">
    <ul className="flex flex-col mobile-nav cursor-pointer ">
      <li className="text-center">
        <HashLink to="/#skills-section">Skills Acquired</HashLink>
      </li>
      <li>
        <HashLink to="/#project-section">My Projects</HashLink>
      </li>
    </ul>
  </nav>
)}

            <button onClick={() => setToggleMenu(!toggleMenu)} className='block md:hidden'>
                <Bars3Icon className='text-white h-7' />
            </button>
        </header>
    );
}
