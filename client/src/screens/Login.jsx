import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login(props) {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const { handleLogin } = props;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <div className='min-h-screen font-serif flex justify-center'>
            <div className='mt-16 rounded-2xl pt-10 px-20 mb-40 bg-gray-300 shadow-2xl'>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleLogin(formData);
                    }}
                >
                    <h3 className='text-4xl text-gray-700 font-bold p-8 mb-4'>
                        Login</h3>
                        <div  className='flex flex-col'>
                            <p>Username</p>
                    <label>
                        <input
                            placeholder='Username'
                            type='text'
                            name='username'
                            value={formData.username}
                            onChange={handleChange}
                        />
                    </label>
                    <p>Password</p>
                    <label>
                        <input
                            placeholder='Password'
                            type='password'
                            name='password'
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </label>
                    <button className='bg-green-400 text-white text-xl font-bold mt-8 py-2 rounded-xl hover:bg-green-500'>Login</button>
                    <Link className='bg-yellow-300 font-bold mt-4 py-2 rounded-xl hover:bg-yellow-400' to='/register'>Register ?</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}