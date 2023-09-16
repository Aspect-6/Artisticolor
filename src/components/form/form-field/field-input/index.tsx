import { forwardRef } from "react"

interface FieldInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default forwardRef(function FieldInput(
    { ...props }: FieldInputProps,
    ref: React.ForwardedRef<HTMLInputElement>
) {
    return (
        <input
            ref={ref}
            {...props}
            className={"form-control ".concat(props.className)}
        />
    )
})
