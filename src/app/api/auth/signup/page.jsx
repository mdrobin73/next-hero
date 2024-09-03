"use client"

import React from 'react';

const page = () => {

    const handleregister = async (event) => {

        event.preventDefault();
        const newUser = {
            name: event.target.name.value,
            email: event.target.email.value,
            password: event.target.password.value,
            image: event.target.image.value,
            type: event.target.type.value
        }

        const res = await fetch("http://localhost:3000/api/auth/signup/new-user", {
            method: "POST",
            body: JSON.stringify(newUser),
            headers: {
                "content-type": "application/json"
            }
        })
        console.log(res);
    }

    return (
        <div>
            <div className='p-10 text-slate-900 flex flex-row-reverse justify-center items-center'>
                <h6 className='text-3xl ml-10 italic font-bold'>Please Sign Up with Email and Password</h6><br />

                <div>
                    <form onSubmit={handleregister} action="">
                        <label htmlFor="name">Name</label><br />
                        <input className='px-4 py-2 rounded-sm' type="text" name="name" id="one" placeholder='User Name' /><br /><br />

                        <label htmlFor="email">Email</label><br />
                        <input className='px-4 py-2 rounded-sm' type="email" name="email" id="two" placeholder='Email' /><br /><br />

                        <label htmlFor="password">Password</label><br />
                        <input className='px-4 py-2 rounded-sm' type="password" name="password" id="three" placeholder='Password' /><br /><br />
                        
                        <label htmlFor="image">Image</label><br />
                        <input className='px-4 py-2 rounded-sm' type="text" name="image" id="four" placeholder='image' /><br /><br />

                        <label htmlFor="type">Type</label><br />
                        <select name="type" className='p-2'>
                            <option value="admin">Admin</option>
                            <option value="moderator">Moderator</option>
                            <option value="member">Member</option>
                        </select><br /><br />

                        <button className='bg-red-500 px-3 py-2 rounded-md text-slate-50 hover:bg-red-600 transition-all'>Register</button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default page;