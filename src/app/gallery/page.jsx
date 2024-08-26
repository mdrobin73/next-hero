import Image from 'next/image';
import React from 'react';

const page = () => {
    return (
        <div className='p-10'>
            <h2 className='text-2xl font-semibold'>Gallery Page</h2>

            <div>
                {
                    [1, 2, 3, 4, 5]?.map((img) => (
                        <Image key={img} src={`/images/${img}.jpg`} alt="" height="1080" width="1920" />
                    ))
                }
            </div>

            {/* <Image src="/images/02.jpg" alt="" height="1080" width="1920"/> */}
        </div>
    );
};

export default page;