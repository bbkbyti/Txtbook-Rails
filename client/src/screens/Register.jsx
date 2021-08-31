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
        <div className='min-h-screen font-serif flex justify-center bg-gray-300'>
            <div  className=' bg-white mt-16 rounded-2xl py-10 mb-16'>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleRegister(formData);
                    }}
                >
                    <h3 className='text-3xl p-8 mb-4 font-bold'>Create Your Account</h3>
                    <div>
                        <label className='font-bold'>
                            Username
                            <input className='border border-gray-400'
                                type='text'
                                name='username'
                                value={formData.username}
                                onChange={handleChange} />
                        </label>
                    </div>
                    <div>
                        <label className='font-bold'>
                            Email
                            <input
                                type='text'
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <div>
                        <label className='font-bold'>
                            Password
                            <input
                                type='password'
                                name='password'
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <div>
                        <input type='checkbox' id='agree'></input>
                        <label for='agree'> I agree to the terms and privacy</label>
                    </div>
                    <div>
                        <button>Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    );
}