import { useState } from 'react';
import './form.css';

export default function Form() {

    const [nome, setNome] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        console.log("Nome:", nome)
        setNome('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='form-group'>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required />
            </div>
            <button type="submit">Send</button>
        </form>
    )
}