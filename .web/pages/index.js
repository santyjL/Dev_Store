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
  <Box sx={{"bg": "#cbe4ea", "width": "100%"}}>
  <HStack>
  <Box>
  <HStack sx={{"bg": "#e19f41", "position": "fixed", "width": "100%", "zIndez": "5"}}>
  <Heading sx={{"color": "#038bbb"}}>
  <Text as={`i`} sx={{"size": "1em"}}>
  {`DEV_STORE`}
</Text>
</Heading>
  <Spacer/>
  <Link as={NextLink} href={`https://github.com/santyjL/Dev_Store`} isExternal={true}>
  <Image src={`git hub logo.jpg`} sx={{"witch": "4.5em", "height": "4.5em"}}/>
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
  <Heading size={`md`} sx={{"color": "#038bbb"}}>
  {`tienda tecnologica aficionada que lo disfrute`}
</Heading>
</Box>
</HStack>
  <HStack sx={{"margin": "3em"}}>
  <Box sx={{"borderRadius": ["5px 20px"], "border": ["4px solid #555"], "boxShadow": "sm", "padding": [3], "bg": "#000000", "width": "100%"}}>
  <HStack>
  <Box sx={{"padding": [3], "bg": "#03223f", "height": ["22em"], "width": ["26em"], "borderRadius": ["5px 20px"], "border": ["4px solid #555"], "boxShadow": "sm", "marginY": "0.5em"}}>
  <Link as={NextLink} href={`https://www.amazon.com/-/es/GK61-60-intercambiable-retroiluminado-Layout/dp/B0C77FTYW3/ref=sr_1_1?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=teclado+mecanico+g61&sr=8-1`} isExternal={true}>
  <Image src={`GK61.jpg`} sx={{"width": "25em", "height": "10em", "borderRadius": "5px 15px ", "border": "4px solid #555", "boxShadow": "sm"}}/>
</Link>
  <Heading size={`sm`}>
  {`teclado mecanico G61 Logitech`}
</Heading>
  <Text>
  {`Geeky GK61 60% - Teclado mecánico - 61 teclas multicolor RGB  retroiluminado para PC/Mac - Diseño americano ANSI US (azul, marrón mecánico)`}
</Text>
  <Badge colorScheme={`skyBlue`} variant={`solid`}>
  {`PRECIO : 30.00$`}
</Badge>
</Box>
  <Box sx={{"padding": [3], "bg": "#03223f", "height": ["22em"], "width": ["26em"], "borderRadius": ["5px 20px"], "border": ["4px solid #555"], "boxShadow": "sm", "marginY": "0.5em"}}>
  <Link as={NextLink} href={`https://www.amazon.com/-/es/GIGABYTE-pantalla-3840x2160-respuesta-DisplayPort/dp/B09WPTKDQY/ref=sr_1_1?keywords=4k+ultrawide+monitor&sr=8-1`} isExternal={true}>
  <Image src={`monitor ULTRAWIDE.jpg`} sx={{"width": "25em", "height": "10em", "borderRadius": "5px 15px ", "border": "4px solid #555", "boxShadow": "sm"}}/>
</Link>
  <Heading size={`sm`}>
  {`monitor ultrawide 32p''`}
</Heading>
  <Text>
  {`GIGABYTE M32UC 32'' 144Hz 4K UHD - Monitor curvado - SS VA, pantalla 3840x2160, tiempo de respuesta de 1 ms, 1 DisplayPort 1.4, 2 HDMI 2.1, 1 USB tipo C, 4 USB 3.2`}
</Text>
  <Badge colorScheme={`skyBlue`} variant={`solid`}>
  {`PRECIO : 300$.00$`}
</Badge>
</Box>
  <Box sx={{"padding": [3], "bg": "#03223f", "height": ["22em"], "width": ["26em"], "borderRadius": ["5px 20px"], "border": ["4px solid #555"], "boxShadow": "sm", "marginY": "0.5em"}}>
  <Link as={NextLink} href={`https://www.amazon.com/-/es/GIGABYTE-pantalla-3840x2160-respuesta-DisplayPort/dp/B09WPTKDQY/ref=sr_1_1?keywords=4k+ultrawide+monitor&sr=8-1`} isExternal={true}>
  <Image src={`monitor ULTRAWIDE.jpg`} sx={{"width": "25em", "height": "10em", "borderRadius": "5px 15px ", "border": "4px solid #555", "boxShadow": "sm"}}/>
</Link>
  <Heading size={`sm`}>
  {`monitor ultrawide 32p''`}
