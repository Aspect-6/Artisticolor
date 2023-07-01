import React from 'react';
import ReactDOM from 'react-dom/client'

import Login from '../components/functions/login'
import ProfileBox from '../components/ProfileBox/ProfileBox';

ReactDOM.createRoot(document.getElementById('root')).render(
	<>	
		<Login />
		<ProfileBox />
	</>
);