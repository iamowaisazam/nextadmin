import React from 'react'
import Link from 'next/link'
import Layout from '../components/front/layout'

function Page() {
  return (<>
        <Layout>
               <div className=" text-center py-3 font-roboto section-bread">
                   <div className="container">
                   <h1 className='text-center' >About</h1>
                   <p className='m-0' >home - about</p>
                   </div>
               </div>

               <div className="py-3 font-roboto section-about">
                   <div className="container">
                       <div className="row">
                           <div className="col-md-12 text-center ">
                               <img className='pt-3' src="/front/images/about1.png"  />
                           </div>
                           <div className="pt-4 py-3 col-md-12 text-center">
                           <h3 >Company Title</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, dolorum natus, ipsa asperiores non atque culpa officia iure tenetur at illum sequi repellat illo eaque facere doloremque esse aspernatur corrupti!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, dolorum natus, ipsa asperiores non atque culpa officia iure tenetur at illum sequi repellat illo eaque facere doloremque esse aspernatur corrupti!</p>
                        

                           </div>
                       </div>
                   </div>
               </div>
        </Layout>
        <style jsx>{`
                
                .section-bread{
                        background: #e39534;
                        color:white;
                    }
                
                .home-screen{
                    justify-content: center;
                    display: flex;
                    min-height:100vh;
                    align-items: center;
                }

                .home-screen-container{
                    max-width:700px;
                    width:98%;
                }

                .home-screen-container p{
                    color: #5e5959;
                }
                
                .logo{
                    max-width:123px;
                }

                .login_register_link{
                    font-size:16px;
                }

        `}</style>
  </>)
}

export default Page