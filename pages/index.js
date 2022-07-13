import Navigation from "@/components/Navigation"
import LayoutTwo from "@/components/LayoutTwo"
import Head from "@/components/Head"
import Post from "@/components/Post"
import Link from "next/link"
import Footer from "@/components/Footer"
import { getPortfolio } from "utls/wordpress"

export default function Blog({posts}){
    
    const jsxPosts = posts.map((post) => {
        const cat = post.categories.map((cat)=> {
             return <div className="badge bg-primary" key={cat.id}>{cat.name}</div>
         })
         return <Post key={post.id} post={post} cats={cat}/>
     })
    return (
        <LayoutTwo>
               <Navigation />
               <Head />
               <div className="container">
                    <div className="row" id="portfolio">  
                    <h2 className="text-center font-pacifico">Portfolio</h2>
                    { posts.length === 0 && <h3>No Posts</h3> }
                        {jsxPosts}
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
