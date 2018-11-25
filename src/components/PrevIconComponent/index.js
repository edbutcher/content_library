import React from 'react';

import { Link } from 'react-router-dom';

import headphones from '../../images/icons/headphones.svg';
import picture from '../../images/icons/picture.svg';
import videoCamera from '../../images/icons/video-camera.svg';
// import openBook from '../../images/icons/open-book-top-view.svg';

const PrevIconComponent = (props) => {
    const { type, fileName, fileId } = props.item;

    if(type === 'image/jpeg' || type === 'audio/mpeg' || type === 'video/mp4') {
        return (
            <div className="meadia__item">
                <Link to={`/media/${fileId}`}>
                    { type === 'image/jpeg' && <img src={picture} alt="img" /> }
                    { type === 'audio/mpeg' && <img src={headphones} alt="img" /> }
                    { type === 'video/mp4' && <img src={videoCamera} alt="img" /> }
                    <div>{ fileName }</div>
                </Link>
            </div>
        )
    } else {
        return <div></div>
    }
    
};

export default PrevIconComponent;