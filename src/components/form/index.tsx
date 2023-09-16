import FormTitle from "@components/form/form-title"
import FormBtn from "./form-btn"
import FormError from "./form-error"
import FormField from "./form-field"
import FieldError from "./form-field/field-error"
import FieldInput from "./form-field/field-input"
import FieldLabel from "./form-field/field-label"
import FormRedirect from "./form-redirect"

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

export * from "./utils"

Form.Title = FormTitle
Form.Field = FormField
Form.FieldLabel = FieldLabel
Form.FieldInput = FieldInput
Form.FieldError = FieldError
Form.Error = FormError
Form.Button = FormBtn
Form.Redirect = FormRedirect
