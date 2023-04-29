import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from '../components/Header';
import Main from '../Layout/Main';
const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
	},
]);

export default router;