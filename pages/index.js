import Link from 'next/link'
import Layout from '../components/Layout';
const Index = ()=>{     
       return(
            <Layout>
               <h1 className="title"> Hello</h1>
               <Link href="/next"><a>Pass Next</a></Link>
               <Link href="/simple"><a><h2>Simple</h2></a></Link>
               <style jsx>
                   { `
                    .title{
                        color:red;
                        font-size:50px;
                    }
                    a{
                        text-decoration:none;
                        padding:12px;
                        background:yellow;
                        border-radius:5px;
                    }
                    a:hover{
                        color:green;
                        background:red;
                    }
                    img{
                        width:200px;
                        heigth:100px;
                    }
                    `}
               </style>
            </Layout>
        )
    }



export default Index;