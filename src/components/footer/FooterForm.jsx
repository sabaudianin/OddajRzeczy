import React, {useState} from 'react';

const FooterForm = () => {
    const [form, setForm] = useState({name: '', email: '', message: ''});
    const [errors, setErrors] = useState({
        nameE: "", emailE: "", msgE: ""
    });
    const [submitStatus, setSubmitStatus] = useState("");
    const [submitErrorStatus, setSubmitErrorStatus] = useState("");


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

        if (!form.email) {
            isValid = false;
            newErrors.emailE = ("Email nie może być pusty");
        } else if (!regEmail.test(form.email)) {
            newErrors.emailE = 'Email musi być poprawnym adresem email.';
            isValid = false;
        }

        if (!form.name) {
            newErrors.nameE = ("Imię nie może być puste");
            isValid = false;
        } else if (form.name.split(' ').length > 1) {
            newErrors.nameE = 'Imię musi być jednym wyrazem.';
            isValid = false;
        }

        if (!form.message) {
            newErrors.msgE = ("Wiadomość  nie może być pusta");
            isValid = false;
        } else if (form.message.length < 120) {
            newErrors.msgE = 'Wiadomość nie może mieć mniej niż 120 znaków.';
            isValid = false;
        }
        setErrors(newErrors);

        // setTimeout(() => setErrors({nameE: "", emailE: "", msgE: ""}), 5000);

        return isValid;
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if (validation()) {
            fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            })
                .then(res => {
                    if (res.ok) {
                        return res.json();
                    } else {
                        return res.json().then(data => {
                            const error = new Error(res.status);
                            error.data = data;
                            throw error;
                        });
                    }
                })
                .then(data => {
                    console.log(data);
                    setSubmitStatus("Wiadomość wysłana pomyślnie");
                    // setTimeout(() => setSubmitStatus(''), 5000);
                })
                .catch(error => {
                    if (error.data && error.data.errors) {
                        console.log(error.data)
                        console.log(`Błąd: ${JSON.stringify(error.data.errors)}`)
                    } else {
                        console.log(`Błąd sieci: ${error}`);
                    }
                    setSubmitErrorStatus("Wystąpił błąd podczas wysyłania wiadomości");
                    // setTimeout(() => setSubmitErrorStatus(''), 5000);
                });
        }
    };


    return (

        <>
            {submitStatus && <p className="text-green-500 font-bold text-sm">{submitStatus}</p>}
            {submitErrorStatus && <p className="text-red-500 font-bold text-sm">{submitErrorStatus}</p>}
            <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col items-center p-4">
                <div
                    className="flex flex-col justify-around lg:flex-row w-full space-y-8 lg:space-y-0 lg:space-x-4">

                    <label className="w-full lg:w-1/2 text-left font-bold ">
                        Wpisz swoje Imie
                        <input
                            onChange={handleChange}
                            value={form.name}
                            name="name"
                            type="text"
                            className="w-full border-b-2 border-gray-300 focus:border-accent focus:outline-none bg-transparent pt-6 pb-1 text-base "
                            placeholder="Podaj swoje Imię"
                        />
                        {errors.nameE && <p className="text-red-500 text-sm">{errors.nameE}</p>}
                    </label>

                    <label className="w-full lg:w-1/2 text-left font-bold">
                        Wpisz swoj email
                        <input
                            onChange={handleChange}
                            value={form.email}
                            name="email"
                            type="text"
                            className="w-full border-b-2 border-gray-300 focus:border-accent focus:outline-none bg-transparent pt-6 pb-1 text-base "
                            placeholder="Podaj swój email "
                        />
                        {errors.emailE && <p className="text-red-500 text-sm">{errors.emailE}</p>}
                    </label>
                </div>
                <label className="w-full mt-6 text-left font-bold">
                    Wpisz swoja wiadomosc
                    <textarea
                        onChange={handleChange}
                        value={form.message}
                        name="message"
                        placeholder="Tu wpisz wiadomość"
                        rows={4}
                        className="w-full border-b-2 border-gray-300 focus:border-accent focus:outline-none bg-transparent pt-6 pb-1 text-base  resize-none"
                    >

                </textarea>
                    {errors.msgE && <p className="text-red-500 text-sm">{errors.msgE}</p>}
                </label>
                <div className="w-full flex justify-end">
                    <input

                        type="submit"
                        value="Wyślij"
                        className="mt-8 px-10 py-4 rounded flex items-center justify-center border-2 border-dark hover:bg-accent transition duration-200 font-bold text-center"
                    />
                </div>
            </form>
        </>);
};

export default FooterForm;