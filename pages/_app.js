import Script from "next/script"
import '../styles/blog.css'
import '../styles/custom.css'
import LayoutTwo from "@/components/LayoutTwo"
import {  useRouter } from "next/router"
import Spinner from "@/components/Spinner"
import { useState, useEffect } from 'react'

function MyApp({ Component, pageProps }) {

  const [loading, setLoading] = useState(false)

  const router = useRouter()

  useEffect(() => {
    router.events.on("routeChangeStart", (url) => {
      setLoading(true)
    })
  
    router.events.on("routeChangeComplete", (url) => {
      setLoading(false)
    })
  
  }, [])
  
  return (
      <>
      { loading ? <Spinner /> : (
            <LayoutTwo>
            <Component {...pageProps} />
            <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></Script>
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></Script>
          </LayoutTwo>
      )}
      </>
  )
}
export default MyApp
