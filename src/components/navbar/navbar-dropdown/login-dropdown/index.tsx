import Form, { testFormError } from "@components/form"
import user from "@lib/functions/user"
import { useRef, useState } from "react"
import Divider from "../../../divider"

interface LoginDropdownProps {}

export default function LoginDropdown({}: LoginDropdownProps) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const emailRef = useRef<HTMLInputElement>()
    const passwordRef = useRef<HTMLInputElement>()
    const formRef = useRef<HTMLFormElement>()
    const errorRef = useRef<HTMLDivElement>()

    const handleSubmit = () => {
        formRef.current.classList.add("was-validated")

        user.signIn(email, password).then((e) => {
            testFormError({ e, email, password, errorRef })
        })
    }

    return (
        <Form
            className='dropdown-menu dropdown-menu-end p-3 bg-body-secondary'
            style={{ minWidth: "250px" }}
            Ref={formRef}
            noValidate
        >
            {/* Email Address */}
            <Form.Field className='mb-3'>
                <Form.FieldLabel htmlFor='formEmail'>
                    Email Address
                </Form.FieldLabel>
                <Form.FieldInput
                    type='email'
                    id='formEmail'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    ref={emailRef}
                    placeholder='email@example.com'
                    required
                />
                <Form.FieldError>Please enter a valid email</Form.FieldError>
            </Form.Field>
            {/* Password */}
            <Form.Field className='mb-2'>
                <Form.FieldLabel htmlFor='formPassword'>
                    Password
                </Form.FieldLabel>
                <Form.FieldInput
                    type='password'
                    id='formPassword'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    ref={passwordRef}
                    placeholder='Password'
                    required
                />
                <Form.FieldError>Please enter a valid password</Form.FieldError>
            </Form.Field>
            {/* Error Message */}
            <Form.Error
                className='mb-2 visually-hidden text-center'
                ref={errorRef}
            >
                Incorrect email or password
            </Form.Error>
            {/* Sign in button */}
            <Form.Button
                className='btn btn-primary'
                type='button'
                onClick={handleSubmit}
            >
                Sign In
            </Form.Button>

            <Divider />
            {/* Redirect to register page */}

            <a
                className='btn btn-primary px-3 d-grid'
                href='http://localhost:8000/register'
            >
                No Account? Sign Up
            </a>
        </Form>
    )
}
