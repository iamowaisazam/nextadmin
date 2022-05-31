import React from 'react'
import Link from 'next/link'
import Layout from '../components/front/layout'

function Page() {
  return (<>

        <Layout>
               <div className=" text-center py-3 font-roboto section-bread">
                   <div className="container">
                   <h1 className='text-center' >Contact</h1>
                   <p className='m-0' >home - contact</p>
                   </div>
               </div>

               <div className="py-3 font-roboto section-about">
                   <div className="container py-5">
                       <div className="row">
                           <div className="pt-4 py-3 col-md-6 text-center">
                            <img className='img-fluid' src="/front/images/about1.png" />
                           </div>

                           <div className="m-auto col-md-6 text-left ">
                                <div>
                                    <div className="mb-2">
                                    <label className="form-label">Fullname</label>
                                    <input type="text" className="form-control" placeholder="Fullname" />
                                    </div>
                                    <div className="mb-2">
                                    <label className="form-label">Subject</label>
                                    <input className="form-control" placeholder="Subject" />
                                    </div>
                                    <div className="mb-2">
                                    <label className="form-label">Email address</label>
                                    <input type="email" className="form-control" placeholder="name@example.com" />
                                    </div>
                                    <div className="mb-2">
                                    <label className="form-label">Details</label>
                                    <textarea className="form-control" rows={3} defaultValue={""} />
                                    </div>
                                    <div className="mb-2 text-center ">
                                         <button className='btn btn-primary' >Submit</button>
                                    </div>
                                </div>
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