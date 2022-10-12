import { useContext, useState } from 'react';
import { DefaultContext } from '../../Context';
import './chapter.css';

export const Chapter = ({ chapterName }) => {
    const [showChoice, setShowChoice] = useState(false);
    const { setIsTask } = useContext(DefaultContext);
    return (
        <>
            <div className='anchorChapter'>
                <div className='triangleChapter' onClick={() => { setShowChoice(!showChoice) }}></div>
                <p>{chapterName}</p>
            </div>
            <div className={showChoice ? 'anchor-choice' : 'anchor-choice hide-choice'}>
                <div className='choice-text' onClick={() => { setIsTask(false)}}>
                    Бейнесабақ
                </div>
                <div className='choice-text' onClick={() => { setIsTask(true)}}>
                    Тапсырма
                </div>
            </div>
        </>
    );
};