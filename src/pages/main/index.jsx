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
    }, [setIsAuth]);
    return (
        <div className='main__anchor'>
            {isTask ?
                <Task /> :
                <VideoLesson />}
        </div>
    );
};