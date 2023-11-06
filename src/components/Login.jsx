import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [isUsernameExpanded, setUsernameExpanded] = useState(false);
    const [isPasswordExpanded, setPasswordExpanded] = useState(false);
    const [isLine, setLine] = useState(false);
    const [usernameErrorMessage, setUsernameErrorMessage] = useState(null);
    const [passwordErrorMessage, setPasswordErrorMessage] = useState(null);
    const [isUsernameValid, setUsernameValid] = useState(false);
    const [isPasswordValid, setPasswordValid] = useState(false);
    const [isAuthenticationFailed, setAuthenticationFailed] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleUsernameClick = () => {
        setUsernameExpanded(true);
        setPasswordExpanded(false);
    };

    const handlePasswordClick = () => {
        setUsernameExpanded(false);
        setPasswordExpanded(true);
    };

    const handleInputClick = (inputType) => {
        if (
            (inputType === 'username' && isPasswordExpanded) ||
            (inputType === 'password' && isUsernameExpanded)
        ) {
            setLine(true);
        } else {
            setLine(false);
        }
    };

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        const value = event.target.value;
        setUsername(value);
        if (value.trim() === '') {
            setUsernameErrorMessage('Required');
            setUsernameValid(false);
        } else if (value.length < 2) {
            setUsernameErrorMessage('Your username needs to be at least 2 characters.');
            setUsernameValid(false);
        } else {
            setUsernameErrorMessage(null);
            setUsernameValid(true);
        }
    };
    
    const handlePasswordChange = (event) => {
        const value = event.target.value;
        setPassword(value);
        if (value.length >= 1) {
            setPasswordErrorMessage(null);
            setPasswordValid(true);
        } else {
            setPasswordErrorMessage('Enter your password to sign in');
            setPasswordValid(false);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (username === 'react' && password === '123456') {
            setAuthenticationFailed(false);
        } else {
            setAuthenticationFailed(true);
        }
    };

    return (
        <section className="w-full h-screen flex justify-center items-center bg-login-image bg-cover">
            <div className='w-[450px] h-[497px] bg-white shadow-md rounded-lg px-16 pt-[21px] pb-[34px]'>
                <div className='flex items-center justify-center px-4 py-6'>
                    <img className='mb-3' src='../images/logo.svg' alt="" />
                </div>
                <form className='mb-4 pb-[26px] w-full' onSubmit={handleSubmit}>
                    <div className={`h-[45px] flex gap-2.5 text-[#b8082a] ${isAuthenticationFailed ? 'visible' : 'invisible'}`}>
                        <FontAwesomeIcon className='text-[17px]' icon={faExclamationTriangle} />
                        <p className='text-xs'>You've entered an unknown username or password</p>
                    </div>
                    <div className='mt-5 mb-9 pb-[18px] py-1.5'>
                        <input
                            className={`w-full outline-none placeholder-text-[#bdbdbd]`}
                            type="text"
                            placeholder='Username'
                            minLength={2}
                            onClick={() => handleUsernameClick()}
                            onFocus={() => handleInputClick('username')}
                            onChange={handleUsernameChange}
                        />
                        <div className={`h-[1px] ${isLine && !isUsernameExpanded && username.length < 2 ? 'bg-[#b8082a]' : 'bg-[#0000006b]'}`} />
                        <div className={`line-container ${isUsernameExpanded ? 'expanded' : 'invisible'} h-[2px] bg-[#0055b8] relative -top-[1px] mx-auto`}></div>
                        <p className='text-xs text-[#b8082a] pt-1'>{usernameErrorMessage}</p>
                    </div>
                    <div className='mt-5 mb-9 pb-[18px] py-1.5'>
                        <div className='flex justify-between'>
                            <input
                                className='w-full outline-none placeholder:text-[#bdbdbd]'
                                type={showPassword ? "text" : "password"}
                                placeholder='Password'
                                minLength={1}
                                onClick={() => handlePasswordClick()}
                                onFocus={() => handleInputClick('password')}
                                onChange={handlePasswordChange}
                            />
                            <span onClick={(e) => {
                                e.target.focus();
                                togglePasswordVisibility()
                            }}
                                className='w-6 h-6 rounded focus:border-2 focus:border-[#0055b8] flex items-center justify-center' tabIndex={0}
                            >
                                <FontAwesomeIcon
                                    className='w-4 h-5 cursor-pointer'
                                    icon={showPassword ? faEye : faEyeSlash}
                                />
                            </span>
                        </div>
                        <div className={`h-[1px] ${isLine && !isPasswordExpanded && password.length < 1 ? 'bg-[#b8082a]' : 'bg-[#0000006b]'}`} />
                        <div className={`line-container ${isPasswordExpanded ? 'expanded' : 'invisible'} h-[2px] bg-[#0055b8] relative -top-[1px] mx-auto`}></div>
                        <p className='text-xs text-[#b8082a] pt-1'>{passwordErrorMessage}</p>
                    </div>
                    <button
                        type="button"
                        className={`w-full mt-4 text-sm rounded py-2 text-white ${
                            isUsernameValid && isPasswordValid ? 'bg-[#00754a]' : 'bg-[#0000001F]'
                        }`}
                        onClick={() => {
                            if (isUsernameValid && isPasswordValid) {
                                if (username === 'react' && password === '123456') {
                                    window.location.href = '/home';
                                } else {
                                    setAuthenticationFailed(true);
                                }
                            }
                        }}
                    >
                        SIGN IN
                    </button>
                </form>
            </div>
        </section>
    )
}
