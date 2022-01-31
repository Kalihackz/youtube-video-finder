import React from 'react';
import Video from './Video';
import SearchBar from '../SearchBar/SearchBar';
import './Main.scss';

const Main = () => {

    const [ ytData, setYtData ] = React.useState( [] );

    const [ search, setSearch ] = React.useState( "" );

    function handleChange( event ){

        const { name, type, value, checked } = event.target;

        setSearch( value );

    }

    function handleSubmit( event ){

        event.preventDefault();
        
        fetch(`https://kiwi-sequoia-effect.glitch.me/videos/${search}`)
        .then( ( res ) => res.json() )
        .then( ( data ) => {
            setYtData(data.items);
        } );
    
    }

    const ytList = ytData.map((data) => {
        return <Video key={data.id.videoId} url={data.url} videoTitle={data.title} publishDate={data.snippet.publishedAt} views={data.views} thumbnail={data.snippet.thumbnails.url} />
    });

    React.useEffect( () => {
    
        fetch('https://kiwi-sequoia-effect.glitch.me/videos/top+english+songs')
        .then( ( res ) => res.json() )
        .then( ( data ) => {
            setYtData(data.items);
        } );
    
    },[0]);

    return (
        <main>
            <form onSubmit={handleSubmit}>
                <SearchBar change={handleChange} searchValue={search} disableButton={search.length<1}/>
            </form>
            {ytList}
        </main>
    );
}

export default Main;