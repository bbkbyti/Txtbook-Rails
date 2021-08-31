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
        <div className='lg:min-h-screen lg:font-serif lg:flex lg:justify-center lg:bg-blue-100'>
            <div className='lg:mt-16 lg:rounded-2xl lg:pt-10 lg:px-20 lg:mb-40 lg:bg-white lg:shadow-2xl'>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleLogin(formData);
                    }}
                >
                    <h3 className='lg:text-4xl lg:text-gray-700 font-bold p-8 mb-4'>
                        Login</h3>
                        <div  className='lg:flex lg:flex-col'>
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
                    <button className='lg:bg-green-400 lg:text-white lg:text-xl lg:font-bold lg:mt-8 lg:py-2 lg:rounded-xl lg:hover:bg-green-500'>Login</button>
                    <Link className='lg:bg-yellow-300 lg:font-bold lg:mt-4 lg:py-2 lg:rounded-xl lg:hover:bg-yellow-400' to='/register'>Register ?</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}