import './sort-students.css';
export const SortStudents = () => {
    let students = [{ name: 'Айсағали Шапағат', email: 'shapoo@gmail.com', idx: 1 }];
    return (
        <div className='sort-students__anchor'>
            <h2>Оқушылар тізімі</h2>
            <div className='row__first'>
                <input type="email" id="email-sort" placeholder='email...'/>
                <div className='sign sign--plus'>+</div>
            </div>
            <div>
                {students.map((e)=>(
                    <div key={e.idx} className='list__row'>
                        <h4>{e.name}</h4>
                        <h4>{e.email}</h4>
                        <div className='sign sign--minus'>-</div>
                    </div>
                ))}
            </div>
        </div>
    );
};