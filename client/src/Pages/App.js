import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import { Routes } from './Routes';
const router=createBrowserRouter(Routes)

export const App=()=>{
    return (<div className='app'>
        <RouterProvider router={router}/>
    </div>);
}