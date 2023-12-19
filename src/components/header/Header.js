
import { Box } from "@chakra-ui/react";
import Link from "next/link";

//const inter = Inter({ subsets: ['latin'] })

export default function Header() {
  return (
    <div>
       <Box><Link href="/">Home</Link></Box>
       <Box><Link href="/about">About</Link></Box>
       <Box><Link href="/products">Products</Link></Box>
       <Box><Link href="/contact">Contact</Link></Box>
    </div>


    
  )
}

















// import React, { useState, useEffect } from "react";
// import { Text, Box, Grid, GridItem, Image, Heading } from "@chakra-ui/react";
// import Link from "next/link";
// //import "../App.css";
// //import AutocomleteProducts from "./AutocompletProducts/AutocomleteProducts"

// function Header() {
//   const [showCard, setShowCard] = useState(false);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const images = [
//     "/Ductfabhomenavimage.jpg",
//     "/DuctingHomeNaveimg5.jpg",
//     //"/DuctingHomeNaveimg19.jpg",
//     "/DuctingHomeNaveimg9.JPG",
//     //"/DuctingHomeNaveimg18.jpg",
//   ];
//   const intervalDuration = 3000;

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, intervalDuration);

//     return () => clearInterval(intervalId);
//   }, );

//   const handleMouseEnter = () => {
//     setShowCard(true);
//   };

//   const handleMouseLeave = () => {
//     setShowCard(false);
//   };

//   return (
//     <Box>
//       <Grid templateColumns="repeat(2, 1fr)">
//         <Box pl={{ base: "80px", lg: "80px" }}>
//           <Heading
//             fontSize={{ base: "40px", lg: "50px" }}
//             color="#0b2558"
//             pt={{ base: "25px", lg: "0px" }}
//             fontFamily="poppins"
//           >
//             SHRI<span style={{ marginLeft: "15px" }}>VEDAA</span>
//           </Heading>
//           <Box
//             pt={{ base: "0px", lg: "0px" }}
//             ml="5px"
//             color="#1399f0"
//             position="absolute"
//             zIndex="100"
//           >
//             <Text fontSize={{ base: "14px", lg: "20px" }}>
//               Engineering
//               <span style={{ marginLeft: "10px" }}>Technologies</span>
//             </Text>
//           </Box>
//         </Box>
//         <GridItem>
//           <Box
//             color="#fff"
//             bg="#0b2558"
//             borderRadius="0px 0px 130px 0px"
//             w={{ base: "630px", lg: "800px" }}
//             ml={{ base: "170px", lg: "50px" }}
//             h={{ base: "470px", lg: "550px" }}
//           >
//             <Box
//               display="flex"
//               flexDir="row"
//               justifyContent="space-around"
//               pt="34px"
//               pr="50px"
//             >
//               <Box fontWeight="bold" className="menuItem">
//                 <Link href="/">
//                   <Text className="hover">HOME</Text>
//                 </Link>
//               </Box>
//               <Box fontWeight="bold" className="menuItem">
//                 <Link href="/about">
//                   <Text>ABOUT US</Text>
//                 </Link>
//               </Box>
//               <Box fontWeight="bold" className="menuItem">
//                 <Link href="/projects">
//                   <Text>PROJECTS</Text>
//                 </Link>
//               </Box>
//               <Box
//                 fontWeight="bold"
//                 className="menuItem"
//                 // onMouseEnter={handleMouseEnter}
//                 // onMouseLeave={handleMouseLeave}
//               >
//                 <Link href="/products">
//                   <Text>PRODUCTS </Text>
//                 </Link>
               
//               </Box>
//               <Box fontWeight="bold" className="menuItem">
//                 <Link href="/contactus">
//                   <Text className="hover">CONTACT US</Text>
//                 </Link>
//               </Box>
//             </Box>
//           </Box>
//         </GridItem>
//       </Grid>
//       <Box
   
//         display={{ base: "flex", lg: "flex" }}
//         className="tracking-in-expand-fwd-top"
//         mt={{ base: "-370px", lg: "-460px" }}
//         h={{ base: "500px", lg: "550px" }}
//         w={{ base: "1050px",  lg: "1360px" }}
//         ml={{ base: "20px", lg: "50px" }}
//         overflow="hidden" 
//         position="relative" 
//       >
//         {images.map((image, index) => (
//           <Image
//             key={index}
//             className="images"
//             //className={`images ${index === currentImageIndex ? "active" : ""}`}
//             src={image}
//             alt={`banner-${index}`}
//             style={{
//               position: "absolute",
//               width: "100%",
//               height: "100%",
//               opacity: index === currentImageIndex ? 1 : 0,
//               transition: "opacity 2.5s ease-in-out",
//             }}
//           />
//         ))}
//       </Box>
//     </Box>
//   );
// }

// export default Header;
