import React from 'react';

const page = ({ params }) => {
    // console.log(params.slug);
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
    const {title, description} = blogs.find(blog => blog.slug == params.slug);

    return (
        <div className='p-10 space-y-5 bg-slate-900 text-slate-200 w-2/3 mt-10 mx-auto border border-red-400 rounded-md shadow-lg'>
            <h2 className='text-2xl font-semibold'>{title}</h2>
            <p>{description}</p>
        </div>
    );
};

export default page;