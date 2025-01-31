import { useEffect } from 'react'
import { useAuth } from '../src/context/AuthContext'
import { useRouter } from 'next/router'

export default function Logout() {
  const { logout } = useAuth()
  const router = useRouter()
  
  useEffect(() => {
    logout()
    router.push('/login')
  }, [])
  
  return <div>Logging out...</div>
}
