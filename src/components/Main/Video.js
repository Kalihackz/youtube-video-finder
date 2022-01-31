import React from 'react';
import './Video.scss';

const Video = ( props ) => {
    return (
        <a href={props.url} className="link-url">
            <section className="video">
                <img className="video__thumbnail" src={props.thumbnail} alt="thumbnail" />
                <div className="video__details">
                    <div className="video__title">{props.videoTitle}</div>
                    <div className="video__meta">
                        <div className="video__views">{props.views<1? "LIVE" : `${props.views} views`}</div>
                        { props.views>1 ? 
                            <>
                                <div className="video__seperator">•</div>
                                <div className="video__time">{props.publishDate}</div>
                            </>
                            : 
                            <></> 
                        }
                    </div>
                    <div className="video__description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum cum laboriosam unde sit. Quas provident inventore laborum repellendus suscipit debitis, optio maiores at!</div>
                </div>
            </section>
        </a>
    );
}

export default Video;