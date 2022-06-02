import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from "next/link"
import Search from "./Search"
import axios from 'axios'
import https from 'https'

const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
})

export default function Navigation(){

    const [posts, setPosts ] = useState([])
    useEffect(() => {
        const getResults = async () => {
          const data = await axios.get(`https://isrsep.dreamhosters.com/wp-json/wp/v2/posts`)
            .then((res) => {
                const response = res.data
                setPosts(response)
            })
        }
        getResults()
    },[])


    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-padding">
        <div className="container">
            <Link href="/"><div className="navbar-brand" role="button"><Image src={'/img/isepulveda.png'} width={50} height={50} className="logo"/><div className="logo-name ms-2">isepulveda.me</div></div></Link>
            <button className="navbar-toggler mb-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="ms-auto">
                            <Search placeholder={'Search'} data={posts}/>
                </div>
            </div>
        </div>
    </nav>
    )
}

