import React,{useState,useEffect} from 'react'
import Header from './header'
import Footer from './footer'
import { FaWindows,FaUserFriends,FaProductHunt,FaUserAlt,FaWrench,FaBasketballBall,FaBox,FaPowerOff} from "react-icons/fa";
import Link from 'next/link'


function Layout(Props) {

    const {children} = Props;
    const [menuToggle,SetmenuToggle] = useState(true);
    const [path,Setpath] = useState([]);

    const handle_menuToggle = () => {       
        if(menuToggle == true){
            SetmenuToggle(false);
        }else{
            SetmenuToggle(true);
        }
    }

    const Out = async ()  => {

        // dispatch(Logout_Auth());
    }

    useEffect(() => {
        
        // var arr =  window.location.pathname.split('/');
        // Setpath(arr);
    },[]);

    
    return (
        <div className='main-con d-flex flex-column'>
            <div className="header bg-primary-base">
                 <Header  />
            </div>
            <div className="content">
                {children}
            </div>

            <div className="footer bg-primary-base">
                 <Footer  />
            </div>
            
        
        <style jsx>{`

            .main-con{
                height:100vh;
            }

            .main-content{
                overflow-y: scroll;
                // width:100%;
            }

            .list-container{
                min-height:500px;
                height:100%;
                width: 162px;
            }
    
            .theme-content{
                width:calc(100% - 162px);
                background:#F3F3F3;
                height:100%;
                min-height:500px;
            }

            .list-item{
                width: 162px;
                padding:10px;
                color:#747a80
            }

            .icon{
                color: #012;
                font-size: 17.5px;
                padding: 0px 9px;
            }

            .link-title{
                color:#012;
                font-size: 14.5px;
                font-weight:400;
            }

            .sidebar-hide .list-container{
                background:#3281f2;
                width:50px;
                padding: 0px;
            }

            .sidebar-hide  .list-item.{
                padding: 0px!important;
            }

            .sidebar-hide  .icon {
                font-size: 17.5px;
                padding: 0px 5px;
                color:white;
            }

            .sidebar-hide .link-title{
                display:none;
            }

            .active_nav_item{
                background:#a0d6eb;
            }

            .logout-button{
                background: none!important;
                border: none!important;
            }
        
        `}</style>

     </div>)
}

export default Layout