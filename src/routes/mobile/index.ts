import Home from '../../pages/home'
import {RouteConfig} from 'react-router-config'
import DragList from '../../pages/01/dragList'

const mobileRoutes:RouteConfig = [
    {
        path: "/",
        component: Home,
    },
    {
        path: 'dragList',
        exact: true,
        component: DragList
    }
]

export default mobileRoutes;
