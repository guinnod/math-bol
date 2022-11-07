import './task.css';
export const Task = () => {
    return (
        <div className='task__anchor'>
            <div>
                <p>Lesson#1, Task</p>
                <div>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio itaque alias harum nemo, eveniet quae libero quam ipsam numquam necessitatibus! Ipsum, pariatur laudantium animi doloribus non excepturi dolorem officia incidunt!
                </div>
            </div>
            <div className='task__upload'>
                <div id='task__input'>
                    <div style={{ position: 'absolute', marginLeft: '20px' }}>Енгізу...</div>

                    <input type="file" id='input__file' />
                </div>

                <div style={{ display: 'flex' }}>
                    <div className='task__button --blue'>Жою</div>
                    <div className='task__button --red'>Жүктеу</div>
                </div>
            </div>
        </div>
    );
};