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
  {`tienda tecnologica apartado de setup`}
</Heading>
</Box>
</HStack>
  <HStack sx={{"margin": "3em"}}>
  <Box sx={{"borderRadius": ["5px 20px"], "border": ["4px solid #555"], "boxShadow": "sm", "padding": [3], "bg": "#000000", "width": "100%"}}>
  <HStack>
  <Box sx={{"padding": [3], "bg": "#03223f", "height": ["30em"], "width": ["30em"], "borderRadius": ["5px 20px"], "border": ["4px solid #555"], "boxShadow": "sm", "marginY": "0.5em"}}>
  <Link as={NextLink} href={`https://www.amazon.com/-/es/GK61-60-intercambiable-retroiluminado-Layout/dp/B0C77FTYW3/ref=sr_1_1?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=teclado+mecanico+g61&sr=8-1`} isExternal={true}>
  <Image src={`/setup/GK61.jpg`} sx={{"width": "29em", "height": "14em", "borderRadius": "5px 15px ", "border": "4px solid #555", "boxShadow": "sm", "objectFit": "container"}}/>
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
  <Box sx={{"padding": [3], "bg": "#03223f", "height": ["30em"], "width": ["30em"], "borderRadius": ["5px 20px"], "border": ["4px solid #555"], "boxShadow": "sm", "marginY": "0.5em"}}>
  <Link as={NextLink} href={`https://www.amazon.com/-/es/GIGABYTE-pantalla-3840x2160-respuesta-DisplayPort/dp/B09WPTKDQY/ref=sr_1_1?keywords=4k+ultrawide+monitor&sr=8-1`} isExternal={true}>
  <Image src={`/setup/monitor ULTRAWIDE.jpg`} sx={{"width": "29em", "height": "14em", "borderRadius": "5px 15px ", "border": "4px solid #555", "boxShadow": "sm", "objectFit": "container"}}/>
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
  <Box sx={{"padding": [3], "bg": "#03223f", "height": ["30em"], "width": ["30em"], "borderRadius": ["5px 20px"], "border": ["4px solid #555"], "boxShadow": "sm", "marginY": "0.5em"}}>
  <Link as={NextLink} href={`https://www.amazon.com/-/es/Astro-A10-Auriculares-micr%C3%B3fono-Playstation/dp/B0C381TXNZ/ref=sr_1_6?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=A10%2Bastros&sr=8-6&th=1`} isExternal={true}>
  <Image src={`/setup/Astro A10.jpg`} sx={{"width": "29em", "height": "14em", "borderRadius": "5px 15px ", "border": "4px solid #555", "boxShadow": "sm", "objectFit": "container"}}/>
</Link>
  <Heading size={`sm`}>
  {`Astro A10`}
</Heading>
  <Text>
  {`Astro A10 - Auriculares para juegos Gen 2 con cable, con micrófono abatible para silenciar, controladores de 1.260 in, para Xbox Series X|S, Xbox One, Playstation 5/4, Nintendo Switch, PC, Mac`}
</Text>
  <Badge colorScheme={`skyBlue`} variant={`solid`}>
  {`PRECIO : 50.00$`}
</Badge>
</Box>
</HStack>
  <HStack>
  <Box sx={{"padding": [3], "bg": "#03223f", "height": ["30em"], "width": ["30em"], "borderRadius": ["5px 20px"], "border": ["4px solid #555"], "boxShadow": "sm", "marginY": "0.5em"}}>
  <Link as={NextLink} href={`https://www.amazon.com/-/es/Logitech-G502-HERO-rendimiento-programables/dp/B07GBZ4Q68/ref=sr_1_1?keywords=logitech+mouse&sr=8-1`} isExternal={true}>
  <Image src={`/setup/G502 Hero.jpg`} sx={{"width": "29em", "height": "14em", "borderRadius": "5px 15px ", "border": "4px solid #555", "boxShadow": "sm", "objectFit": "container"}}/>
</Link>
  <Heading size={`sm`}>
  {`Logitech G502 HERO`}
</Heading>
  <Text>
  {` Mouse de alto rendimiento con cable, sensor HERO 25K, 25,600$ ppp, RGB, pesos ajustables, 11 botones programables, memoria integrada, PC / Mac`}
</Text>
  <Badge colorScheme={`skyBlue`} variant={`solid`}>
  {`PRECIO : 43.00$`}
</Badge>
</Box>
  <Box sx={{"padding": [3], "bg": "#03223f", "height": ["30em"], "width": ["30em"], "borderRadius": ["5px 20px"], "border": ["4px solid #555"], "boxShadow": "sm", "marginY": "0.5em"}}>
  <Link as={NextLink} href={`https://www.amazon.com/-/es/ergon%C3%B3mica-reposapi%C3%A9s-computadora-reposacabezas-reposabrazos/dp/B0C7C1B9D3/ref=cs_sr_dp_3?__mk_es_US=%EF%BF%BDM%EF%BF%BD%7D%EF%BF%BD%EF%BF%BD&keywords=silla+ergonomitca&sr=8-1`} isExternal={true}>
  <Image src={`/setup/silla ergonomica.jpg`} sx={{"width": "29em", "height": "14em", "borderRadius": "5px 15px ", "border": "4px solid #555", "boxShadow": "sm", "objectFit": "container"}}/>
</Link>
  <Heading size={`sm`}>
  {`Silla de oficina ergonómica plegable`}
</Heading>
  <Text>
  {`silla de escritorio de computadora con respaldo alto y soporte lumbar ajustable, reposabrazos fijos, reposacabezas, mecedora de 90° a 110°, silla de escritorio de oficina en casa, fácil montaje, color negro`}
</Text>
  <Badge colorScheme={`skyBlue`} variant={`solid`}>
  {`PRECIO : 109.00$`}
</Badge>
</Box>
  <Box sx={{"padding": [3], "bg": "#03223f", "height": ["30em"], "width": ["30em"], "borderRadius": ["5px 20px"], "border": ["4px solid #555"], "boxShadow": "sm", "marginY": "0.5em"}}>
  <Link as={NextLink} href={`https://www.amazon.com/-/es/LG-gram-Port%C3%A1til-pulgadas-plataforma/dp/B0BVXQQQRL/ref=sr_1_6?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=laptops%2B16%2Bram%2B%2C%2B512%2Bgb%2B%2C%2Bfull%2BHD%2B1080x1980%2B%2C%2B15%2C6pulgadas%2B%2C%2Bintel%2B12&sr=8-6&th=1`} isExternal={true}>
  <Image src={`/setup/lapto.jpg`} sx={{"width": "29em", "height": "14em", "borderRadius": "5px 15px ", "border": "4px solid #555", "boxShadow": "sm", "objectFit": "container"}}/>
</Link>
  <Heading size={`sm`}>
  {`LG gram`}
</Heading>
  <Text>
  {`Portátil ligero de 16 pulgadas, procesador Intel Core i7 13, Windows 11 Home, 16 GB de RAM, SSD de 512 GB, negro`}
</Text>
  <Badge colorScheme={`skyBlue`} variant={`solid`}>
  {`PRECIO : 1024.00$`}
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
  {`Dev_store`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
