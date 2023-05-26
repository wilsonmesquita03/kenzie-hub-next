'use client'
import Background from "@/components/Background"
import { Box, Heading, Button } from "@chakra-ui/react"
import { useAuth } from "@/contexts/AuthContext"

export default function Dashboard() {
  const { user } = useAuth()

  return (
      <Background>  
        <Heading>{user?.name}</Heading>
      </Background>
  )
}
