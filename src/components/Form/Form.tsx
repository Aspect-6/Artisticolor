import FormTitle from "@components/Form/FormTitle"
import FormBtn from "./FormBtn"
import FormError from "./FormError"
import FieldError from "./FormField/FieldError"
import FieldInput from "./FormField/FieldInput"
import FieldLabel from "./FormField/FieldLabel"
import FormField from "./FormField/FormField"
import FormRedirect from "./FormRedirect"

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

export * from "./functions"

Form.Title = FormTitle
Form.Field = FormField
Form.FieldLabel = FieldLabel
Form.FieldInput = FieldInput
Form.FieldError = FieldError
Form.Error = FormError
Form.Button = FormBtn
Form.Redirect = FormRedirect
