import './page.css'
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { Sidebar } from '../../components/sidebar';

export const Page = ({ content }) => {
    return (
        <div className='page__anchor'>
            <Header size={30} />
            <div className='page__content__anchor'>
                <Sidebar />
                <div className='page__content'>
                    {content}
                </div>
            </div>
            <Footer />
        </div>
    );
};