import React from "react";
import './styles/footer.css';
const Footer = () => {
    return(
        <footer className="App-footer bg-footer">
            <div className='Container-footer'>
                <div className='Logo-footer'>

                    <svg className='SVG-logo-footer' xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                        <g clipPath="url(#clip0_172_41)">
                            <path d="M53.4375 16.875C52.0275 18.285 50.9016 18.75 48.75 18.75C44.4469 18.75 41.25 15.5531 41.25 11.25C41.25 9.09844 41.715 7.9725 43.125 6.5625L37.5 0.9375L0.9375 37.5L6.5625 43.125C7.9725 41.715 9.09844 41.25 11.25 41.25C15.5531 41.25 18.75 44.4469 18.75 48.75C18.75 50.9016 18.285 52.0275 16.875 53.4375L22.5 59.0625L59.0625 22.5L53.4375 16.875Z" stroke="#3E7ED8" strokeWidth="2" strokeMiterlimit="10"/>
                            <path d="M24.375 14.0625L28.125 17.8125" stroke="#3E7ED8" strokeWidth="2" strokeMiterlimit="10"/>
                            <path d="M42.1875 31.875L45.9375 35.625" stroke="#3E7ED8" strokeWidth="2" strokeMiterlimit="10"/>
                            <path d="M30 19.6875L33.75 23.4375" stroke="#3E7ED8" strokeWidth="2" strokeMiterlimit="10"/>
                            <path d="M36.5625 26.25L40.3125 30" stroke="#3E7ED8" strokeWidth="2" strokeMiterlimit="10"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_172_41">
                                <rect width="60" height="60" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>

                    <p className='title-logo-footer tx-grayText Display-2'>Ракета</p>
                </div>
                <div className='Links-footer'>
                    <p className='tx-blue Body'>Посилання</p>
                    <a className='link-footer-colum tx-white Button-text-link-2' href='/'>Головна</a>
                    <a className='link-footer-colum tx-white Button-text-link-2' href='/..'>Філії</a>
                    <a className='link-footer-colum tx-white Button-text-link-2' href='/..'>Квитки</a>
                    <a className='link-footer-colum tx-white Button-text-link-2' href='/account'>Особистий кабінет</a>
                </div>
                <div className='Contact-footer tx-white'>
                    <p className='tx-blue Body'>Зв'язатися</p>
                    <p className='contact-footer-colum tx-white Body'>Телефон: (380) 973-516-905</p>
                    <p className='contact-footer-colum tx-white Body'>Email: syperraceta@gmil.com</p>
                </div>
                <div className='AboutUs-footer tx-light100'>
                    <p className='tx-blue Body'>Про нас</p>
                    <p className='aboutUs-footer-colum Small tx-white'>
                        Прозорість, відповідальність та безпека –
                        ось те, що визначає 'Ракету'.
                        Ми прагнемо забезпечити вам не тільки перевезення,
                        але й відчуття захоплюючої та комфортної подорожі.
                    </p>
                </div>
            </div>
        </footer>
    );
};
export default Footer;