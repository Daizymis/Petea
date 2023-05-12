import React from 'react';
import './App.css';
import { useRoutes } from "react-router";
import Home from "./pages/home";
import DragList from "./pages/01/dragList";
function App() {
    const routes = useRoutes([
        {
            path: "/",
            element: <Home/>
        },
        {
            path: 'dragList',
            element: <DragList />
        }
    ])
    return routes
}
export default App;
