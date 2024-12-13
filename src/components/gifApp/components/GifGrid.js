import {useFetchGifs} from "../../../hooks/useFetchGifs";

export const GifGridApp = ({category}) => {

    const {img, loading}  = useFetchGifs(category)


    return (
        <div className={"gif-section"}>
            <h3 >{category}</h3>
            {loading && <p>Loading...</p>}
            <div className={"gif-imgs-cointainer"}>
                {img?.map((i) => (
                    <div className={'fade-in'}>
                        <div title={i.title} className={"hover-area"}  id={i.id}></div>
                        <img key={i.id} src={i.url} alt={''}/>
                    </div>
                ))}
            </div>
        </div>
    );

};
