import Link from 'next/link';
import React from 'react';

const BlogsPage = () => {

    const blogs = [
        {
            slug: "introduction-to-javascript",
            title: "Introduction to JavaScript",
            description: "A beginner's guide to learning JavaScript, covering the basics and core concepts."
        },
        {
            slug: "css-flexbox-guide",
            title: "CSS Flexbox Guide",
            description: "Learn how to use CSS Flexbox to create flexible and responsive layouts with ease."
        },
        {
            slug: "react-hooks-overview",
            title: "React Hooks Overview",
            description: "An overview of React Hooks, how they work, and how to use them in your React applications."
        },
        {
            slug: "nodejs-and-express",
            title: "Building Web Applications with Node.js and Express",
            description: "A comprehensive guide to building web applications using Node.js and Express framework."
        },
        {
            slug: "introduction-to-python",
            title: "Introduction to Python",
            description: "Start your journey with Python, a versatile and powerful programming language."
        },
        {
            slug: "responsive-web-design",
            title: "Responsive Web Design Principles",
            description: "Learn the principles of responsive web design to create websites that work on all devices."
        },
        {
            slug: "getting-started-with-git",
            title: "Getting Started with Git",
            description: "A beginner's guide to version control using Git, including basic commands and workflows."
        },
        {
            slug: "vuejs-basics",
            title: "Understanding the Basics of Vue.js",
            description: "An introduction to Vue.js, a progressive JavaScript framework for building user interfaces."
        },
        {
            slug: "machine-learning-introduction",
            title: "Introduction to Machine Learning",
            description: "A primer on machine learning concepts, algorithms, and applications."
        },
        {
            slug: "building-restful-apis",
            title: "Building RESTful APIs",
            description: "Learn how to design and build RESTful APIs with best practices and modern tools."
        }
    ];

    return (
        <div className='p-20 flex flex-wrap content-start justify-center gap-10'>
            {
                blogs.map(blog => <div key={blog.slug} className='border border-red-400 p-10 bg-slate-900 text-slate-200 w-80 space-y-5 rounded-md shadow-lg'>

                    <h3 className='text-xl text-red-400'>{blog.title}</h3>

                    <p>{blog.description}</p>

                    <button className='border border-red-400 rounded-md'><Link className='p-4' href={`/blogs/${blog.slug}`}>Blog Details</Link></button>
                </div>)
            }
        </div>
    );
};

export default BlogsPage;