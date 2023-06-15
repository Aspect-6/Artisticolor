declare module 'artisticolor/header' {
    export type LinkProps = {
        url: string,
        pageName: string
    }
    export type NavBarProps = {
        isLoggedIn: boolean,
        username: string | null,
        urls: string[],
        pageNames: string[],
    }
}
declare module 'artisticolor/login-box' {
    export type InputType = {
        type: 'Email' | 'Username' | 'Password',
        Ref: React.MutableRefObject<any>
    }
}
declare module 'artisticolor/profile-box' {
    export type InputType = {
        type: 'Email' | 'Username' | 'Password' 
    }
}