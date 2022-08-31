import React from 'react'
import { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';

const initialTheme = "light";
const initialLanguage = "es"
const initialAuth = null

const translation = {
    es: {
        headerTitle: "Mi aplicación SIN context API",
        headerSubtitle: "Mi cabecera",
        headerLight: "Claro",
        headerDark: "Oscuro",
        buttonLogin: "Iniciar sesión",
        buttonLogout: "Cerrar sesión",
        mainWelcome: "Bienvenid@, Invitad@",
        mainHello: "Hola, Usuari@",
        mainContent: "Mi contenido principal",
        footerTitle: "Mi pie de página"
    },
    en: {
        headerTitle: "My App WITHOUT context API",
        headerSubtitle: "My header",
        headerLight: "Light",
        headerDark: "Dark",
        buttonLogin: "Log in",
        buttonLogout: "Log out",
        mainWelcome: "Welcome, guest.",
        mainHello: "Hello, user",
        mainContent: "My main content",
        footerTitle: "My footer"
    }
}


function MyPage() {

    const [theme, setTheme] = useState(initialTheme);
    const [language, setLanguage] = useState(initialLanguage);
    const [text, setText] = useState(translation[language]);
    const [auth, setAuth] = useState(initialAuth);

    const handleTheme = (e) => {
        if (e.target.value === 'light') {
            setTheme('light')
        } else {
            setTheme('dark')
        }
    }

    const handleLanguage = (e) => {
        if (e.target.value === "es") {
            setLanguage("es")
            setText(translation.es)
        } else {
            setLanguage("en")
            setText(translation.en)
        }
    }

    const handleAuth = () => {
        if (auth) {
            setAuth(null);
        } else {
            setAuth(true);
        }
    }

    return (
        <div className='my-page'>
            <Header
                theme={theme}
                handleTheme={handleTheme}
                text={text}
                handleLanguage={handleLanguage}
                auth={auth}
                handleAuth={handleAuth} />

            <Main
                theme={theme}
                text={text}
                auth={auth} />

            <Footer
                theme={theme}
                text={text} />
        </div>
    )
}
export default MyPage;