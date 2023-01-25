import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

const NewPlayer = () => {
    // state that holds the values that the user has typed
    const [form, setForm] = useState({
        // initialize all of the values as empty strings
        name: '',
        club: '',
        country: '',
        age: '',
        rating: '',
    })
    // console.log(process.env.REACT_APP_SERVER_URL)

    // invoke the useNavigate hook to get a navigate function to use
    const navigate = useNavigate()

    // submit handler function that posts the form data from state to the backend
    const handleSubmit = e => {
        e.preventDefault()
        // console.log('create new player')
        // take the form data from the state, post it to the backend with axios
        // axios.post(url to make a request to,{request body }. {options})
        axios.post(`${process.env.REACT_APP_SERVER_URL}/players`, form)
            .then(response => {
                console.log(response.data)
                // once the backend gets back to use, navigate to the / route to see all players
                navigate('/') // like clicking a link for the user
            })
            .catch(console.warn)
            // handle erros 
    }
    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input
                        type='text'
                        id='name'
                        placeholder='name...'
                        value={form.name}
                        onChange={e => setForm({...form, name: e.target.value})}
                    />

                    <label htmlFor='club'>Club:</label>
                    <input
                        type='text'
                        id='club'
                        placeholder='club...'
                        value={form.club}
                        onChange={e => setForm({...form, club: e.target.value})}
                    />
                </div>

                <div>
                    <label htmlFor='country'>Country:</label>
                    <input
                        type='text'
                        id='country'
                        placeholder='country...'
                        value={form.country}
                        onChange={e => setForm({...form, country: e.target.value})}
                    />

                    <label htmlFor='age'>Age:</label>
                    <input
                        type='text'
                        id='age'
                        placeholder='age...'
                        value={form.age}
                        onChange={e => setForm({...form, age: e.target.value})}
                    />
                </div>

                <div>
                    <label htmlFor='rating'>Rating:</label>
                    <input
                        type='text'
                        id='rating'
                        placeholder='Rating...'
                        value={form.rating}
                        onChange={e => setForm({...form, rating: e.target.value})}
                    />
                </div>

                <button type='submit'>Submit</button>
            </form>
        </div>
     );
}
 
export default NewPlayer;