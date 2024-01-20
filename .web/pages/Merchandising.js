import { Fragment, useContext, useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
import { Event, getAllLocalStorageItems, getRefValue, getRefValues, isTrue, preventDefault, refs, spreadArraysOrObjects, uploadFiles, useEventLoop } from "/utils/state"
import { ColorModeContext, EventLoopContext, initialEvents, StateContext } from "/utils/context.js"
import "focus-visible/dist/focus-visible"
import { Badge, Box, Center, Heading, HStack, Image, Link, Spacer, Text } from "@chakra-ui/react"
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
  {`tienda tecnologica apartado de Merchandising`}
</Heading>
</Box>
</HStack>
  <HStack sx={{"margin": "3em"}}>
  <Box sx={{"borderRadius": ["5px 20px"], "border": ["4px solid #555"], "boxShadow": "sm", "padding": [3], "bg": "#000000", "width": "100%"}}>
  <HStack>
  <Box sx={{"padding": [3], "bg": "#03223f", "height": ["30em"], "width": ["30em"], "borderRadius": ["5px 20px"], "border": ["4px solid #555"], "boxShadow": "sm", "marginY": "0.5em"}}>
  <Link as={NextLink} href={`https://www.amazon.com/-/es/dp/B01L6BVRYY/ref=sr_1_2?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=gorra+depython&sr=8-2`} isExternal={true}>
  <Image src={`/merchandising/gorra_python.jpg`} sx={{"width": "29em", "height": "14em", "borderRadius": "5px 15px ", "border": "4px solid #555", "boxShadow": "sm", "objectFit": "container"}}/>
</Link>
  <Heading size={`sm`}>
  {`Gorra de Béisbol con Programación Python`}
</Heading>
  <Text>
  {`Otra opción genial de gorra con diseño de Python. Ideal para mostrar tu amor por la programación con estilo.`}
</Text>
  <Badge colorScheme={`skyBlue`} variant={`solid`}>
  {`PRECIO : 8.99$`}
</Badge>
</Box>
  <Box sx={{"padding": [3], "bg": "#03223f", "height": ["30em"], "width": ["30em"], "borderRadius": ["5px 20px"], "border": ["4px solid #555"], "boxShadow": "sm", "marginY": "0.5em"}}>
  <Link as={NextLink} href={`https://www.amazon.com/-/es/Ubuntu-Camiseta-Divertido-Algod%C3%B3n-Hombres/dp/B0BCWGN2JK/ref=sr_1_17?keywords=linux+t+shirt&sr=8-17`} isExternal={true}>
  <Image src={`/merchandising/ubuntu_camiseta.jpg`} sx={{"width": "29em", "height": "14em", "borderRadius": "5px 15px ", "border": "4px solid #555", "boxShadow": "sm", "objectFit": "container"}}/>
</Link>
  <Heading size={`sm`}>
  {`Camiseta de Ubuntu`}
</Heading>
  <Text>
  {`Demuestra tu amor por Linux con esta divertida camiseta de Ubuntu. Hecha de algodón para mayor comodidad.`}
</Text>
  <Badge colorScheme={`skyBlue`} variant={`solid`}>
  {`PRECIO : 10.44$`}
</Badge>
</Box>
  <Box sx={{"padding": [3], "bg": "#03223f", "height": ["30em"], "width": ["30em"], "borderRadius": ["5px 20px"], "border": ["4px solid #555"], "boxShadow": "sm", "marginY": "0.5em"}}>
  <Link as={NextLink} href={`https://www.amazon.com/-/es/Neural-Network-aprendizaje-autom%C3%A1tico-Tensorflow/dp/B0BJZ945GB/ref=sr_1_42?keywords=python+shirt&sr=8-42`} isExternal={true}>
  <Image src={`/merchandising/python_neural_network.jpg`} sx={{"width": "29em", "height": "14em", "borderRadius": "5px 15px ", "border": "4px solid #555", "boxShadow": "sm", "objectFit": "container"}}/>
</Link>
  <Heading size={`sm`}>
  {`Camiseta Python Neural Network`}
</Heading>
  <Text>
  {`Camiseta perfecta para los entusiastas de Python y el aprendizaje automático. Muestra tu pasión por la programación y las redes neuronales con estilo.`}
</Text>
  <Badge colorScheme={`skyBlue`} variant={`solid`}>
  {`PRECIO : 11.00$`}
</Badge>
</Box>
</HStack>
  <HStack>
  <Box sx={{"padding": [3], "bg": "#03223f", "height": ["30em"], "width": ["30em"], "borderRadius": ["5px 20px"], "border": ["4px solid #555"], "boxShadow": "sm", "marginY": "0.5em"}}>
  <Link as={NextLink} href={`https://www.amazon.com/Desktop-Decor-Golang-Mascot-Gopher/dp/B0C1CSSV2Z`} isExternal={true}>
  <Image src={`/merchandising/golang_mascot_gopher.jpg`} sx={{"width": "29em", "height": "14em", "borderRadius": "5px 15px ", "border": "4px solid #555", "boxShadow": "sm", "objectFit": "container"}}/>
</Link>
  <Heading size={`sm`}>
  {`Figura de Escritorio Golang Mascot Gopher`}
</Heading>
  <Text>
  {`Decora tu escritorio con esta encantadora figura del Gopher, la mascota de Golang. Perfecta para los amantes de este lenguaje de programación.`}
</Text>
  <Badge colorScheme={`skyBlue`} variant={`solid`}>
  {`PRECIO : 20.00$`}
</Badge>
</Box>
  <Box sx={{"padding": [3], "bg": "#03223f", "height": ["30em"], "width": ["30em"], "borderRadius": ["5px 20px"], "border": ["4px solid #555"], "boxShadow": "sm", "marginY": "0.5em"}}>
  <Link as={NextLink} href={`https://www.amazon.com/-/es/Camiseta-Arduino-Know-Makers-Negro/dp/B079K9MMXJ`} isExternal={true}>
  <Image src={`/merchandising/arduino_know_makers.jpg`} sx={{"width": "29em", "height": "14em", "borderRadius": "5px 15px ", "border": "4px solid #555", "boxShadow": "sm", "objectFit": "container"}}/>
</Link>
  <Heading size={`sm`}>
  {`Camiseta Arduino Know Makers`}
</Heading>
  <Text>
  {`Demuestra tu pasión por Arduino con esta genial camiseta. Perfecta para los entusiastas de la electrónica y la creación de proyectos.`}
</Text>
  <Badge colorScheme={`skyBlue`} variant={`solid`}>
  {`PRECIO : 10.00$`}
</Badge>
</Box>
</HStack>
</Box>
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
  {`Reflex App`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
