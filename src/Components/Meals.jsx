"use client"

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Meals = () => {

    const [search, setSearch] = useState("a");
    const [error, setError] = useState("");
    const [meals, setMeals] = useState([]);

    const searchMeal = async () => {
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`)
            const data = await res.json();
            setMeals(data.meals);
            setError("");
        } catch (error) {
            // console.log(error);
            setMeals([]);
            setError("No data found!")
        }
    }

    const handleSearch = (e) => {
        // console.log(e.target.value);
        setSearch(e.target.value);
    }

    useEffect(() => {
        searchMeal();
    }, [])

    return (
        <div className='mt-5'>
            <div className='flex flex-row-reverse items-center justify-between'>
                <div className='shadow-md'>
                    <input onChange={handleSearch} className='border-transparent bg-slate-200 p-4 outline-none border rounded text-sm' type="text" name="" id="" placeholder='Search meal' />
                    <button onClick={() => searchMeal()} className='bg-red-400 p-4 border rounded text-slate-200 text-sm'>Search</button>
                </div>

                <div>
                    <h2 className='my-7 text-2xl font-semibold bg-slate-900 text-slate-200 p-4 rounded max-w-[250px] text-center border border-red-400 shadow-lg'>Meals Found: {meals.length}</h2>
                </div>
            </div>

            <div className=''>
                {
                    meals?.length > 0 && !error && meals?.map((meal) =>
                        <div className='border mb-10 flex p-2 bg-slate-100 rounded shadow-lg' key={meal.idMeal}>
                            <div className='w-1/4'>
                                <Image className='w-full' src={meal.strMealThumb} alt={meal.strMeal} width={250} height={250}></Image>
                            </div>

                            <div className='ml-5 w-3/4'>
                                <h2 className='text-2xl font-semibold'>{meal.strMeal}</h2>
                                <p>{meal?.strInstructions.slice(0, 500)} <Link className='bg-red-400 p-2 block w-1/6 rounded text-center ml-auto text-slate-200 mt-6' href={""}>Read More</Link></p>
                            </div>
                        </div>)
                }

                {
                    error && <h2>{error}</h2>
                }
            </div>
        </div>
    );
};

export default Meals;