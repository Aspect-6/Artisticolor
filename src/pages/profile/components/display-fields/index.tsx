import Form from "@components/form"
import EditBtn from "../edit-btn"

interface displayCredentialProps {
    label: "Email" | "Username" | "Password"
    credential: string
}

export default function DisplayCredential({
    label,
    credential,
}: displayCredentialProps) {
    const labelToLower = label.toLowerCase()
    return (
        <Form.Field className='d-flex align-items-center'>
            <div className='col-3'>
                <Form.FieldLabel className='align-content-center'>
                    {label}
                </Form.FieldLabel>
            </div>
            <div className='col-9 justify-content-end d-flex'>
                <Form.FieldInput
                    type='email'
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
                    data-bs-target={`#change${labelToLower}`}
                />
            </div>
        </Form.Field>
    )
}
