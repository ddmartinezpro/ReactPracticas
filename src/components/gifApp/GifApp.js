import React, {useState} from "react";
import AddCategory from "./components/AddCategory";
import {GifGridApp} from "./components/GifGrid";

const GifApp = () => {

    const [categories, setCategories] = useState(['Arcane']);

    return (
        <>
            <h1>Gif App</h1>
            <AddCategory setCategories={setCategories} />
            <hr/>

            <ul>
                {categories.map((item) => (
                    <GifGridApp key={item} category={item} />
                ))}
            </ul>
        </>
    );
};

export default GifApp;
