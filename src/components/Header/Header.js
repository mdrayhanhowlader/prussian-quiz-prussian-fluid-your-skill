import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className='shadow-xl shadow-violet-200'>
            <div className='w-4/5 mx-auto py-8 grid grid-cols-2 justify-center items-center'>
                <div className="">
                    <Link to='/home'><h2 className='text-3xl uppercase font-semibold tracking-widest text-violet-500'>Prussian</h2></Link>
                </div>

                <div className="flex justify-end">
                <div onClick={() => setOpen(!open)} className="h-6 w-6 md:hidden">
                {
                    open ? <XMarkIcon /> : <Bars3Icon />
                }
                </div>
                    <nav className={`md:flex md:justify-center md:static absolute duration-500 ease-in z-[100] w-2/5 ${open ? 'top-[120px]' : 'top-[-200px]'}`}>
      
                    <Link className='block md:inline md:mr-6 pl-2 text-white bg-violet-400 hover:bg-red-400 md:hover:bg-inherit md:bg-inherit md:text-black py-2 md:py-0 mb-2 md:mb-0 hover:text-violet-500 font-medium' to="/home">Home</Link>
                    <Link className='block md:inline md:mr-6 pl-2 text-white bg-violet-400 hover:bg-red-400 md:hover:bg-inherit md:bg-inherit md:text-black py-2 md:py-0 mb-2 md:mb-0 hover:text-violet-500 font-medium' to="/topics">Topics</Link>
                    <Link className='block md:inline md:mr-6 pl-2 text-white bg-violet-400 hover:bg-red-400 md:hover:bg-inherit md:bg-inherit md:text-black py-2 md:py-0 mb-2 md:mb-0 hover:text-violet-500 font-medium' to="/statistics">Statistics</Link>
                    <Link className='block md:inline md:mr-6 pl-2 text-white bg-violet-400 hover:bg-red-400 md:hover:bg-inherit md:bg-inherit md:text-black py-2 md:py-0 mb-2 md:mb-0 hover:text-violet-500 font-medium' to="/blog">Blog</Link>

                    {/* <Link className='mr-6 hover:text-violet-500 font-medium' to="/topics">Topics</Link>
                    <Link className='mr-6 hover:text-violet-500 font-medium' to="/statistics">Statistics</Link>
                    <Link className='mr-6 hover:text-violet-500 font-medium' to="/blog">Blog</Link> */}
                    </nav>
                </div>

            </div>
        </div>
    );
};

export default Header;