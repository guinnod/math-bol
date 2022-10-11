import './page.css'
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { Sidebar } from '../../components/sidebar';

export const Page = ({ content }) => {
    return (
        <div className='anchor-page'>
            <Header />
            <div className='anchor-content'>
                <Sidebar />
                {content}
            </div>
            <Footer />
        </div>
    );
};