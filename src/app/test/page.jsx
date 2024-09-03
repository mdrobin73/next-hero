import { getServerSession } from 'next-auth';
import React from 'react';
import { authOptions } from '../api/auth/[...nextauth]/route';

const page = async () => {
    const session = await getServerSession(authOptions);
    console.log({session});

    return (
        <div>
            <h1 className='text-2xl font-semibold p-10'>Trying to get login session data in server components.</h1>
        </div>
    );
};

export default page;