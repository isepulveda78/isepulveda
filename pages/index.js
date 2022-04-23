import Navigation from "@/components/Navigation"
import LayoutTwo from "@/components/LayoutTwo"
import Head from "@/components/Head"
import Post from "@/components/Post"
import Link from "next/link"

export default function blog({posts}){
    return (
        <LayoutTwo>
               <Navigation />
               <Head />
               <div className="container">
                    <div className="row">
                        
                    <h2>Notes</h2>
                    { posts.length === 0 && <h3>No notes.</h3> }

                        {posts.map((evt) => (
                            <Post key={evt.id} post={evt}/>
                        ))}
                        <div className="d-grid gap-2">
                            <Link href="/blog"><a className="btn btn-primary btn-lg" type="button">All Notes</a></Link>
                        </div>
                    </div>
               </div>
        </LayoutTwo>
     
    )
}


export async function getStaticProps(){
    const res = await fetch(`/api/posts`)
    const posts = await res.json()
    return {
        props: {
            posts: posts.slice(0, 6),
        }
    }
}
