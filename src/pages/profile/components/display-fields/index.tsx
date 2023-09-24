import Form from "@components/form"
import EditBtn from "../edit-btn"

interface displayCredentialProps extends React.HTMLAttributes<HTMLDivElement> {
    label: "Email" | "Username" | "Password"
    credential: string
}

export default function DisplayCredential({
    label,
    credential,
    ...props
}: displayCredentialProps) {
    const labelToLower = label.toLowerCase()

    return (
        <Form.Field {...props}>
            <div className='col-3'>
                <Form.FieldLabel className='align-content-center'>
                    {label}
                </Form.FieldLabel>
            </div>
            <div className='col-9 justify-content-end d-flex'>
                <Form.FieldInput
                    type={label === "Username" ? "text" : labelToLower}
                    value={credential}
                    className='mx-2 credential-display'
                    style={{
                        backgroundImage: `url('../icons/${labelToLower}.svg')`,
                    }}
                    readOnly
                />
                <EditBtn
                    id={`edit-${labelToLower}`}
                    className='btn btn-primary'
                    style={{ minWidth: "fit-content" }}
                    data-bs-toggle='modal'
                    data-bs-target={
                        label !== "Password" && label !== "Email"
                            ? `#change${label}`
                            : `#confirm${label}`
                    }
                />
            </div>
        </Form.Field>
    )
}
