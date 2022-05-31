import React from 'react'
import Link from 'next/link'
import Layout from '../../components/front/layout'
// import {query} from '../../utils/db'
import axios from 'axios'

function Page({data}) {

    

  return (<>
        <Layout>
               <div className=" text-center py-3 font-roboto section-bread">
                   <div className="container">
                   <h1 className='text-center' >{data.title}</h1>
                   <p className='m-0' >home - shop</p>
                   </div>
               </div>
               <div className="py-3 font-roboto section-about">
                   <div className="container">
                       <div className="row">
                            <div className="m-auto col-md-6 text-center ">
                                <h4 className='m-0 pt-2' >{data.title}</h4>
                                <img className='img pt-3' src={data.thumbnail}  />
                                <p className='pt-2 m-0' >{data.description}</p>
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
        `}</style>
  </>)
}

// This gets called on every request
export async function getServerSideProps(ctx) {

    let {slug} = ctx.params;

    try {

        let res = await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL+'/products/get',{params:{slug:slug}});
        return { props: { 
            data:res.data
           } 
        }

        
    } catch (error) {

        return {
            notFound: true,
          }
        
    }

}

export default Page