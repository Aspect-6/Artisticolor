import { forwardRef } from "react"

interface FormErrorProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
}

export default forwardRef(function FormError(
    { children, ...props }: FormErrorProps,
    ref: React.ForwardedRef<HTMLDivElement>
) {
    return (
        <div ref={ref} style={{ color: "#dc3545" }} {...props}>
            {children}
        </div>
    )
})
