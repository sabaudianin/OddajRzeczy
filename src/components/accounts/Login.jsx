import React, {useState} from 'react';
import CustomLink from "./CustomLink.jsx";
import Decor from "../main_sections/Decor.jsx";


const Login = ({showLogin, setShowLogin}) => {
    const [form, setForm] = useState({email: '', password: ''});
    const [errors, setErrors] = useState({
        nameE: "", emailE: ""
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm(prev => ({
            ...prev, [name]: value,
        }))
    };

    const validation = () => {
        let isValid = true;
        const regEmail = /\S+@\S+\.\S+/;
        let newErrors = {nameE: "", emailE: "", msgE: ""};

        if (!form.email || !regEmail.test(form.email)) {
            isValid = false;
            newErrors.emailE = ('Email musi być poprawnym adresem email.');
        }

        if (!form.password || form.password.length < 6) {
            newErrors.passwordE = ("Minimum 6 znaków");
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validation()) {
            console.log(`Zalogowano ${form.email}, ${form.password}`)
            setShowLogin(false);
        }


    };

    return (
        <section className="flex items-center justify-center">
            <div className="w-full lg:w-1/2 flex flex-col justify-center p-6 mt-24">
                <Decor text="Zaloguj się"/>

                <form onSubmit={handleSubmit}>
                    <div className="w-2/3 mx-auto bg-lightes p-10">
                        <label className="block w-full text-left font-bold ">
                            Email:
                            <input
                                onChange={handleChange}
                                value={form.email}
                                name="email"
                                type="email"
                                className="w-full border-b-2 border-gray-300 focus:border-accent focus:outline-none bg-transparent pt-6 pb-1 text-base "

                            />
                            {errors.emailE && <p className="text-red-500 text-sm">{errors.emailE}</p>}
                        </label>

                        <label className="block w-full text-left font-bold  my-4">
                            Password:
                            <input
                                onChange={handleChange}
                                value={form.password}
                                name="password"
                                type="password"
                                className="w-full border-b-2 border-gray-300 focus:border-accent focus:outline-none bg-transparent pt-6 pb-1 text-base "

                            />
                            {errors.passwordE && <p className="text-red-500 text-sm">{errors.passwordE}</p>}
                        </label>
                    </div>
                    <div className="flex justify-center gap-4 mt-10">
                        <input type="submit"
                               value="Zaloguj"
                               className="border-2 border-transparent p-2 hover:border-accent text-light active:bg-accent cursor-pointer">

                        </input>
                        <CustomLink to="/signUp">
                            Załóż konto
                        </CustomLink>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Login;