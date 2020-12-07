import Layout from "../components/Layout";
import Link from 'next/link'
import Head from 'next/head'


const Next = ()=>{     
    return(
         <Layout>
         <Head>
             <title>Nxet Page</title>
         </Head>
             <h1>Next</h1>
             <img src="/static/na.jpg" width="500px" height="300px" />

             <Link href="/"><a><p>Home</p></a></Link>
             <style>
                 {`
                    img{
                        pointer-events:none;
                    }
                    a{
                        padding:12px;
                        text-decoration:none;
                    }
                 `}
             </style>
         </Layout>

     )

 }



export default Next;