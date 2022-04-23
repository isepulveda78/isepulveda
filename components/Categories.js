import Link from "next/link"

export default function Categories({categories}){
    return (
                <>
                        {categories.map((category, index) => (
                            <Link key={index + 1} href={`/blog/category/${category.toLowerCase()}`}>
                                {category}
                            </Link>
                        ))}
               </>
    )
}
