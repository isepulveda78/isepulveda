import Link from "next/link"
import {
    FaLinkedinIn,
    FaFacebookF,
    FaGithub,
    FaCopyright
} from 'react-icons/fa'

export default function Footer(){
    return(
        <>
        <footer className="bg-dark">
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-12 text-center">
                    <h2 className="p-4"><Link href="/" className="text-light">isepulveda.me</Link></h2>
                        <ul className="nav justify-content-center">
                            <li className="nav-item"><Link href="#"><div className="nav-link text-light" role="button">Home</div></Link></li>
                            <li className="nav-item"><Link href="#"><div className="nav-link text-light" role="button">Home</div></Link></li>
                            <li className="nav-item"><Link href="#"><div className="nav-link text-light" role="button">Home</div></Link></li>
                        </ul>
                        <ul className="nav justify-content-center">
                        <li className="nav-item"><Link href="#"><div className="nav-item text-light" data-toggle="tooltip" data-placement="top" title="LinkedIn" role="button"> <FaLinkedinIn /> </div></Link></li>
                            <li className="nav-item"><Link href="#"><div className="nav-item text-light" data-toggle="tooltip" data-placement="top" title="Facebook" role="button"> <FaFacebookF /> </div></Link></li>
                            <li className="nav-item"><Link href="#"><div className="nav-item text-light" data-toggle="tooltip" data-placement="top" title="GitHub" role="button"> <FaGithub /> </div></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-12 text-center mb-4">
                        <div className="text-light">
                            All rights reserved <FaCopyright /> 2022 
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}