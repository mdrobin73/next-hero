import React from 'react';

const CategoriesDetailsPage = ({ params }) => {

    // console.log(params.slug);
    if (params.slug.length == 3) {
        return (
            <div>
                <h2>{params.slug[2]}</h2>
            </div>
        )
    }
    if (params.slug.length == 2) {
        return (
            <div>
                <h2>{params.slug[1]}</h2>
            </div>
        )
    }
    if (params.slug.length == 1) {
        return (
            <div>
                <h2>{params.slug[0]}</h2>
            </div>
        )
    }

    return (
        <div>
            <h2>Categories Details Page</h2>
        </div>
    );
};

export default CategoriesDetailsPage;