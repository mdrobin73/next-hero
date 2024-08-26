import React from 'react';

// export const metadata = {
//     title: "Post Details",
//     description: "This is from post details"
// }


const getPostDetails = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json();
    return data;
}

export const generateMetadata = async ({params}) => {

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const postData = await res.json();

    return {
        title: {
            absolute: `${postData.title}`
        },
        description: postData.body,
        keywords: postData.body.split(" ")
    }
}

const postDetailsPage = async ({params}) => {
    // console.log(params);
    const {title, body} = await getPostDetails(params.id);

    return (
        <div className='p-10'>
            <h2 className='text-2xl font-semibold mb-4'>Title: {title}</h2>
            <p>Details: {body}</p>
        </div>
    );
};

export default postDetailsPage;