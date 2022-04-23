import { useRouter } from 'next/router'

const router = useRouter

export const API_URL = router.pathname || 'http://localhost:3000'