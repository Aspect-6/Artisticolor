import user from '@lib/functions/user'
import { useRef, useState } from 'react'
import SignUpBtn from '../SignUpBtn'
import FormInput from './FormInput'

interface DropdownFormProps extends React.FormHTMLAttributes<HTMLFormElement> {}

export default function DropdownForm({ ...props }: DropdownFormProps) {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const emailRef: React.MutableRefObject<HTMLInputElement> = useRef()
	const passwordRef: React.MutableRefObject<HTMLInputElement> = useRef()
	const formRef: React.MutableRefObject<HTMLFormElement> = useRef()
	const errorRef: React.MutableRefObject<HTMLDivElement> = useRef()

	const handleSubmit = (e: React.FormEvent) => {
		if (!formRef.current.checkValidity()) {
			e.preventDefault()
			e.stopPropagation()
		}
		formRef.current.classList.add('was-validated')

		const isError = user.signIn(email, password)
		isError.then((e: string | undefined) => {
			if (!e || email == '' || password == '') {
				if (!errorRef.current.className.includes('visually-hidden'))
					errorRef.current.classList.add('visually-hidden')
				return
			}
			formRef.current.style.borderColor = '#dc3545'
			errorRef.current.classList.remove('visually-hidden')
		})
	}

	return (
		<form
			onSubmit={(e) => e.preventDefault()}
			style={{ minWidth: '250px' }}
			ref={formRef}
			noValidate
			{...props}
		>
			<FormInput
				type='email'
				className='login-input'
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				errorMessage='Please enter a valid email'
				Ref={emailRef}
			/>
			<FormInput
				type='password'
				className='login-input'
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				errorMessage='Please enter a valid password'
				Ref={passwordRef}
			/>
			<div
				className='mb-3 visually-hidden text-center'
				ref={errorRef}
				style={{ color: '#dc3545' }}
			>
				Incorrect email or password
			</div>

			<div className='d-grid'>
				<button type='submit' onClick={handleSubmit} className='btn btn-primary'>
					Sign in
				</button>
			</div>
			<div className='dropdown-divider'></div>
			<SignUpBtn />
		</form>
	)
}
