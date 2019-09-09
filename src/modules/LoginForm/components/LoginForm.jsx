import React from 'react';
import {Form, Icon, Input} from 'antd';
import {Link} from 'react-router-dom';
import {Block, Button} from "../../../components";
import {validateField} from "../../../utils/helper";

const LoginForm = (props) => {
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
    } = props;
    return (
        <div>
            <div className={'auth__top'}>
                <h2>Войти в аккаунт</h2>
                <p>Пожалуйста, войдите в свой аккаунт</p>
            </div>
            <Block>
                <Form onSubmit={handleSubmit} className="login-form">
                    <Form.Item
                        validateStatus={validateField('email', touched, errors)}
                        help={!touched.email ? '' : errors.email}
                        hasFeedback
                    >
                        <Input
                            prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                            placeholder="Username"
                            size="large"
                            id={'email'}
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </Form.Item>
                    <Form.Item
                        validateStatus={validateField('password', touched, errors)}
                        help={!touched.password ? '' : errors.password}
                        hasFeedback
                    >
                        <Input
                            prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                            type="password"
                            placeholder="Пароль"
                            size="large"
                            id={'password'}
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" size={'large'}>
                            Войти в аккаунт
                        </Button>
                    </Form.Item>
                    <Link className={'auth__register-link'} to={'/register'}>
                        Зарегистрироваться
                    </Link>
                </Form>
            </Block>
        </div>
    )
};

export default LoginForm;