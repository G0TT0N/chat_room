import {withFormik} from 'formik';
import RegisterForm from '../components/RegisterForm';
import validateFunc from '../../../utils/validate';


export default withFormik({
    validate: values => {
        // console.log(values)
        let errors = {};
        const validate = validateFunc({isAuth: false});

        Object.keys(values).forEach(key => // достаем все ключи из объекта и прменяем для каждого функцию
            validate[key] && validate[key](errors, values[key], values) // если такой ключ есть, то применить функцию
        );

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