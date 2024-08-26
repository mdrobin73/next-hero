import { getPosts } from '@/myServices/postApi';
import Link from 'next/link';
import React from 'react';


const PostsPage = async () => {
    const postsData = await getPosts();
    // console.log(postsData);

    return (
        <div>
            <h2 className='text-3xl font-bold pt-5 underline'>Your All Posts:</h2>

            <div className='flex flex-wrap content-start gap-10 max-w-6xl mx-auto py-10'>
                {
                    postsData?.slice(0, 20)?.map(({id, title, body}) => 
                    <div key={id} className='border border-red-500 p-5 md:max-w-[350px] rounded bg-slate-900 text-slate-200 space-y-4 shadow-lg'>
                        <h2 className='text-2xl font-semibold border-b pb-2'>{title}</h2>
                        <p>{body}</p>
                        <button className='border border-red-400 p-3 rounded bg-slate-800'><Link href={`/posts/${id}`}>View Post</Link></button>
                    </div>)
                }
            </div>

            <div className='pb-16 max-w-36 mx-auto'>
                <button className='bg-red-400 p-4 rounded font-semibold text-slate-200 w-full border border-slate-900 shadow-lg'>Load more</button>
            </div>
        </div>
    );
};

export default PostsPage;