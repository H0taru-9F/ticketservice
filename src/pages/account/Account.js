import React, {useEffect, useState} from "react";
import './account.css';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {ButtonBigLink, ButtonSmallLink} from "../../components/ButtonsComponent";
import useFetch from "../../hooks/useFetch";
import unpackingUser from "../../utils/UnpackingUser";
const Account = () => {
    const {email, password} =unpackingUser()
    const {data, loading, error} = useFetch('/v1/Rocket/account')

    useEffect(() => {
        if (data) {
            setAccountPage(AccountPers)
        }
    }, [data]);

    console.log('useFetch data', data, loading, error)

    const AccountPers=(
        <div className='Account-inf-pers'>
            <div className='Account-inf-pers-first-block Body2'>
                {!loading && (
                        <div className='Account-inf-pers-first-block-dynamic tx-white'>
                            <p style={{ marginBottom: '12px' }}>{data?.lastName}</p>
                            <p style={{ marginBottom: '12px' }}>{data?.firstName}</p>
                        </div>
                )}
                <div className='Account-inf-pers-first-block-state tx-grayText'>
                    <p style={{ marginBottom: '12px' }}>Прізвище</p>
                    <p style={{ marginBottom: '12px' }}>Ім'я</p>
                </div>
            </div>
            <div style={{
                borderTop: '1.5px solid black',
                marginTop: '16px',
                borderColor: '#3E7ED8',
                width: '445px'
            }}/>
            <div className='Account-inf-pers-second-block Body2'>
                <div className='Account-inf-pers-second-block-dynamic tx-white'>
                    <p style={{ marginBottom: '12px' }}>{email}</p>
                    <p style={{ marginBottom: '12px' }}>{password}</p>
                </div>
                <div className='Account-inf-pers-second-block-state tx-grayText Body2'>
                    <p style={{ marginBottom: '12px' }}>Пошта</p>
                    <p style={{ marginBottom: '12px' }}>Пароль</p>
                </div>
            </div>
            <div className='Account-inf-data-second-block'>
                <ButtonSmallLink title='Вийти' onClick={() =>{window.localStorage.clear(); window.location.reload();}}/>
            </div>
        </div>
    );
    const AccountTick = (
        <div className='Account-inf-offset'>

        </div>
    );
    const [AccountPage, setAccountPage] = useState(AccountPers)

    return(
        <div className='Account'>
            <Header/>
            <div className='Account-block'>
                <div className=' Account-nav'>
                    <ButtonBigLink
                        onClick={() => setAccountPage(AccountPers)}
                        title='Особистий кабінет'
                    />
                    <div style={{height: '15px'}}/>
                    <ButtonBigLink
                        onClick={() => setAccountPage(AccountTick)}
                        title='Квитки'
                        />
                </div>
                <div className='Account-inf bg-footer'>
                    {AccountPage}
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Account;