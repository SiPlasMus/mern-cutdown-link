import React from 'react';
import {Routes, Route, Navigate, redirect as Redirect} from 'react-router-dom'
import {AuthPage} from './pages/AuthPage'
import {LinksPage} from './pages/LinksPage'
import {CreatePage} from './pages/CreatePage'
import {DetailPage} from './pages/DetailPage'

export const useRoutes = isAuthenticated => {
  if (isAuthenticated) {
	  return (
	    <Routes>
	    	<Route path="/links" exact element={<LinksPage />}></Route>
	    	<Route path="/create" exact element={<CreatePage />}></Route>
	    	<Route path="/detail/:id" element={<DetailPage />}></Route>
	    	{/*<Route path="/" element={<Redirect to="/create" />}></Route>*/}
	    	<Route path="*" element={<Navigate replace to="/create" replace/>} />
	    	
	    </Routes>
	  )
  }

  return (
	    <Routes>
	    	<Route path="/" exact element={<AuthPage />}></Route>
	    	{/*<Route path="/" exact element={<Redirect to="/" />}></Route>*/}
	    	<Route path="*" element={<Navigate replace to="/" />} />
	    </Routes>
	  )

}

export default useRoutes;
