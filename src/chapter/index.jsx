import './chapter.css';

export const Chapter = ({chapterName}) => {
    return (
        <div className='anchorChapter'>
            <div className='triangleChapter'></div>
            <p>{chapterName}</p>
        </div>
    );
};