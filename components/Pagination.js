import Link from "next/link"
import { PER_PAGE } from "utls/wordpress"

export default function Pagination({page, total}){
    const lastPage = Math.ceil(total / PER_PAGE)
    return (
        <>
         <ul className="pagination justify-content-center">
             {page > 1 && (
            <li className="page-item disabled">
                <Link href={`https://isrsep.dreamhosters.com/wp-json/wp/v2/posts?filter[posts_per_page]=${PER_PAGE}&page=${page - 1}`}>
                    <a className="page-link">Previous</a>
                </Link>
            </li>
            )}
            {page < lastPage && (
            <li className="page-item">
                <Link href={`/wp-json/wp/v2/posts?filter[posts_per_page]=${PER_PAGE}&page=${page + 1}`}>
                    <a className="page-link">Next</a>
                </Link>
            </li>
            )}
          </ul>
        </>
    )
}