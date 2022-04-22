import Link from "next/link"

export default function Categories({categories}){
    return (
                <>
                        {categories.map((category, index) => (
                            <li><Link key={index} href={`/blog/category/${category.toLowerCase()}`}>{category}</Link></li>
                        ))}
                </>
    )
}