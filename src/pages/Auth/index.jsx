import React from 'react';
import {Block, Button} from "../../components";
import './Auth.scss'

const Auth = (props) => {
    return (
        <section className={'auth'}>
            <div className={'auth__content'}>
                <div className={'auth__top'} >
                    <h2>Войти в аккаунт</h2>
                    <p>Пожалуйста, войдите в свой аккаунт</p>
                </div>
                <Block>
                    <Button type={'primary'} size={'large'}>Button</Button>
                </Block>
            </div>
        </section>
    )
};

export default Auth;



