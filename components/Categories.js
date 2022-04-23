import Link from "next/link"

export default function Categories({categories}){
    return (
                <>
                        {categories.map((category) => (
                            <Link href={`/blog/category/${category.toLowerCase()}`}>
                                <li>{category}</li>
                            </Link>
                        ))}
                </>
    )
}
