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
  {`tienda tecnologica apartado de smart home`}
</Heading>
</Box>
</HStack>
  <HStack sx={{"margin": "3em"}}>
  <Box sx={{"borderRadius": ["5px 20px"], "border": ["4px solid #555"], "boxShadow": "sm", "padding": [3], "bg": "#000000", "width": "100%"}}>
  <HStack>
  <Box sx={{"padding": [3], "bg": "#03223f", "height": ["30em"], "width": ["30em"], "borderRadius": ["5px 20px"], "border": ["4px solid #555"], "boxShadow": "sm", "marginY": "0.5em"}}>
  <Link as={NextLink} href={`https://www.amazon.com/-/es/dp/B0BF73CTQF?ref_=mars_gen_B07XJ8C8F5`} isExternal={true}>
  <Image src={`/smart_home/alexa.jpg`} sx={{"width": "29em", "height": "14em", "borderRadius": "5px 15px ", "border": "4px solid #555", "boxShadow": "sm", "objectFit": "container"}}/>
</Link>
  <Heading size={`sm`}>
  {`Alexa Dot 5.ª generación`}
</Heading>
  <Text>
  {` Usa el Echo Dot para mantenerte al día con la ayuda de Alexa, controlar dispositivos de Smart Home e iniciar rutinas por movimiento.`}
</Text>
  <Badge colorScheme={`skyBlue`} variant={`solid`}>
  {`PRECIO : 34.99$`}
</Badge>
</Box>
  <Box sx={{"padding": [3], "bg": "#03223f", "height": ["30em"], "width": ["30em"], "borderRadius": ["5px 20px"], "border": ["4px solid #555"], "boxShadow": "sm", "marginY": "0.5em"}}>
  <Link as={NextLink} href={`https://www.amazon.com/-/es/iRobot-Roomba-aspiradora-conectividad-compatible/dp/B08SP5GYJP/ref=sr_1_1?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=aspiradora+robot&sr=8-1`} isExternal={true}>
  <Image src={`/smart_home/aspiradora_robot.jpg`} sx={{"width": "29em", "height": "14em", "borderRadius": "5px 15px ", "border": "4px solid #555", "boxShadow": "sm", "objectFit": "container"}}/>
</Link>
  <Heading size={`sm`}>
  {`Robot Roomba`}
</Heading>
  <Text>
  {`  Robot aspiradora con conectividad Wi-Fi, compatible con Alexa`}
</Text>
  <Badge colorScheme={`skyBlue`} variant={`solid`}>
  {`PRECIO : 126.38$`}
</Badge>
</Box>
  <Box sx={{"padding": [3], "bg": "#03223f", "height": ["30em"], "width": ["30em"], "borderRadius": ["5px 20px"], "border": ["4px solid #555"], "boxShadow": "sm", "marginY": "0.5em"}}>
  <Link as={NextLink} href={`https://www.amazon.com/sincronizaci%C3%B3n-bricolaje-decoraci%C3%B3n-dormitorio-compatible/dp/B09DCX12V4?ref_=ast_sto_dp&th=1led Govee`} isExternal={true}>
  <Image src={`/smart_home/tira_led.jpg`} sx={{"width": "29em", "height": "14em", "borderRadius": "5px 15px ", "border": "4px solid #555", "boxShadow": "sm", "objectFit": "container"}}/>
</Link>
  <Heading size={`sm`}>
  {`tira led Govee`}
</Heading>
  <Text>
  {` Tira de luces RGBIC de neón con sincronización de música, diseño de bricolaje, funciona con Alexa, Google Assistant, tira de luces LED de 10 pies para juegos, decoración de dormitorio y sala de estar `}
</Text>
  <Badge colorScheme={`skyBlue`} variant={`solid`}>
  {`PRECIO : 54.99$`}
</Badge>
</Box>
</HStack>
  <HStack>
  <Box sx={{"padding": [3], "bg": "#03223f", "height": ["30em"], "width": ["30em"], "borderRadius": ["5px 20px"], "border": ["4px solid #555"], "boxShadow": "sm", "marginY": "0.5em"}}>
  <Link as={NextLink} href={`https://www.amazon.com/-/es/enchufes-inteligentes-Bluetooth-Assistant-inteligente/dp/B09LVN3PF8/ref=sr_1_11?keywords=tomacorriente+inteligente+alexa&sr=8-11`} isExternal={true}>
  <Image src={`/smart_home/tomas_corrientes.jpg`} sx={{"width": "29em", "height": "14em", "borderRadius": "5px 15px ", "border": "4px solid #555", "boxShadow": "sm", "objectFit": "container"}}/>
</Link>
  <Heading size={`sm`}>
  {`tomas correintes inteligentes`}
</Heading>
  <Text>
  {` Paquete de 2 enchufes inteligentes duales, toma Bluetooth WiFi de 15 A, funciona con Alexa y Google Assistant, paquete de diseño compacto 2 en 1 con enchufe inteligente Govee y enchufes WiFi`}
</Text>
  <Badge colorScheme={`skyBlue`} variant={`solid`}>
  {`PRECIO : 48.98$`}
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
