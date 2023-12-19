
//import react from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const HomeLayout = ({ children }) => {
    return(
        <div>
        <Header/>

        <h1>{children}</h1>
        
        <Footer/>
        </div>
    )
}
export default HomeLayout;