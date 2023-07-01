import Header from "../Header/Header";
import LoginBox from "../LoginBox/LoginBox";

export function renderHeader(currentURL: string, authState: { displayName: string } | null) {
    //Determine urls and pageNames to be passed into <Header />
    let pageNames;

    if(currentURL == 'http://localhost:8000/') {
        pageNames = ['Projects', 'Profile']
    } else if(currentURL.includes('profile')) {
        pageNames = ['Home', 'Projects']
    } else if(currentURL.includes('projects')) {
        pageNames = ['Home', 'Profile']
    }

    const urls = pageNames.map(page => page === 'Home' ? 'index.html' : page.toLowerCase().concat('.html'))

    //Check user authState
    if(!authState){ return (
        <>
            <Header
                isLoggedIn={false}
                username={null}
                urls={urls}
                pageNames={pageNames}
            />
            <LoginBox />
        </>
    )} else if(authState) { return (
        <Header
            isLoggedIn={true}
            username={authState.displayName}
            urls={urls}
            pageNames={pageNames}
        />
    )}
}