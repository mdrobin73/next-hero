import Meals from '@/Components/Meals';
import React from 'react';
import styles from "./styles.module.css"

export const metadata = {
    title: {
        absolute: "Meals"
    },
    description: "Meals Page",
  };

const mealsPage = () => {

    return (
        <div className='p-8 '>
            <div className='text-center border-b p-5 text-slate-900 bg-slate-100 shadow-md'>
                <h2 className='text-4xl font-semibold text-slate-900'>Choose your favorite meals</h2>
                <p className={styles.font_tomato}>By searching you can select your favorite meals</p>
            </div>

            <Meals></Meals>
        </div>
    );
};

export default mealsPage;