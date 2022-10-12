import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div>
            <div className='w-4/5 mx-auto'>
            <div className='bg-slate-300 rounded my-6 p-4'>
                <h2 className='font-semibold text-2xl'>What is the purpose of react routes?</h2>
                <p>A tool that allows you to handle routes in a web app,
                using dynamic routing. Dynamic routing takes place as
                the app is rendering on your machine, unlike the old 
                routing architecture where the routing is handled in
                a configuration outside of a running app. React router
                implements a component-based approach to routing.
                It provides different routing components according 
                to the needs of the application and platform. The 
                following illustration shows how react router’s 
                dynamic routing works as compared to traditional 
                static routing.</p>
            </div>
            <div className='bg-slate-300 rounded my-6 p-4'>
                <h2 className='font-semibold text-2xl'>How does context api works?</h2>
                <p>The React Context API was been around
                as an experimental feature for a while 
                now but finally became safe to use in production
                last year, solving one major problem React problem
                — prop drilling. In this article, Toptal Freelance
                Javascript Developer Boris Yordanov will introduce
                us to the API and illustrate it with two basic web
                store apps, one built with the Context API and one
                without it.</p>
            </div>
            <div className='bg-slate-300 rounded my-6 p-4'>
                <h2 className='font-semibold text-2xl'>What is useRef Hook and how does works?</h2>
                <p>A hook is a special function which enables one use state
                 and other React features without writing ES6 class 
                 components which are generally considered difficult 
                 to understand, use and master.
                 useRef hook is part of the React Hooks API. It is a 
                 function which takes a maximum of one argument and 
                 returns an Object. The returned object has a property 
                 called current whose value is the argument passed to 
                 useRef. If you invoke it without an argument, the 
                 returned object's current property is set to undefined.
                 The code below illustrates how to invoke the useRef hook
                 in functional components</p>
            </div>
            </div>
            
        <div className='text-center mt-12'>
        <Link className='py-4 px-8 text-center bg-violet-500 text-slate-200 hover:bg-pink-400 rounded-md' to='/'>Back To Home</Link>
        </div>
        </div>
    );
};

export default Blog;