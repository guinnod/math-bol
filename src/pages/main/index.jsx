import './main.css';
import { Task } from '../../components/task';
import { VideoLesson } from '../../components/video';
import { useContext } from 'react';
import { DefaultContext } from '../../Context';
export const Main = () => {
    const { isTask } = useContext(DefaultContext);
    return (
        <div className='anchorMain'>
            {isTask ?
                <Task /> :
                <VideoLesson />}
        </div>
    );
};