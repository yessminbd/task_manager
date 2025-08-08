import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Button from '../components/Button';
import Textbox from '../components/Textbox';

const Login = () => {
  const { user } = useSelector(state => state.auth);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const submitHabndler = async (data) => {
    console.log('submit');
    'submit'
  }
  useEffect(() => {
    // l'utilisateur existe
    user && navigate('/dashboard')
  }, [user])

  return (
    <div className='w-full min-h-screen flex place-items-center justify-center flex-col lg:flex-row bg-[#f3f4f6]'>
      <div className='w-full md:w-auto flex gap-0 md:gap-40 flex-col md:flex-row items-center justify-center' >
        {/* right (now on the left) */}
        <div className='w-full md:w-1/3 flex flex-col items-center justify-center'>
          <form onSubmit={handleSubmit(submitHabndler)} className='form-container w-full md:w-[400px] flex flex-col gap-y-8 bg-white px-10 pt-14 pb-14'>
            <div className=''>
              <p className='text-[#333333] text-3xl font-bold text-center'>Welcome back!</p>
            </div>
            <div className='flex flex-col gap-y-5'>
              <Textbox
                placeholder="email@example.com"
                type="email"
                name='email'
                label='Email address'
                className='w-full rounded-full '
                register={register("email", { required: 'Email address is required' })}
                error={errors.email ? errors.email.message : ''}
              />
            </div>
            <div className='flex flex-col gap-y-5'>
              <Textbox
                placeholder="your password"
                type="password"
                name='password'
                label='Password'
                className='w-full rounded-full '
                register={register("password", { required: 'Password is required' })}
                error={errors.password ? errors.password.message : ''}
              />
              <span className='text-sm text-gray-500 hover:text-green-600 hover:underline cursor-pointer'>Forget Password?</span>
            </div>
            <Button
              type={'submit'}
              label={'Submit'}
              className='w-full h-10 bg-[#333] text-white'
            />
            <span className='text-center text-base text-gray-800'>Do not share your confidential information with anyone!</span>
          </form>
        </div>
        {/* left (now on the right) */}
        <div className='pb-2 h-full w-full lg:w-2/3 flex flex-col items-center justify-center'>
          <div className='w-full md:max-w-lg 2xl:max-w-3xl flex flex-col items-center justify-center gap-5 md:gap-y-10 2xl:-mt-20'>
            <p className='flex flex-col gap-0 md:gap-4 text-6xl lg:text-6xl 2xl:text-7xl font-black text-center text-[#333333]'><span>Task Wiz</span></p>
            <span className='flex gap-1 py-1 px-3 border rounded-full text-xl md:text-base border-gray-300 text-gray-600'>Unlock your productivity potential</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login