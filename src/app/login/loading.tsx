'use client'
import Background from "@/components/Background";
import { CircularProgress } from "@chakra-ui/react";

export default function Loading(){
  return (
    <Background
      alignItems="center"
      justifyContent="center"
    >
      <CircularProgress isIndeterminate color='primary.primary'/>
    </Background>
  )
}