"use client"
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const NavBar = () => {

    const pathName = usePathname();
    const router = useRouter();
    const session = useSession();
    console.log(session);

    const links = [
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Services",
            path: "/services"
        },
        {
            title: "Contact",
            path: "/contacts"
        },
        {
            title: "Categories",
            path: "/categories"
        },
        {
            title: "Posts",
            path: "/posts"
        },
        {
            title: "Dashboard",
            path: "/dashboard"
        },
        {
            title: "Meals",
            path: "/meals"
        },
        {
            title: "Gallery",
            path: "/gallery"
        },
        {
            title: "Blogs",
            path: "/blogs"
        },
        {
            title: "Test",
            path: "/test"
        },
    ]

    const handleLogin = () => {
        // router.push("/login");
        router.push("/api/auth/signin");
    };

    if (pathName.includes("dashboard")) {
        return (
            <header>
                <div className='bg-purple-900 text-slate-100 p-10 text-2xl font-semibold'>
                    <h2>Dashboard Layout Header...</h2>
                </div>
            </header>
        )
    }

    return (
        <nav className="bg-red-400 text-slate-900 flex justify-between py-5 px-7 font-semibold items-center">
            <h2 className="text-2xl italic shadow-md">Next <span className="text-slate-200 font-extrabold italic">Hero</span></h2>
            <div className='flex items-center'>
                <ul className="flex space-x-5 font-normal">
                    {/* <li><Link href={"/home"}>Home</Link></li>
            <li><Link href={"/about"}>About</Link></li>
            <li><Link href={"/services"}>Services</Link></li>
            <li><Link href={"/contacts"}>Contact</Link></li> */}
                    {
                        links?.map(link => <Link className={`${pathName === link.path && "text-slate-200"}`} key={link.path} href={link.path}>{link.title}</Link>)
                    }
                </ul>

                {session.status === "authenticated" && <div className='ml-5 text-sm border border-1 p-2 bg-slate-900 text-slate-200 rounded-xl italic'>
                    <h6>
                        {session?.data?.user?.name} <br />
                        {session?.data?.user?.type}
                    </h6>
                </div>}

                {session.status === "authenticated" && <div className='ml-1'>
                    <Image src={session?.data?.user?.image} alt={session?.data?.user?.name} height={"50"} width={"50"} className='rounded-full' />
                </div>}

                {session.status === "unauthenticated" ? <button onClick={handleLogin} className='bg-slate-900 text-slate-200 px-3 py-2 rounded-lg border shadow-md ml-10 border-slate-200 font-normal text-sm'>Login</button> :
                    <button onClick={() => { signOut() }} className='bg-slate-900 text-slate-200 px-3 py-2 rounded-lg border shadow-md ml-3 border-slate-200 font-normal text-sm hover:bg-slate-950'>Log out</button>}

                {session.status === "unauthenticated" && <Link href={"api/auth/signup"}>
                    <button className='bg-slate-900 text-red-400 px-3 py-2 rounded-lg border shadow-md ml-1 border-slate-200 font-normal text-sm hover:bg-slate-950'>Sign Up</button>
                </Link>}
            </div>
        </nav>
    );
};

export default NavBar;


{/* <div>
    <header>
        <div className='bg-purple-900 text-slate-100 p-10 text-2xl font-semibold'>
            <h2>Dashboard Layout Header...</h2>
        </div>
    </header>

    <main>
        <div>
            {children}
        </div>
    </main>

    <footer>
        <div>
            <h2 className='font-semibold'>Dashboard Layout Footer...</h2>
        </div>
    </footer>
</div> */}