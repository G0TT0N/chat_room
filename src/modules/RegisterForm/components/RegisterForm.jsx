import React, {Component} from 'react';
import {Form, Icon, Input} from 'antd';
import {Link} from 'react-router-dom';
import {Block, Button} from "../../../components";


class RegisterForm extends Component {
    render() {
        const success = false;
        return (
            <div>
                <div className={'auth__top'}>
                    <h2>Регистрация</h2>
                    <p>Для входа в чат, вам нужно зарегистрироваться</p>
                </div>
                <Block>
                    {!success
                        ? (
                            <Form onSubmit={this.handleSubmit} className="login-form">
                                <Form.Item>
                                    <Input
                                        prefix={<Icon type="mail" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                        placeholder="E-mail"
                                        size="large"
                                    />
                                </Form.Item>
                                <Form.Item>
                                    <Input
                                        prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                        placeholder="Ваше имя"
                                        size="large"
                                    />
                                </Form.Item>
                                <Form.Item>
                                    <Input
                                        prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                        type="password"
                                        placeholder="Пароль"
                                        size="large"
                                    />
                                </Form.Item>
                                <Form.Item>
                                    <Input
                                        prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                        type="password"
                                        placeholder="Повторите пароль"
                                        size="large"
                                    />
                                </Form.Item>

                                <Form.Item>
                                    <Button type="primary" htmlType="submit" size={'large'}>
                                        Зарегистрироваться
                                    </Button>
                                </Form.Item>
                                <Form.Item>
                                    <Link className={'auth__register__link'} to={'/login'}>Войти в аккаунт</Link>
                                </Form.Item>
                            </Form>)
                        : <div className={'auth__success-block'}>
                            <div>
                                <Icon style={{fontSize:'48px'}} type="exclamation-circle" theme="twoTone" />
                            </div>
                            <h2>Подтвердите свой аккаунт</h2>
                            <p>На вашу почту отправлено письмо со ссылкой на подтверждение аккаунта</p>
                        </div>}
                </Block>
            </div>
        )

    }
}

export default RegisterForm;