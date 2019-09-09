export default ({isAuth}) => ({
    email: (errors, value) => {
        if (!value) {
            errors.email = 'Введите адрес';
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            errors.email = 'Введите корректный адрес';
        }
    },
    password: (errors, value) => {
        if (!value) {
            errors.password = 'Введите пароль';
        } else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}/i.test(value)) {
            errors.password = isAuth ? 'Неверный пароль' : 'Слишком легкий пароль';
        }
    },
    rePassword: (errors, value, values) => {
        if (!value) {
            errors.rePassword = 'Введите пароль';
        }
        if (values.password !== value) {
            errors.rePassword = 'Пароли не совпадают';
        }
    },
});