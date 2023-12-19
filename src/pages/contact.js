
import HomeLayout from "@/components/layout/HomeLayout";
import { Box } from "@chakra-ui/react";
import {Button} from '@mui/material'
//const inter = Inter({ subsets: ['latin'] })

export default function Contact() {
  return (
    <HomeLayout>
    <div>
       <h1>CONTACT PAGE</h1>
       <Box>Contact page here =========== </Box>
       <Button color="secondary">Secondary</Button>
    </div>
    </HomeLayout>
  )
}
