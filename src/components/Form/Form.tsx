// import user from '@lib/functions/user'
// import { useRef, useState } from 'react'
// import FormInput from './FormInput'
// import SignUpBtn from '../NavBar/NavBarDropdown/SignUpBtn'

import FormTitle from '@components/Form/FormTitle'
import FormBtn from './FormBtn'
import FormError from './FormError'
import FieldError from './FormField/FieldError'
import FieldInput from './FormField/FieldInput'
import FieldLabel from './FormField/FieldLabel'
import FormField from './FormField/FormField'
import FormRedirect from './FormRedirect'

// interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {}

// export default function Form({ ...props }: FormProps) {
// 	const [email, setEmail] = useState('')
// 	const [password, setPassword] = useState('')

// 	const emailRef: React.MutableRefObject<HTMLInputElement> = useRef()
// 	const passwordRef: React.MutableRefObject<HTMLInputElement> = useRef()
// 	const formRef: React.MutableRefObject<HTMLFormElement> = useRef()
// 	const errorRef: React.MutableRefObject<HTMLDivElement> = useRef()

// 	const handleSubmit = (e: React.FormEvent) => {
// 		if (!formRef.current.checkValidity()) {
// 			e.preventDefault()
// 			e.stopPropagation()
// 		}
// 		formRef.current.classList.add('was-validated')

// 		const isError = user.signIn(email, password)
// 		isError.then((e) => {
// 			if (!e || email == '' || password == '') {
// 				if (!errorRef.current.className.includes('visually-hidden')) {
// 					errorRef.current.classList.add('visually-hidden')
// 					formRef.current.style.borderColor = 'rgb(0 0 0 / 18%)'
// 				}
// 				return
// 			}
// 			formRef.current.style.borderColor = '#dc3545'
// 			errorRef.current.classList.remove('visually-hidden')
// 		})
// 	}

// 	return (
// 		<form
// 			onSubmit={(e) => e.preventDefault()}
// 			style={{ minWidth: '250px' }}
// 			ref={formRef}
// 			noValidate
// 			{...props}
// 		>
// 			<Form.Input
// 				type='email'
// 				className='login-input'
// 				value={email}
// 				onChange={(e) => setEmail(e.target.value)}
// 				errorMessage='Please enter a valid email'
// 				Ref={emailRef}
// 			/>
// 			<Form.Input
// 				type='password'
// 				className='login-input'
// 				value={password}
// 				onChange={(e) => setPassword(e.target.value)}
// 				errorMessage='Please enter a valid password'
// 				Ref={passwordRef}
// 			/>
// 			<div
// 				className='mb-3 visually-hidden text-center'
// 				ref={errorRef}
// 				style={{ color: '#dc3545' }}
// 			>
// 				Incorrect email or password
// 			</div>

// 			<div className='d-grid'>
// 				<button type='submit' onClick={handleSubmit} className='btn btn-primary'>
// 					Sign in
// 				</button>
// 			</div>
// 			<div className='dropdown-divider'></div>
// 			<SignUpBtn />
// 		</form>
// 	)
// }

// Form.Input = FormInput
interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
	children: React.ReactNode
	Ref?: React.MutableRefObject<HTMLFormElement>
}

export default function Form({ children, Ref, ...props }: FormProps) {
	return (
		<form ref={Ref} {...props}>
			{children}
		</form>
	)
}

Form.Title = FormTitle
Form.Field = FormField
Form.FieldLabel = FieldLabel
Form.FieldInput = FieldInput
Form.FieldError = FieldError
Form.Error = FormError
Form.Button = FormBtn
Form.Redirect = FormRedirect
