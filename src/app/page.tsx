'use client'
import Image from 'next/image'
import { Heading, Box, Button } from '@chakra-ui/react'

export default function Home() {
  return (
    <main>
      <Box w="100px" h="100px" bgColor="grey.0"></Box>
      <Heading color="grey.0">Teste</Heading>
      <Button bgColor="grey.3" variant="plus">+</Button>
    </main>
  )
}
