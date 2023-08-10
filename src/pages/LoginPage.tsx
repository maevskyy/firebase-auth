import { User, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';

import { FcGoogle, FcAddressBook } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import Form from '../components/Form';
import { setUser } from '../store/slices/userSlice';

interface TUser extends User {
	accessToken?: string;
}	

const LoginPage = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate()
	
	const handleLogin = (email: string, password: string) => {
		const auth = getAuth();
		signInWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				const newUser: TUser = user;
				dispatch(
					setUser({
						email: newUser.email,
						id: newUser.uid,
						token: newUser.accessToken,
					})
				);
				navigate('/');
			})
			.catch(console.error);
	};

	return (
		<div className='flex justify-center items-center h-[100vh] bg-gray-200'>
			<section className='flex flex-col gap-3 items-center shadow-lg p-5 bg-white rounded-lg'>
				<FcAddressBook className='text-[3em]' />
				<h3 className='font-semibold text-[1.5em]'>Welcome Back</h3>
				<h5 className='text-gray-500'>Please enter your details to sign in.</h5>
				<div className='flex justify-between gap-3'>
					<a
						href=''
						className='flex items-center px-12 py-2 border border-gray-400 rounded-md gap-3'
					>
						<FcGoogle className='text-[1.5em]' />
						<span className='font-semibold'>Google</span>
					</a>
					<a
						href=''
						className='flex items-center px-12 py-2 border border-gray-400 rounded-md gap-3'
					>
						<BsGithub className='text-[1.5em]' />
						<span className='font-semibold'>GitHub</span>
					</a>
				</div>
				<div className='flex w-full items-center justify-between'>
					<div className='h-[1.5px] w-[45%] bg-gray-200'></div>
					<span className='text-gray-500'>or</span>
					<div className='h-[1.5px] w-[45%] bg-gray-200'></div>
				</div>
				<Form
					isLogin={true}
					handleClick={handleLogin}
				/>
				<span className='text-[12px]'>
					Dont have an account?{' '}
					<Link
						to='/register'
						className='font-semibold underline'
					>
						Create account
					</Link>
				</span>
			</section>
		</div>
	);
};

export default LoginPage;
