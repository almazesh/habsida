import Registration from '../pages/register/Registration';
import Create from '../pages/create/Create';
import SignIn from '../pages/signin/SignIn';
import Reset from '../pages/reset/Reset';
import Main from '../pages/main/Main';
import Exam from '../pages/examination/Exam';


export const Routeauth = [

  {
    path:'/registration',
    element:Registration,
    exact:true,
    auth:false,
  },
  {
    path:'/create',
    element:Create,
    exact:true,
    auth:false,
  },
  {
    path:'/sign',
    element:SignIn,
    exact:true,
    auth:false,
  },
  {
    path:'/reset',
    element:Reset,
    exact:true,
    auth:false,
  },
 
]

export const RoutePage = [
  {
    path:'/',
    element:Main,
    exact:true,
    auth:true,
  },
  {
    path:'/examination',
    element:Exam,
    exact:true,
    auth:true,
  },
]