import React, { useState } from 'react';

const RegistrationForm = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleNameChange = (e) => {
        setNombre(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            nombre,
            email,
            password
        };

        try {
            const response = await fetch('http://localhost:8000/api/usuarios/nuevousuario', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                // Procesar respuesta exitosa
                console.log('Registro exitoso');
            } else {
                // Procesar respuesta de error
                console.log('Error al registrar');
            }
        } catch (error) {
            console.log('Error de conexión', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nombre:</label>
                <input type="text" value={nombre} onChange={handleNameChange} />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={handleEmailChange} />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" value={password} onChange={handlePasswordChange} />
            </div>
            <button type="submit">Registrarse</button>
        </form>
    );
};

export default RegistrationForm;