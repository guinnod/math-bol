import { useContext, useState } from 'react';
import { DefaultContext } from '../../Context';
import './chapter.css';

export const Chapter = ({ chapterName }) => {
    const [showChoice, setShowChoice] = useState(false);
    const { setIsTask } = useContext(DefaultContext);
    return (
        <>
            <div className='chapter__anchor'>
                <div className='chapter__triangle' onClick={() => { setShowChoice(!showChoice) }}></div>
                <p>{chapterName}</p>
            </div>
            <div className={showChoice ? 'chapter__choice' : 'chapter__choice choice--hide'}>
                <div className='chapter__text' onClick={() => { setIsTask(false) }}>
                    Бейнесабақ
                </div>
                <div className='chapter__text' onClick={() => { setIsTask(true) }}>
                    Тапсырма
                </div>
            </div>
        </>
    );
};