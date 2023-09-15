import * as Home from './Home/Exports';

export const Routes=[
    {
        path:'/',
        element:<Home.Index/>,
        errorElement:<>Error</>,
        children:Home.Routes
    }
]