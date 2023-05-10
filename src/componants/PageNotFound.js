import '../style/PageNotFound.css';

import Header from './Header'
import Footer from './Footer'

import Img404 from '../assets/404.png'


function PageNotFound() {

    return (
        <div>
            <Header />

            <div className='kesa-noResult-container'>
                <img src={Img404} className='kesa-404img'/>
                <p className='kesa-404Text'>Oups! La page que vous demandez n'existe pas.</p>
                <a href='' className='kesa-404cta'>Retourner sur la page d’accueil</a>
            </div>

            <Footer />
        </div>
    )

}

export default PageNotFound;