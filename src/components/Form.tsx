import {useState} from 'react'
import { useAppDispatch } from '../hooks/redux-hooks';

type Props = {
	isLogin?: boolean;
    handleClick: (email: string, password: string) => void
};

const RegisterForm = ({ isLogin, handleClick }: Props) => {
    const dispatch = useAppDispatch()


    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

	const submitFunc = (e:React.FormEvent<HTMLElement>) => {
		e.preventDefault()
		handleClick(email, password)
	}

	return (
		<form className='w-full flex flex-col gap-2' onSubmit={(e) => submitFunc(e)}>
			<div className='flex flex-col gap-1'>
				<label
					htmlFor=''
					className='text-[12px] font-semibold'
				>
					Email
				</label>
				<input
					type='email'
					placeholder='Enter your email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
					className='outline-none rounded-lg border border-gray-300 px-4 py-2'
				/>
			</div>
			<div className='flex flex-col gap-1'>
				<label
					htmlFor=''
					className='text-[12px] font-semibold'
				>
					Password
				</label>
				<input
					type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
					placeholder='Enter your password'
					className='outline-none rounded-lg border border-gray-300 px-4 py-2'
				/>
			</div>
			<div className='flex justify-between my-2'>
				<div className='flex gap-1'>
					<input type='checkbox' />
					<span className='text-[12px] font-semibold'>Remember for 30 days</span>
				</div>
				{isLogin && (
					<a
						href=''
						className='underline font-semibold text-[12px]'
					>
						Forgot password
					</a>
				)}
			</div>
			<button className='w-full bg-blue-600 hover:bg-blue-500 duration-200 text-white font-semibold px-4 py-2 rounded-lg'>
				{isLogin ? 'Sign in' : 'Sing up'}
			</button>
		</form>
	);
};

export default RegisterForm;
