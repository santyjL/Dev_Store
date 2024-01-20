import { Fragment, useContext, useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
import { Event, getAllLocalStorageItems, getRefValue, getRefValues, isTrue, preventDefault, refs, spreadArraysOrObjects, uploadFiles, useEventLoop } from "/utils/state"
import { ColorModeContext, EventLoopContext, initialEvents, StateContext } from "/utils/context.js"
import "focus-visible/dist/focus-visible"
import { Box, Center, Grid, Heading, HStack, Image, Link, Spacer, Text } from "@chakra-ui/react"
import NextLink from "next/link"
import NextHead from "next/head"



export default function Component() {
  const router = useRouter()
  const [ colorMode, toggleColorMode ] = useContext(ColorModeContext)
  const focusRef = useRef();
  
  // Main event loop.
  const [addEvents, connectError] = useContext(EventLoopContext)

  // Set focus to the specified element.
  useEffect(() => {
    if (focusRef.current) {
      focusRef.current.focus();
    }
  })

  // Route after the initial page hydration.
  useEffect(() => {
    const change_complete = () => addEvents(initialEvents())
    router.events.on('routeChangeComplete', change_complete)
    return () => {
      router.events.off('routeChangeComplete', change_complete)
    }
  }, [router])


  return (
    <Fragment>
  <Box sx={{"bg": "linear-gradient(271.68deg, #F26008 0.75%, #FF3000 88.52%)", "width": "100%"}}>
  <HStack>
  <Box>
  <HStack sx={{"bg": "#464255", "position": "fixed", "width": "100%", "zIndez": "5"}}>
  <Heading>
  <Link as={NextLink} href={`Dev_Store`} sx={{"color": "#038bbb"}}>
  <Text as={`i`} sx={{"size": "1em"}}>
  {`DEV_STORE`}
</Text>
</Link>
</Heading>
  <Spacer/>
  <Link as={NextLink} href={`https://github.com/santyjL/Dev_Store`} isExternal={true}>
  <Image src={`/git hub logo.jpg`} sx={{"witch": "4.5em", "height": "4.5em"}}/>
</Link>
</HStack>
</Box>
</HStack>
  <HStack sx={{"margin": "3em"}}>
  <Box sx={{"paddingY": "4em"}}>
  <HStack>
  <Text as={`span`}>
  <Heading size={`xl`} sx={{"color": "#038bbb"}}>
  {`bienvenido a la `}
</Heading>
</Text>
  <Text as={`span`}>
  <Heading size={`2xl`} sx={{"background": "linear-gradient(271.68deg, #98173d 0.75%, #038bbb 88.52%)", "backgroundClip": "text"}}>
  {`DEV_STORE`}
</Heading>
</Text>
</HStack>
  <Heading size={`lg`} sx={{"color": "#038bbb"}}>
  {`tienda tecnologica aficionada que lo disfrute`}
</Heading>
</Box>
</HStack>
  <HStack sx={{"margin": "3em"}}>
  <Grid sx={{"bg": "#464255", "h": "30em", "width": "100%", "padding": 3}}>
  <HStack>
  <Box sx={{"bg": "lightblue", "h": "14em", "w": "60%"}}>
  <Heading size={`xl`}>
  {`BIBLIOTECA`}
</Heading>
  <Link as={NextLink} href={`biblioteca`}>
  <Image src={`/libros.jpg`} sx={{"h": "11.7em", "w": "100%", "padding": 2}}/>
</Link>
</Box>
  <Box sx={{"bg": "lightgreen", "h": "14em", "w": "40%"}}>
  <Heading size={`xl`}>
  {`MERCHANDISING`}
</Heading>
  <Link as={NextLink} href={`Merchandising`}>
  <Image src={`/Merchandising.jpg`} sx={{"h": "11.7em", "w": "100%", "padding": 2}}/>
</Link>
</Box>
</HStack>
  <HStack>
  <Box sx={{"bg": "yellow", "h": "14em", "w": "40%"}}>
  <Heading size={`xl`}>
  {`SMARTHOME`}
</Heading>
  <Link as={NextLink} href={`SmartHome`}>
  <Image src={`/smarthome.jpg`} sx={{"h": "11.7em", "w": "100%", "padding": 2}}/>
</Link>
</Box>
  <Box sx={{"bg": "orange", "h": "14em", "w": "60%"}}>
  <Heading size={`xl`}>
  {`SETUP`}
</Heading>
  <Link as={NextLink} href={`setup`}>
  <Image src={`/setup.jpg`} sx={{"h": "11.7em", "w": "100%", "padding": 2}}/>
</Link>
</Box>
</HStack>
</Grid>
</HStack>
  <HStack>
  <Box sx={{"bg": "#464255", "width": "100%", "zIndez": "5", "paddingX": 30}}>
  <Center>
  <HStack>
  <Text as={`span`}>
  <Text sx={{"color": "#038bbb", "fontSize": "1em", "fontWeight": "bold"}}>
  {`hola mundo este este es mi primer sitio web ,  la idea viene de`}
</Text>
</Text>
  <Text as={`span`}>
  <Link as={NextLink} href={`https://retosdeprogramacion.com/proyectos/`} isExternal={true}>
  <Text sx={{"color": "#038bbb", "fontSize": "1em", "fontWeight": "bold"}}>
  {`retosdeprogramacion.com/proyectos/`}
</Text>
</Link>
</Text>
  <Text as={`span`}>
  <Text sx={{"color": "#038bbb", "fontSize": "1em", "fontWeight": "bold"}}>
  {`hecho por `}
</Text>
</Text>
  <Text as={`span`}>
  <Link as={NextLink} href={`https://github.com/santyjL/santyjL`}>
  <Text sx={{"color": "#038bbb", "fontSize": "1em", "fontWeight": "bold"}}>
  {`by santyjL`}
</Text>
</Link>
</Text>
</HStack>
</Center>
</Box>
</HStack>
</Box>
  <NextHead>
  <title>
  {`Dev_Store`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
