import Link from "next/link"

export default function Categories({categories}){
    return (
                <>
                        {categories.map((category, id) => (
                           <li> <Link key={id} href={`/blog/category/${category.toLowerCase()}`}>
                                {category}
                            </Link> </li>
                        ))}
               </>
    )
}
