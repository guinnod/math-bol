import './main.css';
import { Task } from '../../components/task';
import { VideoLesson } from '../../components/video';
import { useContext } from 'react';
import { DefaultContext } from '../../Context';
import { useEffect } from 'react';
export const Main = () => {
    const { isTask, setIsAuth } = useContext(DefaultContext);
    useEffect(() => {
        setIsAuth(true);
        console.log('true');
    }, [setIsAuth]);
    return (
        <div className='anchorMain'>
            {isTask ?
                <Task /> :
                <VideoLesson />}
        </div>
    );
};