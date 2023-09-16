// import { Link } from "react-router-dom"

interface NavBarLinkProps
    extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    path: string
    children: React.ReactNode
}

export default function NavBarLink({
    path,
    children,
    ...props
}: NavBarLinkProps) {
    return (
        <li className='nav-item'>
            <a href={"http://localhost:8000" + path} className='nav-link fs-5 px-2'>
                {children}
            </a>
        </li>
    )
}
