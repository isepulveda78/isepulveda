import Link from "next/link"
export default function Head(){
    return(
        <header className="py-5 border-bottom mb-4 background-header">
                <div className="text-center my-5 text-dark">
                    <h2 className="font-pacifico">Welcome</h2>
                <Link href={'#portfolio'}><a type="button" className="btn btn-outline-dark btn-lg me-1">Portfolio</a></Link>
                </div>
        </header>
    )
}
