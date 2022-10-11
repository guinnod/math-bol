import './main.css';
import { Task } from '../../components/task';
import { VideoLesson } from '../../components/video';
export const Main = ({ isTask }) => {
isTask = false;
    return (
            <div className='anchorMain'>
                {isTask ?
                    <VideoLesson /> :
                    <Task />}
            </div>
    );
};