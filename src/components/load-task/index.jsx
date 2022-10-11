import './load-task.css';
export const LoadTask = () => {
    return (
        <div className='anchor-load'>
            <div className='load-up'>
                <div>Lesson:</div>
                <input type="text" id='lesson' className='load-url'/>
            </div>
            <div className='load-up'>
                <div>Тақырып:</div>
                <input type="text" id='title' className='load-url' />
            </div>
            <div className='load-up'>
                <div>Бейне:</div>
                <input type="text" id='video' className='load-url'/>
            </div>
            <div className='load-up'>
                <div>Тапсырма:</div>
                <input type="text" id='task' className='load-url'/>
            </div>
            <div className='load-submit'>
                <div className='load-button red-load'>
                    Delete
                </div>
                <div className='load-button '>
                    Done
                </div>
            </div>
        </div>
    );

}