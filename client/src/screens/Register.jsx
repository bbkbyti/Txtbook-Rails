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
        <div className='lg:min-h-screen lg:font-serif lg:flex lg:justify-center lg:bg-blue-100 min-h-screen flex justify-center font-serif '>
            <div  className=' lg:bg-white lg:mt-16 lg:rounded-2xl lg:py-10 lg:mb-16 lg:px-28'>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleRegister(formData);
                    }}
                >
                    <h3 className='lg:text-3xl lg:p-8 lg:mb-4 lg:font-bold mb-9 text-3xl font-bold text-blue-900 italic'>
                        Create Your Account</h3>
                    <div className='lg:flex lg:flex-col lg:justify-evenly flex flex-col justify-center'>
                    <div className='mb-4'>
                        <label className='lg:font-bold font-bold'>
                            <p className='mb-2'
                            >Username</p>
                            <input className='lg:border lg:border-gray-400 border border-gray-400'
                                type='text'
                                name='username'
                                value={formData.username}
                                onChange={handleChange} />
                        </label>
                    </div>
                    <div className='mb-4'>
                        <label className='lg:font-bold font-bold'>
                            <p className='mb-2'
                            >Email</p>
                            <input className='lg:border lg:border-gray-400 border border-gray-400'
                                type='text'
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <div className='mb-4'>
                        <label className='lg:font-bold font-bold'>
                            <p className='mb-2'
                            >Password</p>
                            <input className='lg:border lg:border-gray-400 border border-gray-400'
                                type='password'
                                name='password'
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <div className='lg:mt-3'>
                        <input type='checkbox' id='agree'></input>
                        <label for='agree'> I agree to the terms and privacy</label>
                    </div>
                    <div>
                        <button className='lg:bg-yellow-300 lg:text-blue-900 lg:font-bold lg:text-xl lg:mt-8 lg:py-2 lg:px-16 lg:rounded-xl lg:hover:bg-yellow-400 bg-yellow-300 text-blue-900 text-lg rounded-lg px-16 py-1 font-bold my-6'
                        >Sign Up</button>
                    </div>
                    </div>
                  
                </form>
            </div>
        </div>
    );
}