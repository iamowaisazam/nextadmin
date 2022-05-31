import React from 'react'
import Link from 'next/link'
import Layout from '../../components/front/layout'
import axios from 'axios'

function Page({data,categories,tags}) {

  console.log(data);
  return (<>
        <Layout>
               <div className=" text-center py-3 font-roboto section-bread">
                   <div className="container">
                   <h1 className='text-center' >Products</h1>
                   <p className='m-0' >home - products</p>
                   </div>
               </div>
               <div className="py-3 font-roboto section-about">
                   <div className="container">
                     <div className="row">
                       <div className="sidebar col-md-3">
                          <div className="widget">
                            <h3>Search</h3>
                              <input className='form-control' type="text" name="search" />
                          </div> 

                          <div className="widget">
                            <h3>Categories</h3>
                            <ul>
                            {
                                categories.map((index,key) => {
                               return <li key={key}><div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id={`category${index.id}`}  /><label className="form-check-label" htmlFor={`category${index.id}`}>{index.title}</label>
                                  </div>
                                </li>
                               })
                            }
                            </ul> 
                          </div>

                          <div className="widget">
                            <h3>Tags</h3>
                            <ul>
                            {
                                tags.map((index,key) => {
                               return <li key={key}><div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id={`tags${index.id}`}  /><label className="form-check-label" htmlFor={`tags${index.id}`}>{index.title}</label>
                                  </div>
                                </li>
                               })
                            }
                            </ul> 
                          </div>
                         
                       </div>
                       <div className="col-md-9">
                         <div className="container-fluid">
                            <div className="row">
                                {
                                  data.data.map((index,key) => {
                                      return <div key={key} className="col-md-3 text-center ">
                                            <h4 className='m-0 pt-2' >{index.title}</h4>
                                            <img className='img pt-3' src={index.thumbnail}  />
                                            <p className='pt-2 m-0' >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, dolorum natus, ipsa asperiores non atque </p>
                                            <Link href={`/products/${index.slug}`} ><a>View</a></Link>
                                    </div>
                                  })
                                }
                            </div>

                            <div className="row">
                              <div className="col-12">
                              <nav aria-label="Page navigation example">
                                  <ul className="pagination">
                                   {
                                      data.pager.pages.map((index,key) => {
                                            return <li key={key} className="page-item"><a className="page-link">Previous</a></li>
                                      })
                                   }
                                  </ul>
                                </nav>
                              </div>
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

                    .img{
                        width:200px;
                    }

                    .sidebar ul {
                      list-style:none;
                      margin:0px;
                      padding:0px;
                    }

                    .sidebar h3 {
                      font-size: 24px;
                      padding-bottom: 2px;
                      padding-top: 13px;
                    }

                    .pagination{
                      justify-content: center;
                    }
        `}</style>
  </>)
}


// This gets called on every request
export async function getServerSideProps() {

  // try {

      let products = await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL+'/products');
      let categories = await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL+'/categories');
      let tags = await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL+'/tags');

      return { props: { 
          data:products.data,
          categories:categories.data,
          tags:tags.data
        } 
      }

  // } catch (error) {
  //     return {
  //         notFound: true,
  //       }
  // }
  
}

export default Page