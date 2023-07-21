import ProfileBox from '@components/ProfileBox/ProfileBox'
import Login from '@components/functions/login'
import React from 'react'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Login />
		<ProfileBox />
	</React.StrictMode>
)
