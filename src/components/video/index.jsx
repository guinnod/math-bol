import LazyLoad from 'react-lazy-load';
import YouTube from 'react-youtube';
import './video-lesson.css';
export const VideoLesson = () => {
    return (
        <div className='video__anchor'>
            <p>Lesson#1, Не үшін математиканы жек көресің?</p>
            <LazyLoad width={600}>
                <YouTube
                videoId='zuCRSwWssVk' 
                />
            </LazyLoad>
        </div>
    );
};