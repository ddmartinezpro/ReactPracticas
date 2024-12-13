
export const getGifs = async (category) => {

    const gifApiKey = 'O6YE8lxbm3OOev7bOclxOnbOSFIVwa5u';
    const limit = 10; // Este limite se puede pasar como argumento
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${gifApiKey}&q=${encodeURI(category)}&limit=${limit}`;

    const rsp = await fetch(url);
    const {data} = await rsp.json();
    return data.map((img) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized.url,
    }));

    ;
}
