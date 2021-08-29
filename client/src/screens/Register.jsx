import { useState } from 'react';

export default function Register(props) {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });
    const { handleRegister } = props;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <div className='min-h-screen font-serif flex justify-center'>
            <div  className='mt-16 rounded-2xl py-10 mb-32 bg-gray-300 shadow-2xl px-20'>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleRegister(formData);
                    }}
                >
                    <h3 className='text-3xl text-gray-700 p-8 mb-4 font-bold'>
                        Create Your Account</h3>
                    <div className='flex flex-col'>
                    <div> 
                        <p>Username</p>
                        <label className='font-bold'>
                            <input className='border border-gray-400'
                                placeholder='Username'
                                type='text'
                                name='username'
                                value={formData.username}
                                onChange={handleChange} />
                        </label>
                    </div>
                    <div>
                    <p>Email</p>
                        <label className='font-bold'>
                            <input
                                placeholder='Email'
                                type='text'
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <div>
                        <p>Password</p>
                        <label className='font-bold'>
                            <input
                                placeholder='Password'
                                type='password'
                                name='password'
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <div className='mt-3'>
                        <input type='checkbox' id='agree'></input>
                        <label for='agree'> I agree to the terms and privacy</label>
                    </div>
                    <div>
                        <button className='bg-green-400 text-white font-bold text-xl mt-8 py-2 px-16 rounded-xl hover:bg-green-500'>Sign Up</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}