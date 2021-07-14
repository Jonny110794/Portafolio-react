import React from 'react';
import './Cover.css';
import coverVideo from '../../media/coverVideo.mp4';

const Cover = () => {
    return (
        <div className='cover-container'>
            <video className='video' src={coverVideo} autoPlay loop muted/>
            <h1>Jonathan Santano Morea</h1>
            <p>Develover | Desing | Banners | Business Cards</p>
        </div>
    )
};

export default Cover;


