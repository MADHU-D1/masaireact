// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'

import HomeLayout from "@/components/layout/HomeLayout";
import { Box } from "@chakra-ui/react";

//const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <HomeLayout>
    <div>
       <h1>This Home Page Here.........HOME</h1>
       <Box>HELLO NEXT.JS</Box>
       <br/>
      
       <br/>
    </div>
    </HomeLayout>
  )
}
