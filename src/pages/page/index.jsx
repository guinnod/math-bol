import './page.css'
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { Sidebar } from '../../components/sidebar';
import { useContext } from 'react';
import { DefaultContext } from '../../Context';
import { LoadTask } from '../../components/load-task';
import { SortStudents } from '../../components/sort-students';

export const Page = ({ content }) => {
    const { isAlert, setIsAlert, isAlertList, setIsAlertList } = useContext(DefaultContext);
    return (
        <div className='page__anchor'>
            <Header size={30} />
            <div className='page__content__anchor'>
                <Sidebar />
                <div className='page__content'>
                    {content}
                </div>
            </div>
            {isAlert ? <div className='page__alert'><div className='page__alert__click' onClick={() => { setIsAlert(false) }}></div><LoadTask /></div> : <></>}
            {isAlertList ? <div className='page__alert'><div className='page__alert__click' onClick={() => { setIsAlertList(false) }}></div><SortStudents /></div> : <></>}
            <Footer />
        </div>
    );
};