import './task.css';
export const Task = () => {
    return (
        <div className='anchorTask'>
            <div>
                <p>Lesson#1, Task</p>
                <div>
                    jdsbs;a ;sdzbl.d e;isfjsn dsz.ulghd v;udhbljvd
                    fbv;lizhdsnv dv
                    sdvvi;szlbv v
                    dv;zsdbv;jlcv'oisr v
                    vvrbsz;jdvdsj <var>s
                        zov;zsdlv's;dv'zxjv'sdzphhv

                        zsdfv;ljzsd'vizsdv
                        zsdvzsdv
                    </var>4
                    dipvs'izd'vnvds
                    v4zfvnz'sdvvizsdvnz <var>zsdvivnzs'vn
                        zsd4z

                    </var>
                </div>
            </div>

            <div className='anchorUpload'>
                <div id='inputTask'>
                    <div style={{ position: 'absolute', marginLeft: '20px' }}>Енгізу...</div>

                    <input type="file" id='inputFile' />
                </div>

                <div style={{ display: 'flex' }}>

                    <div className='btn blue'>Жою</div>
                    <div className='btn red'>Жүктеу</div>
                </div>
            </div>
        </div>
    );
};