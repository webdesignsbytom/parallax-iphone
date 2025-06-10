import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// API
import client from '../../api/client';
// Context
import { useUser } from '../../context/UserContext';
// Components
import LoadingSpinner from '../../components/utils/LoadingSpinner';
// Utils
import CountrySelect from '../utils/CountrySelect';
// Constants
import { LOGIN_PAGE_URL } from '../../utils/Routes';
import { REGISTER_API } from '../../utils/ApiRoutes';
// Hooks
import useNavigateToPage from '../../hooks/useNavigateToPage';

function RegisterForm() {
  const { setUser } = useUser();

  const navigateToPage = useNavigateToPage();

  const [registerFormData, setRegisterFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    username: '',
    country: '',
    agreedToTerms: true,
  });

  const [registerError, setRegisterError] = useState(null); // Store error message or null
  const [registrationInProgress, setRegistrationInProgress] = useState(false);

  const handleSubmitRegisterForm = async (event) => {
    event.preventDefault();

    setRegistrationInProgress(true);
    setRegisterError(null); 

    client
    .post(REGISTER_API, registerFormData, false)
    .then((res) => {
      setUser(res.data.existingUser);
      setRegistrationInProgress(false);
    })
    .then(() => navigateToPage(LOGIN_PAGE_URL))
    .catch((err) => {
      setRegisterError(err.message);
      setRegistrationInProgress(false);
    });
  };

  const handleChange = (event) => {
    setRegisterError(null); // Reset error when input changes
    const { name, value } = event.target;

    setRegisterFormData({
      ...registerFormData,
      [name]: value,
    });
  };

  const handleCheckboxChange = () => {
    setRegisterFormData({
      ...registerFormData,
      agreedToTerms: !registerFormData.agreedToTerms,
    });
  };

  const handleRegisterWith = (service) => {
    switch (service) {
      case 'facebook':
        // Call Facebook login API
        console.log('Register with Facebook');
        break;
      case 'instagram':
        // Call Instagram login API
        console.log('Register with Instagram');
        break;
      case 'google':
        // Call Google login API
        console.log('Register with Google');
        break;
      case 'github':
        // Call GitHub login API
        console.log('Register with GitHub');
        break;
      case 'apple':
        // Call Apple login API
        console.log('Register with Apple');
        break;
      case 'x':
        // Call X login API
        console.log('Register with X');
        break;
      default:
        console.log('Unsupported service');
    }
  };

  return (
    <form
      className='grid gap-y-4 md:gap-y-6'
      onSubmit={handleSubmitRegisterForm}
      aria-busy={registrationInProgress}
    >
      <div className=''>
        <label htmlFor='username' className='sr-only'>
          Username
        </label>
        <input
          type='text'
                    className={`bg-colour9 w-full rounded-md py-1 px-1`}
          placeholder='Username'
          id='username'
          name='username'
          onChange={handleChange}
          required
          aria-required='true'
        />
      </div>
      <div>
        <label htmlFor='email' className='sr-only'>
          Email address
        </label>
        <input
          type='email'
          id='email'
          name='email'
                    className={`bg-colour9 w-full rounded-md py-1 px-1`}
          placeholder='Email address'
          onChange={handleChange}
          required
          aria-required='true'
          aria-describedby={registerError ? 'email-error' : undefined}
        />
      </div>
      <div>
        <label htmlFor='password' className='sr-only'>
          Password
        </label>
        <input
          type='password'
          id='password'
          name='password'
                    className={`bg-colour9 w-full rounded-md py-1 px-1`}
          placeholder='Password'
          onChange={handleChange}
          required
          aria-required='true'
          aria-describedby={registerError ? 'password-error' : undefined}
        />
      </div>
      <div>
        <label htmlFor='confirmPassword' className='sr-only'>
          Confirm Password
        </label>
        <input
          type='password'
          id='confirmPassword'
          name='confirmPassword'
                    className={`bg-colour9 w-full rounded-md py-1 px-1`}
          placeholder='Confirm Password'
          onChange={handleChange}
          required
          aria-required='true'
          aria-describedby={
            registerError ? 'confirm-password-error' : undefined
          }
        />
      </div>
      <div className=''>
        <label htmlFor='country' className='sr-only'>
          Country
        </label>
        <CountrySelect />
      </div>
      <div className='form-check flex justify-center mb-6'>
        <input
          className='form-check-input h-4 w-4 border border-gray-300 rounded-sm transition duration-200 mt-1 align-top float-left mr-2 cursor-pointer checked:bg-colour2 accent-colour5'
          type='checkbox'
          value=''
          id='termsChecked'
          name='termsChecked'
          aria-label='Agree to terms and conditions'
          checked={registerFormData.agreedToTerms}
          onChange={handleCheckboxChange}
        />
        <label
          className='form-check-label inline-block text-colour7'
          htmlFor='termsChecked'
        >
          I agree to all terms and conditions.
        </label>
      </div>

      {/* Submit button */}
      <div className='grid h-fit w-full'>
        <button
          type='submit'
          data-mdb-ripple='true'
          data-mdb-ripple-color='light'
                   className={`bg-colour5 text-colour1 py-1 rounded-md hover:brightness-110 active:scale-95 active:brightness-90`}
          disabled={registrationInProgress}
          aria-disabled={registrationInProgress}
          aria-label='Register your account'
        >
          {registrationInProgress ? (
            <LoadingSpinner />
          ) : (
            <span>Register Now</span>
          )}
        </button>
      </div>

      {registerError && (
        <div
          role='alert'
          aria-live='assertive'
          className='text-center text-error-red'
          id='form-error'
        >
          <span className='font-semibold' id='register-error'>
            {registerError || 'REGISTRATION FAILED'}
          </span>
        </div>
      )}

      <div className='grid justify-center'>
        <p className='font-light text-colour5'>
          Already a member?{' '}
          <Link
            to={LOGIN_PAGE_URL}
            className={`hover:underline`}
            aria-label='Go to login page'
          >
            Login Now
          </Link>
        </p>
      </div>
    </form>
  );
}

export default RegisterForm;
