import Navigation from "@/components/Navigation"
import LayoutTwo from "@/components/LayoutTwo"
import Categories from "@/components/Categories"
import Post from "@/components/PostColumn"
import Link from "next/link"
import Footer from "@/components/Footer"
import { getCategories } from "utls/wordpress"

import https from 'https'

const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
})

export default function blog({posts, categories}){

    const jsxPosts = posts.map((post) => {
        const cat = post.cats.map((cat)=> {
             return cat.name
         })
         return  <Post key={post.id} post={post} cats={cat}/>
     })

    const jsxCats = categories.map((cat) => {
         return  <Categories key={cat.id} categories={cat} />
     })

    return (
        <LayoutTwo>
               <Navigation />
               <div className="container">
                    <div className="row mt-5">
                    <div className="col-lg-8">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item active" aria-current="page"><Link href="/">Back</Link></li>
                        </ol>
                    </nav>
                        <h2>Notes</h2>
         
                            { posts.length === 0 && <h3>No notes.</h3> }

                            {jsxPosts}
                        </div>
                        <div className="col-lg-4">
                        <div className="card mb-4">
                            <div className="card-header">Topics</div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="list-unstyled mb-0">
                                         { jsxCats }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
               </div> 
               <Footer />
        </LayoutTwo>
     
    )
}

export async function getServerSideProps({ params: {id} }){
    const res = await fetch(`https://isrsep.dreamhosters.com/wp-json/wp/v2/posts?categories=${id}`,{
        agent: httpsAgent
    })
    const posts = await res.json()
    const categories = await getCategories()
    return {
        props: {
            posts,
            categories
        }
    }
}