import React from "react";
import './home.css';
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Home() {
    return (
        <div className="Home bg-backG">
            <Header/>
            <div className='Full-block'>
                <div className='First-block'>
                    <div className='First-block-items'>
                        <h1 className='First-block-title tx-blue Display-1'>
                            Ваша подорож - наша турбота
                        </h1>
                        <p className='First-block-body tx-white Display-2'>
                            Одна подорож - безліч можливостей: квитки для ваших міжміських автоподорожей
                        </p>
                    </div>
                </div>
                <div className='Second-block bg-blackBlue'>
                    <p className='Second-block-body tx-white Title'>
                        Ласкаво запрошуємо на борт Ракети -
                        вашого вірного компаньйона у міжміських подорожах.
                        Відкрийте для себе світ нових маршрутів та зручностей з нами.
                        Подорожуйте безпечно та комфортно,
                        обираючи Ракету для своїх автоподорожей.
                    </p>
                </div>
                <div className='Third-block bg-light100'>
                    <h className='Third-block-title tx-white Display-2'>
                        Вітаємо в <span className='tx-blue'>міжміських подорожах</span>
                    </h>
                    <div className='Third-block-img'></div>
                    <div className='Third-block-content bg-footer'>
                        <p className='Third-block-content-title tx-white Title'><b>
                            Чому варто обирати нас</b>
                        </p>
                        <p className='Third-block-content-body tx-white Body'>
                            Наші міжміські автобуси готові подарувати вам найкращі переживання.
                            Перевірені маршрути та філії у ключових містах
                            дозволяють вам обирати найбільш зручний спосіб подорожувати.
                            Довірте свої мандрівки нам, і ми зробимо все можливе,
                            щоб вони стали незабутніми!
                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
export default Home;