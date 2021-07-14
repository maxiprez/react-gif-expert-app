import React, { useState } from 'react';
import AddCategory from './AddCategory';
import GifGrid from './GifGrid';

export default function GifExpertApp() {


const [categories, setCategories] = useState(['rick and morty']);


    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory add={ setCategories } />
            <hr />
           
            <ul>
                {
                    categories.map( category =>(
                        <GifGrid 
                        key={category}
                        category={category}/>
                       )
                    )}
            </ul>
        </>
    )
}

