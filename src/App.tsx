import NavBar from "@components/navbar"
import ProfilePage from "@pages/profile"
import RegisterPage from "@pages/register"

// export const bgContext =
// createContext<[string, React.Dispatch<React.SetStateAction<string>>]>(null)
export default function App() {
    // const [bodyBgColor, setBodyBgColor] = useState<string>("#fff")

    // useEffect(() => {
    //     console.log("render")
    //     if (location.pathname === "/register") {
    //         console.log("blue")
    //         // setBodyBgColor("#0d6efd")
    //     } else {
    //         console.log("white")
    //         // setBodyBgColor("#fff")
    //     }
    // })
    // style={{ background: bodyBgColor, minHeight: "100vh" }}
    // if (location.pathname === "/register") {
    //     document.body.style.backgroundColor = "#0d6efd"
    // }
    
    return (
        <>
            {location.pathname === "/" && <></>}
            {location.pathname !== "/register" && <NavBar />}
            {location.pathname === "/projects" && <></>}
            {location.pathname === "/profile" && <ProfilePage/>}
            {location.pathname === "/register" && <RegisterPage />}
        </>
        // // <bgContext.Provider value={[bodyBgColor, setBodyBgColor]}>
        //     <BrowserRouter>
        //         {/* {location.pathname !== "/register" && <NavBar />} */}
        //         <Routes>
        //             <Route path='/' element={<NavBar />} />
        //             <Route
        //                 path='/profile'
        //                 element={
        //                     <>
        //                         <NavBar />
        //                         <ProfilePage />
        //                     </>
        //                 }
        //             />
        //             <Route path='/projects' element={<NavBar />} />
        //             <Route path='/register' element={<RegisterPage />} />
        //         </Routes>
        //     </BrowserRouter>
        // // </bgContext.Provider>
    )
}
