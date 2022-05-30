import Navigation from "@/components/Navigation"
import LayoutTwo from "@/components/LayoutTwo"
import Head from "@/components/Head"
import Post from "@/components/Post"
import Link from "next/link"
import Footer from "@/components/Footer"
import { getPosts } from "utls/wordpress"

export default function blog({posts}){
    
    const jsxPosts = posts.map((post) => {
        const cat = post.cats.map((cat)=> {
             return cat.name
         })
         return  <Post key={post.id} post={post} cats={cat}/>
     })
    return (
        <LayoutTwo>
               <Navigation />
               <Head />
               <div className="container">
                    <div className="row">  
                    <h2>Notes</h2>
                    { posts.length === 0 && <h3>No notes.</h3> }
                        {jsxPosts}
                        <div className="d-grid gap-2">
                            <Link href="/blog"><a className="btn btn-primary btn-lg" type="button">All Notes</a></Link>
                        </div>
                    </div>
               </div>
               <Footer />
        </LayoutTwo>
     
    )
}



export async function getStaticProps(){
    const posts = await getPosts()

    return {
        props: {
            posts: posts.slice(0, 6),
        },
        revalidate: 10, 
    }
}
