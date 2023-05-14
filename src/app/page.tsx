'use client'
import Background from '@/components/Background'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  router.push("/login")

  return (
    <Background/>
  )
}
