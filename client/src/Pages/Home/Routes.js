import  * as Add from './Add/Exports';
import * as Scene from './Scene/Exports';

export const Routes=[
    {
        path:'/add',
        element:<Add.Index/>,
        children:Add.Routes
    },
    {
        path:'/scenes',
        element:<Scene.Index/>,
        children:Scene.Routes
    }
]