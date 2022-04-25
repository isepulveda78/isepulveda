import Link from "next/link"

export default function Categories({categories}){
    return (
                <>
                        {categories.map((category, id) => (
                           <div> <Link key={id} href={`/blog/category/${category.toLowerCase()}`}>
                                {category}
                            </div> </li>
                        ))}
               </>
    )
}
