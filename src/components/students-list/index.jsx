import './students-list.css';
export const StudentsList = () => {
    let students = [{ name: 'Sabitov Zhanbolat', email: 'zhanbo@stu.sdu.edu.kz', index: 0, percent: 99 }, { name: 'a', email: 'a', percent: 7 }];
    return (
        <div className='students-list-anchor'>
            <h2>Оқушылар тізімі</h2>
            <div className='rows'>
                {students.map((e) => (
                    <div className='list-row' key={e.index}>
                        <div>
                            <h4>{e.name}</h4>
                            <h4>{e.email}</h4>
                        </div>
                        <div>
                            <div className="plus nums">+</div>
                            <div className="upload">Zhukteu</div>
                            <div className="pricing">Bagalau</div>
                            <div className="percentage nums">{e.percent}%</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};