</Heading>
  <Text>
  {`GIGABYTE M32UC 32'' 144Hz 4K UHD - Monitor curvado - SS VA, pantalla 3840x2160, tiempo de respuesta de 1 ms, 1 DisplayPort 1.4, 2 HDMI 2.1, 1 USB tipo C, 4 USB 3.2`}
</Text>
  <Badge colorScheme={`skyBlue`} variant={`solid`}>
  {`PRECIO : 300$.00$`}
</Badge>
</Box>
</HStack>
  <HStack>
  <Box sx={{"padding": [3], "bg": "#03223f", "height": ["22em"], "width": ["26em"], "borderRadius": ["5px 20px"], "border": ["4px solid #555"], "boxShadow": "sm", "marginY": "0.5em"}}>
  <Link as={NextLink} href={`https://www.amazon.com/-/es/GIGABYTE-pantalla-3840x2160-respuesta-DisplayPort/dp/B09WPTKDQY/ref=sr_1_1?keywords=4k+ultrawide+monitor&sr=8-1`} isExternal={true}>
  <Image src={`monitor ULTRAWIDE.jpg`} sx={{"width": "25em", "height": "10em", "borderRadius": "5px 15px ", "border": "4px solid #555", "boxShadow": "sm"}}/>
</Link>
  <Heading size={`sm`}>
  {`monitor ultrawide 32p''`}
</Heading>
  <Text>
  {`GIGABYTE M32UC 32'' 144Hz 4K UHD - Monitor curvado - SS VA, pantalla 3840x2160, tiempo de respuesta de 1 ms, 1 DisplayPort 1.4, 2 HDMI 2.1, 1 USB tipo C, 4 USB 3.2`}
</Text>
  <Badge colorScheme={`skyBlue`} variant={`solid`}>
  {`PRECIO : 300$.00$`}
</Badge>
</Box>
  <Box sx={{"padding": [3], "bg": "#03223f", "height": ["22em"], "width": ["26em"], "borderRadius": ["5px 20px"], "border": ["4px solid #555"], "boxShadow": "sm", "marginY": "0.5em"}}>
  <Link as={NextLink} href={`https://www.amazon.com/-/es/GIGABYTE-pantalla-3840x2160-respuesta-DisplayPort/dp/B09WPTKDQY/ref=sr_1_1?keywords=4k+ultrawide+monitor&sr=8-1`} isExternal={true}>
  <Image src={`monitor ULTRAWIDE.jpg`} sx={{"width": "25em", "height": "10em", "borderRadius": "5px 15px ", "border": "4px solid #555", "boxShadow": "sm"}}/>
</Link>
  <Heading size={`sm`}>
  {`monitor ultrawide 32p''`}
</Heading>
  <Text>
  {`GIGABYTE M32UC 32'' 144Hz 4K UHD - Monitor curvado - SS VA, pantalla 3840x2160, tiempo de respuesta de 1 ms, 1 DisplayPort 1.4, 2 HDMI 2.1, 1 USB tipo C, 4 USB 3.2`}
</Text>
  <Badge colorScheme={`skyBlue`} variant={`solid`}>
  {`PRECIO : 300$.00$`}
</Badge>
</Box>
  <Box sx={{"padding": [3], "bg": "#03223f", "height": ["22em"], "width": ["26em"], "borderRadius": ["5px 20px"], "border": ["4px solid #555"], "boxShadow": "sm", "marginY": "0.5em"}}>
  <Link as={NextLink} href={`https://www.amazon.com/-/es/GIGABYTE-pantalla-3840x2160-respuesta-DisplayPort/dp/B09WPTKDQY/ref=sr_1_1?keywords=4k+ultrawide+monitor&sr=8-1`} isExternal={true}>
  <Image src={`monitor ULTRAWIDE.jpg`} sx={{"width": "25em", "height": "10em", "borderRadius": "5px 15px ", "border": "4px solid #555", "boxShadow": "sm"}}/>
</Link>
  <Heading size={`sm`}>
  {`monitor ultrawide 32p''`}
</Heading>
  <Text>
  {`GIGABYTE M32UC 32'' 144Hz 4K UHD - Monitor curvado - SS VA, pantalla 3840x2160, tiempo de respuesta de 1 ms, 1 DisplayPort 1.4, 2 HDMI 2.1, 1 USB tipo C, 4 USB 3.2`}
</Text>
  <Badge colorScheme={`skyBlue`} variant={`solid`}>
  {`PRECIO : 300$.00$`}
</Badge>
</Box>
</HStack>
</Box>
</HStack>
  <HStack>
  <Box sx={{"bg": "#e19f41", "width": "100%", "zIndez": "5", "paddingX": 30}}>
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
