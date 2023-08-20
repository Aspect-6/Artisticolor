import NavBar from '@components/NavBar/NavBar'
import ProfileBox from '@components/ProfileBox/ProfileBox'
import React from 'react'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<NavBar />
		<ProfileBox />
	</React.StrictMode>
)
