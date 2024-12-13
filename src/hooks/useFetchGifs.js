import {useEffect, useState} from "react";
import {getGifs} from "../helpers/getFetchGifs";


export const useFetchGifs = (category) => {
    const [state, setState] = useState({img: [], loading: true});

    // El use Efect se usa para que solo se vuelva a hacer la peticion si la categoria cambia
    useEffect(() => {
        getGifs(category).then(img => {
            setState({img, loading: false})
        });
    }, [category]);

    return state;
}
