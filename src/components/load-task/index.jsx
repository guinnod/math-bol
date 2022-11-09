import { useContext } from 'react';
import { DefaultContext } from '../../Context';
import './load-task.css';
export const LoadTask = () => {
    const { setIsAlert } = useContext(DefaultContext);
    return (
        <div className='anchor-load'>
            <div>
                <div className='load-up'>
                    <div className='load-text'>Lesson:</div>
                    <input type="text" id='lesson' className='load-url' />
                </div>
                <div className='load-up'>
                    <div className='load-text'>Тақырып:</div>
                    <input type="text" id='title' className='load-url' />
                </div>
                <div className='load-up'>
                    <div className='load-text'>Бейне:</div>
                    <input type="text" id='video' className='load-url' />
                </div>
                <div className='load-up'>
                    <div className='load-text'>Тапсырма:</div>
                    <input type="text" id='task' className='load-url' />
                </div>

            </div>
            <div className='load-submit'>
                <div className='load-button red-load' onClick={() => { setIsAlert(false) }}>
                    Delete
                </div>
                <div className='load-button ' onClick={() => { setIsAlert(false) }}>
                    Done
                </div>
            </div>
        </div>
    );

}