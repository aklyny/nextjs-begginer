import Head from 'next/head'
const Layout = ({children })=>{
    return(
        <div>
        <Head>
            <title>NEXT JS</title>
        </Head>
            <header><h1>NavBar</h1></header>

            {children}
            <footer><h2>Footer</h2></footer>
        </div>
    )
}


export default Layout;