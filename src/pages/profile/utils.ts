export function showBoostrapInputError(
    refToCheck: React.MutableRefObject<any>,
    errorRef: React.MutableRefObject<any>,
    message: string
) {
    if (refToCheck.current.classList.contains("is-valid")) {
        refToCheck.current.classList.remove("is-valid")
    }
    errorRef.current.innerText = message
    refToCheck.current.classList.add("is-invalid")
}
export function hideBoostrapInputError(ref: React.MutableRefObject<any>) {
    ref.current.classList.remove("is-invalid")
}
