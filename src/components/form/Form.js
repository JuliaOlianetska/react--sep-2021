import {useState} from "react";

export default function Form({getFilteredUsers}) {


    const [form, setForm] = useState({name: '', username: '', email: ''})

    const formChange = (e) => {
        const eventData = {...form, [e.target.name]: e.target.value}
        setForm({...form, ...eventData})

    }

    const findUsers =(e) => {
        e.preventDefault();
        console.log(form)
        getFilteredUsers(form)
    }
    return (
        <div>
            <form>
                <label>Name: <input type="text" name={'name'} value={form.name} onChange={formChange}/></label>
                <label>Username: <input type="text" name={'username'} value={form.username}
                                        onChange={formChange}/></label>
                <label>Email: <input type="text" name={'email'} value={form.email} onChange={formChange}/></label>
                <button onClick={findUsers}>FIND</button>
            </form>

        </div>
    );
}