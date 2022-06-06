import Navigation from "@/components/Navigation"
import LayoutTwo from "@/components/LayoutTwo"
import Head from "@/components/Head"
import Post from "@/components/Post"
import Link from "next/link"
import Footer from "@/components/Footer"
import { getPortfolio } from "utls/wordpress"

export default function blog({posts}){
    
    const jsxPosts = posts.map((post) => {
        const cat = post.categories.map((cat)=> {
             return <div className="badge bg-primary" key={cat.id}>{cat.name}</div>
         })
         return <Post post={post} cats={cat}/>
     })
    return (
        <LayoutTwo>
               <Navigation />
               <Head />
               <div className="container">
                    <div className="row">  
                    <h2 className="text-center font-pacifico">Blog</h2>
                    { posts.length === 0 && <h3>No Posts</h3> }
                        {jsxPosts}
                        <div className="d-grid gap-2">
                            <Link href="/blog"><a className="btn btn-primary btn-lg" type="button">Read My Blog</a></Link>
                        </div>
                    </div>
               </div>
               <Footer />
        </LayoutTwo>
     
    )
}

export async function getStaticProps(){
    const posts = await getPortfolio()

    return {
        props: {
            posts
        },
        revalidate: 10, 
    }
}
