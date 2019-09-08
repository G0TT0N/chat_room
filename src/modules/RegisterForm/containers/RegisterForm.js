import {withFormik} from 'formik';
import RegisterForm from '../components/RegisterForm';


export default withFormik({
    validate: values => {
        let errors = {};
        if (!values.email) {
            errors.email = 'Введите адрес';
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
                values.email
            )
        ) {
            errors.email = 'Введите корректный адрес';
        }

        if (!values.password) {
            errors.password = 'Введите пароль';
        } else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}/i.test(
            values.password
        )) {
            errors.password = 'Некорректный пароль';
        }

        if (!values.rePassword) {
            errors.rePassword = 'Введите пароль';
        }
        if (values.password !== values.rePassword) {
            errors.rePassword = 'Пароли не совпадают';
        }

        return errors;
    },

    handleSubmit: (values, {setSubmitting}) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    },

    displayName: 'RegisterForm',
})(RegisterForm);