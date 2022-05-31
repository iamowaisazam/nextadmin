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
                 <Header handle_menuToggle={handle_menuToggle} menuToggle={menuToggle} />
            </div>
            <div className={menuToggle == false ? 'd-flex sidebar-hide main-content flex-fill ' : 'd-flex main-content flex-fill ' }  >
                    <div className="font-roboto list-container ">
                            <div className={`list-item ${path[2] == 'dashboard' ? 'active_nav_item' : ''} `}>
                                <Link href="/admin/dashboard" replace><a><span className='icon'><FaWindows /></span><span className='link-title' >Dashboard</span></a></Link>
                            </div>
                            
                            <div className={`list-item ${path[2] == 'profile' ? 'active_nav_item' : ''} `} >
                                <Link href="/admin/profile"><a><span className='icon'><FaUserAlt /></span><span className='link-title' >Profile</span></a></Link> 
                            </div>

                            <div className={`list-item ${path[2] == 'customers' ? 'active_nav_item' : ''} `} >
                                <Link href="/admin/customers/index"><a><span className='icon' ><FaUserFriends /></span><span className='link-title'>Customers</span></a></Link> 
                            </div>
                            
                            <div className={`list-item ${path[2] == 'categories' ? 'active_nav_item' : ''} `}>
                                <Link href="/admin/categories/index"><a><span className='icon'><FaBasketballBall /></span><span className='link-title' >Categories</span></a></Link> 
                            </div>

                            <div className={`list-item ${path[2] == 'products' ? 'active_nav_item' : ''} `}>
                                <Link href="/admin/products/index"><a><span className='icon'><FaProductHunt /></span><span className='link-title' >Products</span></a></Link> 
                            </div>

                            <div className={`list-item ${path[2] == 'orders' ? 'active_nav_item' : ''} `}>
                                <Link href="/admin/orders/index"><a><span className='icon' ><FaBox /></span><span className='link-title' >Orders</span> </a></Link> 
                            </div> 

                            <div className="list-item">
                                <Link href="/admin/settings"><a><span className='icon'><FaWrench/></span><span className='link-title' >Settings</span></a></Link> 
                            </div>

                            <div className="list-item">
                                <Link href="/"><a><span className='icon'><FaPowerOff/></span><span className='link-title' >Logout</span></a></Link> 
                            </div>

                            {/* <div className="list-item">
                                <button className='logout-button' onClick={Out} > 
                                <span className='icon'><FaPowerOff /></span>
                                <span className='link-title'>Logout</span> 
                                </button>
                            </div> */}
                    </div>
                    <div className="theme-content flex-fill">
                         {children}
                    </div>
                </div>
                <div className="footer bg-primary-base ">
                    <Footer/>
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