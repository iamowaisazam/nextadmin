import { FaPowerOff,FaBars,FaWindowClose,FaUserAlt } from "react-icons/fa";
import Link from 'next/link'


function Header(Props){

  return (<>
    <section className='header py-3'>
          <div className="container">
              <div className="d-flex  flex-row">
                    <div className="align-self-center ">
                        <img className='logo pr-2' src={'/admin/images/logo-light.JPG'} />
                    </div>
                    <div className="flex-fill align-self-center">
                        <div className='navigation font-poppins ' >
                            <ul>
                                <li><Link href={'/'} ><a>Home</a></Link></li>
                                <li><Link href={'/about'} ><a>About</a></Link></li>
                                <li><Link href={'/shop'} ><a>Shop</a></Link></li>
                                <li><Link href={'/contact'} ><a>Contact</a></Link></li>
                                <li><Link href={'/admin/login'} ><a>Login</a></Link></li>
                                <li><Link href={'/admin/register'} ><a>Register</a></Link></li>
                            </ul>
                        </div>
                    </div>
              </div>
          </div>
    </section>
    <style jsx>{`

        a:hover {
            color: none !important;
         }

        .logo{
          max-width:148px;

        }

        .header-icons{
          padding: 0px 8px;
          font-size: 24px;
          line-height: 0px;
          margin: 0px;
          background: transparent;
          border: 0px;
        }

        .navigation ul{
            list-style-type: none!important;
            display:flex;
            margin:0px;
            justify-content: flex-end;
        }

        .navigation ul li a{
            padding: 0px 10px;
            color:white!important;
        }
    
    `}</style>
  
   </>)
}
export default Header;