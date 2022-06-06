import Navigation from "@/components/Navigation"
import LayoutTwo from "@/components/LayoutTwo"
import Categories from "@/components/Categories"
import Post from "@/components/PostColumn"
import Link from "next/link"
import Footer from "@/components/Footer"
import { getPosts, getCategories} from "utls/wordpress"
import ReactPaginate from "react-paginate"
import { useState } from 'react'
import https from 'https'

const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
})

export default function Blog({posts, categories}){

    const [pageNumber, setPageNumber] = useState(0)
    const postsPerPage = 6
    const pagesVisited = pageNumber * postsPerPage

    const jsxPosts = posts
    .slice(pagesVisited, pagesVisited + postsPerPage)
    .map((post) => {
       const cat = post.cats.map((cat)=> {
            return <div className="badge bg-primary" key={cat.id}>{cat.name}</div>
        })
        return  <Post key={post.id} post={post} cats={cat}/>
    })

    const jsxCats = categories.map((cat) => {
        return  <Categories key={cat.id} categories={cat} />
    })

    const pageCount = Math.ceil(posts.length / postsPerPage)

    const changePage = ({ selected }) => {
      setPageNumber(selected)
    }

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
                        <h2 className="font-pacifico">Blog</h2>
         
                            { posts.length === 0 && <h3>No Posts</h3> }

                            {jsxPosts}
                       <nav>
                       <ReactPaginate
                                previousLabel={"Previous"}
                                nextLabel={"Next"}
                                pageCount={pageCount}
                                onPageChange={changePage}
                                containerClassName={"pagination text-dark"}
                                previousLinkClassName={"page-link bg-white text-dark"}
                                pageLinkClassName={"page-link text-dark bg-white"}
                                nextLinkClassName={"page-link bg-white text-dark"}
                                disabledClassName={"page-item disabled"}
                                activeClassName={"page-item text-primary"}
                            />
                       </nav>
                        </div>
                     
                        <div className="col-lg-4">
                                <div className="card bg-white text-dark">
                                    <div className="card-header text-dark border-dark font-anton">
                                       <h3 className="category-header mb-n5">Categories</h3>
                                    </div>
                                    <div className="card-body">
                                            { jsxCats }
                                    </div>
                                </div>
                        </div>
                    </div>
               </div> 
               <Footer />
        </LayoutTwo>
     
    )
}


export async function getStaticProps(){

    const posts = await getPosts()
    const categories = await getCategories()

    return {
        props: {
            posts,
            categories
        },
        revalidate: 10, 
    }
}

