import Form, { testFormError } from '@components/Form/Form'
import { ROUTES } from '@config/browser-routes.config'
import user from '@lib/functions/user'
import { useRef, useState } from 'react'

interface RegisterFormProps {}

export default function RegisterForm({}: RegisterFormProps) {
	// Create all necessary states for the input fields and form error message
	const [email, setEmail] = useState('')
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [formError, setFormError] = useState('')

	// Create all necessary refs to access the DOM
	const emailRef: React.MutableRefObject<HTMLInputElement> = useRef()
	const usernameRef: React.MutableRefObject<HTMLInputElement> = useRef()
	const passwordRef: React.MutableRefObject<HTMLInputElement> = useRef()
	const formRef: React.MutableRefObject<HTMLFormElement> = useRef()
	const errorRef: React.MutableRefObject<HTMLDivElement> = useRef()

	// Attempts to create user and shows any errors if any occur
	const handleSubmit = () => {
		formRef.current.classList.add('was-validated')

		const isError = user.createUser(email, username, password, setFormError)
		isError.then((e) => {
			testFormError({ e, email, username, password, errorRef })
		})
	}

	return (
		<div
			className='position-absolute top-50 start-50 translate-middle m-auto col-10 col-sm-8 col-md-6 col-lg-4 register-div p-sm-2 p-md-3 rounded bg-light'
			data-bs-theme='light'
		>
			<Form className='m-auto mt-2 mt-sm-4 col-10' Ref={formRef} noValidate>
				<Form.Title className='display-6 mb-3 register-title'>Sign Up</Form.Title>

				{/* Email Address */}
				<Form.Field className='mb-3'>
					<Form.FieldLabel htmlFor='formEmail'>Email Address</Form.FieldLabel>
					<Form.FieldInput
						type='email'
						id='formEmail'
						placeholder='email@example.com'
						Ref={emailRef}
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
					<Form.FieldError>Please enter a valid email</Form.FieldError>
				</Form.Field>
				{/* Username */}
				<Form.Field className='mb-3'>
					<Form.FieldLabel htmlFor='formUsername'>Username</Form.FieldLabel>
					<Form.FieldInput
						type='text'
						id='formUsername'
						placeholder='Username'
						Ref={usernameRef}
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						required
					/>
					<Form.FieldError>Please enter a valid username</Form.FieldError>
				</Form.Field>
				{/* Password */}
				<Form.Field className='mb-3'>
					<Form.FieldLabel htmlFor='formPassword'>Password</Form.FieldLabel>
					<Form.FieldInput
						type='password'
						id='formPassword'
						placeholder='Password'
						Ref={passwordRef}
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
					<Form.FieldError>Please enter a valid password</Form.FieldError>
				</Form.Field>

				{/* Register error message display */}
				<Form.Error className='mb-3 visually-hidden text-center' Ref={errorRef}>
					{formError}
				</Form.Error>
				{/* Form submit button */}
				<Form.Button
					type='button'
					onClick={handleSubmit}
					className='btn btn-primary'
				>
					Sign Up
				</Form.Button>
				{/* Redirect to homepage for login */}
				<Form.Redirect
					divClassName='already-signed-up mt-2 text-center'
					nonAnchorText='Already signed up? '
					href={ROUTES.INDEX}
				>
					Login
				</Form.Redirect>
			</Form>
		</div>
	)
}
