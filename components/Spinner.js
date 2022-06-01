import packman from '../public/img/packman.svg'
import Image from 'next/image'

export default function Spinner() {
  return (
    <div className="text-center pacman">
        <Image src={packman} width={60} height={50}/>
    </div>
  )
}
