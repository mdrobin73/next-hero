// import { redirect } from "next/navigation";
import React from 'react';

export const getPosts = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`);
    const data = await res.json();
    // console.log(data);
    // if (data) {
    //     redirect(`/posts/${data[0].id}`)
    // }
    return data;
}