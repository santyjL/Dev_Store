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
  <Image src={`/git hub logo.jpg`} sx={{"width": "4.5em", "height": "4.5em"}}/>
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
  {`tienda tecnologica apartado de biblioteca`}
</Heading>
</Box>
</HStack>
  <HStack sx={{"margin": "3em"}}>
  <Box sx={{"borderRadius": ["5px 20px"], "border": ["4px solid #555"], "boxShadow": "sm", "padding": [3], "bg": "#000000", "width": "100%"}}>
  <HStack>
<<<<<<< HEAD
<<<<<<< HEAD
  <Box sx={{"padding": [3], "bg": "#03223f", "height": ["28em"], "width": ["26em"], "borderRadius": ["5px 20px"], "border": ["4px solid #555"], "boxShadow": "sm", "marginY": "0.5em", "whiteSpace": "normal", "textAlling": "start"}}>
  <Link as={NextLink} href={`https://www.amazon.es/dp/8441532109?creativeASIN=8441532109&asc_item-id=amzn1.ideas.2ZIHJJFJ9AVZ3&ref_=aip_sf_list_spv_ons_d_asin`} isExternal={true}>
  <Image src={`/libros/codigo limpio.jpg`} sx={{"width": "25em", "height": "10em", "borderRadius": "5px 15px ", "border": "4px solid #555", "boxShadow": "sm", "whiteSpace": "normal", "textAlling": "start"}}/>
=======
  <Box sx={{"padding": [3], "bg": "#03223f", "height": ["30em"], "width": ["30em"], "borderRadius": ["5px 20px"], "border": ["4px solid #555"], "boxShadow": "sm", "marginY": "0.5em"}}>
  <Link as={NextLink} href={`https://www.amazon.es/dp/8441532109?creativeASIN=8441532109&asc_item-id=amzn1.ideas.2ZIHJJFJ9AVZ3&ref_=aip_sf_list_spv_ons_d_asin`} isExternal={true}>
  <Image src={`/libros/codigo limpio.jpg`} sx={{"width": "29em", "height": "14em", "borderRadius": "5px 15px ", "border": "4px solid #555", "boxShadow": "sm", "objectFit": "container"}}/>
>>>>>>> vercion1.1
=======
  <Box sx={{"padding": [3], "bg": "#03223f", "height": ["30em"], "width": ["30em"], "borderRadius": ["5px 20px"], "border": ["4px solid #555"], "boxShadow": "sm", "marginY": "0.5em"}}>
  <Link as={NextLink} href={`https://www.amazon.es/dp/8441532109?creativeASIN=8441532109&asc_item-id=amzn1.ideas.2ZIHJJFJ9AVZ3&ref_=aip_sf_list_spv_ons_d_asin`} isExternal={true}>
  <Image src={`/libros/codigo limpio.jpg`} sx={{"width": "29em", "height": "14em", "borderRadius": "5px 15px ", "border": "4px solid #555", "boxShadow": "sm", "objectFit": "container"}}/>
>>>>>>> vercion1.1
</Link>
  <Heading size={`sm`}>
  {`Código Limpio`}
</Heading>
  <Text>
  {` Manual de estilo para el desarrollo ágil de software (PROGRAMACIÓN)`}
</Text>
  <Badge colorScheme={`skyBlue`} variant={`solid`}>
  {`PRECIO : 49.87$`}
</Badge>
</Box>
<<<<<<< HEAD
<<<<<<< HEAD
  <Box sx={{"padding": [3], "bg": "#03223f", "height": ["28em"], "width": ["26em"], "borderRadius": ["5px 20px"], "border": ["4px solid #555"], "boxShadow": "sm", "marginY": "0.5em", "whiteSpace": "normal", "textAlling": "start"}}>
  <Link as={NextLink} href={`https://www.amazon.com/Programador-Pragmatico-El-Spanish/dp/020161622X`} isExternal={true}>
  <Image src={`/libros/programador_pragmatico.jpg`} sx={{"width": "25em", "height": "10em", "borderRadius": "5px 15px ", "border": "4px solid #555", "boxShadow": "sm", "whiteSpace": "normal", "textAlling": "start"}}/>
=======
  <Box sx={{"padding": [3], "bg": "#03223f", "height": ["30em"], "width": ["30em"], "borderRadius": ["5px 20px"], "border": ["4px solid #555"], "boxShadow": "sm", "marginY": "0.5em"}}>
  <Link as={NextLink} href={`https://www.amazon.com/Programador-Pragmatico-El-Spanish/dp/020161622X`} isExternal={true}>
  <Image src={`/libros/programador_pragmatico.jpg`} sx={{"width": "29em", "height": "14em", "borderRadius": "5px 15px ", "border": "4px solid #555", "boxShadow": "sm", "objectFit": "container"}}/>
>>>>>>> vercion1.1
=======
  <Box sx={{"padding": [3], "bg": "#03223f", "height": ["30em"], "width": ["30em"], "borderRadius": ["5px 20px"], "border": ["4px solid #555"], "boxShadow": "sm", "marginY": "0.5em"}}>
  <Link as={NextLink} href={`https://www.amazon.com/Programador-Pragmatico-El-Spanish/dp/020161622X`} isExternal={true}>
  <Image src={`/libros/programador_pragmatico.jpg`} sx={{"width": "29em", "height": "14em", "borderRadius": "5px 15px ", "border": "4px solid #555", "boxShadow": "sm", "objectFit": "container"}}/>
>>>>>>> vercion1.1
</Link>
  <Heading size={`sm`}>
  {`El Programador Pragmático`}
</Heading>
  <Text>
  {`Un clásico en la programación, aborda conceptos prácticos y eficientes para desarrolladores.`}
</Text>
  <Badge colorScheme={`skyBlue`} variant={`solid`}>
  {`PRECIO : 37.95$`}
</Badge>
</Box>
<<<<<<< HEAD
<<<<<<< HEAD
  <Box sx={{"padding": [3], "bg": "#03223f", "height": ["28em"], "width": ["26em"], "borderRadius": ["5px 20px"], "border": ["4px solid #555"], "boxShadow": "sm", "marginY": "0.5em", "whiteSpace": "normal", "textAlling": "start"}}>
  <Link as={NextLink} href={`https://www.amazon.es/dp/B0CLD7RPNS?creativeASIN=B0CLD7RPNS&asc_item-id=amzn1.ideas.2ZIHJJFJ9AVZ3&ref_=aip_sf_list_spv_ons_d_asin`} isExternal={true}>
  <Image src={`/libros/curso_intensivo_python.jpg`} sx={{"width": "25em", "height": "10em", "borderRadius": "5px 15px ", "border": "4px solid #555", "boxShadow": "sm", "whiteSpace": "normal", "textAlling": "start"}}/>
=======
  <Box sx={{"padding": [3], "bg": "#03223f", "height": ["30em"], "width": ["30em"], "borderRadius": ["5px 20px"], "border": ["4px solid #555"], "boxShadow": "sm", "marginY": "0.5em"}}>
  <Link as={NextLink} href={`https://www.amazon.es/dp/B0CLD7RPNS?creativeASIN=B0CLD7RPNS&asc_item-id=amzn1.ideas.2ZIHJJFJ9AVZ3&ref_=aip_sf_list_spv_ons_d_asin`} isExternal={true}>
  <Image src={`/libros/curso_intensivo_python.jpg`} sx={{"width": "29em", "height": "14em", "borderRadius": "5px 15px ", "border": "4px solid #555", "boxShadow": "sm", "objectFit": "container"}}/>
>>>>>>> vercion1.1
=======
  <Box sx={{"padding": [3], "bg": "#03223f", "height": ["30em"], "width": ["30em"], "borderRadius": ["5px 20px"], "border": ["4px solid #555"], "boxShadow": "sm", "marginY": "0.5em"}}>
  <Link as={NextLink} href={`https://www.amazon.es/dp/B0CLD7RPNS?creativeASIN=B0CLD7RPNS&asc_item-id=amzn1.ideas.2ZIHJJFJ9AVZ3&ref_=aip_sf_list_spv_ons_d_asin`} isExternal={true}>
  <Image src={`/libros/curso_intensivo_python.jpg`} sx={{"width": "29em", "height": "14em", "borderRadius": "5px 15px ", "border": "4px solid #555", "boxShadow": "sm", "objectFit": "container"}}/>
>>>>>>> vercion1.1
</Link>
  <Heading size={`sm`}>
  {`Curso Intensivo de Python`}
</Heading>
  <Text>
  {`Ideal para aprendices como tú, proporciona una inmersión profunda en Python con ejercicios prácticos.`}
</Text>
  <Badge colorScheme={`skyBlue`} variant={`solid`}>
  {`PRECIO : 49.87$`}
</Badge>
</Box>
</HStack>
  <HStack>
<<<<<<< HEAD
<<<<<<< HEAD
  <Box sx={{"padding": [3], "bg": "#03223f", "height": ["28em"], "width": ["26em"], "borderRadius": ["5px 20px"], "border": ["4px solid #555"], "boxShadow": "sm", "marginY": "0.5em", "whiteSpace": "normal", "textAlling": "start"}}>
  <Link as={NextLink} href={`https://www.amazon.es/dp/B085G3G2CY?creativeASIN=B085G3G2CY&asc_item-id=amzn1.ideas.2ZIHJJFJ9AVZ3&ref_=aip_sf_list_spv_ons_d_asin`} isExternal={true}>
  <Image src={`/libros/habitos_atomicos.jpg`} sx={{"width": "25em", "height": "10em", "borderRadius": "5px 15px ", "border": "4px solid #555", "boxShadow": "sm", "whiteSpace": "normal", "textAlling": "start"}}/>
=======
  <Box sx={{"padding": [3], "bg": "#03223f", "height": ["30em"], "width": ["30em"], "borderRadius": ["5px 20px"], "border": ["4px solid #555"], "boxShadow": "sm", "marginY": "0.5em"}}>
  <Link as={NextLink} href={`https://www.amazon.es/dp/B085G3G2CY?creativeASIN=B085G3G2CY&asc_item-id=amzn1.ideas.2ZIHJJFJ9AVZ3&ref_=aip_sf_list_spv_ons_d_asin`} isExternal={true}>
  <Image src={`/libros/habitos_atomicos.jpg`} sx={{"width": "29em", "height": "14em", "borderRadius": "5px 15px ", "border": "4px solid #555", "boxShadow": "sm", "objectFit": "container"}}/>
>>>>>>> vercion1.1
=======
  <Box sx={{"padding": [3], "bg": "#03223f", "height": ["30em"], "width": ["30em"], "borderRadius": ["5px 20px"], "border": ["4px solid #555"], "boxShadow": "sm", "marginY": "0.5em"}}>
  <Link as={NextLink} href={`https://www.amazon.es/dp/B085G3G2CY?creativeASIN=B085G3G2CY&asc_item-id=amzn1.ideas.2ZIHJJFJ9AVZ3&ref_=aip_sf_list_spv_ons_d_asin`} isExternal={true}>
  <Image src={`/libros/habitos_atomicos.jpg`} sx={{"width": "29em", "height": "14em", "borderRadius": "5px 15px ", "border": "4px solid #555", "boxShadow": "sm", "objectFit": "container"}}/>
>>>>>>> vercion1.1
</Link>
  <Heading size={`sm`}>
  {`Hábitos Atómicos`}
</Heading>
  <Text>
  {`Explora cómo pequeños cambios en los hábitos pueden conducir a resultados extraordinarios.`}
</Text>
  <Badge colorScheme={`skyBlue`} variant={`solid`}>
  {`PRECIO : 19.00$`}
</Badge>
</Box>
<<<<<<< HEAD
<<<<<<< HEAD
  <Box sx={{"padding": [3], "bg": "#03223f", "height": ["28em"], "width": ["26em"], "borderRadius": ["5px 20px"], "border": ["4px solid #555"], "boxShadow": "sm", "marginY": "0.5em", "whiteSpace": "normal", "textAlling": "start"}}>
  <Link as={NextLink} href={`https://www.amazon.com/Steve-Jobs-Walter-Isaacson/dp/1451648537`} isExternal={true}>
  <Image src={`/libros/biografia_steve_jobs.jpg`} sx={{"width": "25em", "height": "10em", "borderRadius": "5px 15px ", "border": "4px solid #555", "boxShadow": "sm", "whiteSpace": "normal", "textAlling": "start"}}/>
=======
  <Box sx={{"padding": [3], "bg": "#03223f", "height": ["30em"], "width": ["30em"], "borderRadius": ["5px 20px"], "border": ["4px solid #555"], "boxShadow": "sm", "marginY": "0.5em"}}>
  <Link as={NextLink} href={`https://www.amazon.com/Steve-Jobs-Walter-Isaacson/dp/1451648537`} isExternal={true}>
  <Image src={`/libros/biografia_steve_jobs.jpg`} sx={{"width": "29em", "height": "14em", "borderRadius": "5px 15px ", "border": "4px solid #555", "boxShadow": "sm", "objectFit": "container"}}/>
>>>>>>> vercion1.1
=======
  <Box sx={{"padding": [3], "bg": "#03223f", "height": ["30em"], "width": ["30em"], "borderRadius": ["5px 20px"], "border": ["4px solid #555"], "boxShadow": "sm", "marginY": "0.5em"}}>
  <Link as={NextLink} href={`https://www.amazon.com/Steve-Jobs-Walter-Isaacson/dp/1451648537`} isExternal={true}>
  <Image src={`/libros/biografia_steve_jobs.jpg`} sx={{"width": "29em", "height": "14em", "borderRadius": "5px 15px ", "border": "4px solid #555", "boxShadow": "sm", "objectFit": "container"}}/>
>>>>>>> vercion1.1
</Link>
  <Heading size={`sm`}>
  {`Biografía de Steve Jobs`}
</Heading>
  <Text>
  {`Un relato detallado sobre la vida del cofundador de Apple, ofreciendo perspectivas inspiradoras.`}
</Text>
  <Badge colorScheme={`skyBlue`} variant={`solid`}>
  {`PRECIO : 21.19$`}
</Badge>
</Box>
<<<<<<< HEAD
<<<<<<< HEAD
  <Box sx={{"padding": [3], "bg": "#03223f", "height": ["28em"], "width": ["26em"], "borderRadius": ["5px 20px"], "border": ["4px solid #555"], "boxShadow": "sm", "marginY": "0.5em", "whiteSpace": "normal", "textAlling": "start"}}>
  <Link as={NextLink} href={`https://www.amazon.com/Padre-rico-pobre-Rich-Father/dp/1612680194`} isExternal={true}>
  <Image src={`/libros/padre_rico_padre_pobre.jpg`} sx={{"width": "25em", "height": "10em", "borderRadius": "5px 15px ", "border": "4px solid #555", "boxShadow": "sm", "whiteSpace": "normal", "textAlling": "start"}}/>
=======
  <Box sx={{"padding": [3], "bg": "#03223f", "height": ["30em"], "width": ["30em"], "borderRadius": ["5px 20px"], "border": ["4px solid #555"], "boxShadow": "sm", "marginY": "0.5em"}}>
  <Link as={NextLink} href={`https://www.amazon.com/Padre-rico-pobre-Rich-Father/dp/1612680194`} isExternal={true}>
  <Image src={`/libros/padre_rico_padre_pobre.jpg`} sx={{"width": "29em", "height": "14em", "borderRadius": "5px 15px ", "border": "4px solid #555", "boxShadow": "sm", "objectFit": "container"}}/>
>>>>>>> vercion1.1
=======
  <Box sx={{"padding": [3], "bg": "#03223f", "height": ["30em"], "width": ["30em"], "borderRadius": ["5px 20px"], "border": ["4px solid #555"], "boxShadow": "sm", "marginY": "0.5em"}}>
  <Link as={NextLink} href={`https://www.amazon.com/Padre-rico-pobre-Rich-Father/dp/1612680194`} isExternal={true}>
  <Image src={`/libros/padre_rico_padre_pobre.jpg`} sx={{"width": "29em", "height": "14em", "borderRadius": "5px 15px ", "border": "4px solid #555", "boxShadow": "sm", "objectFit": "container"}}/>
>>>>>>> vercion1.1
</Link>
  <Heading size={`sm`}>
  {`Padre Rico, Padre Pobre`}
</Heading>
  <Text>
  {`Aborda conceptos financieros esenciales, proporcionando una perspectiva única sobre el dinero.`}
</Text>
  <Badge colorScheme={`skyBlue`} variant={`solid`}>
  {`PRECIO : 6.39$`}
</Badge>
</Box>
</HStack>
  <HStack>
<<<<<<< HEAD
<<<<<<< HEAD
  <Box sx={{"padding": [3], "bg": "#03223f", "height": ["28em"], "width": ["26em"], "borderRadius": ["5px 20px"], "border": ["4px solid #555"], "boxShadow": "sm", "marginY": "0.5em", "whiteSpace": "normal", "textAlling": "start"}}>
  <Link as={NextLink} href={`https://www.amazon.es/dp/8408143980?creativeASIN=8408143980&asc_item-id=amzn1.ideas.2ZIHJJFJ9AVZ3&ref_=aip_sf_list_spv_ons_d_asin`} isExternal={true}>
  <Image src={`/libros/7_habitos_gente_efectiva.jpg`} sx={{"width": "25em", "height": "10em", "borderRadius": "5px 15px ", "border": "4px solid #555", "boxShadow": "sm", "whiteSpace": "normal", "textAlling": "start"}}/>
=======
  <Box sx={{"padding": [3], "bg": "#03223f", "height": ["30em"], "width": ["30em"], "borderRadius": ["5px 20px"], "border": ["4px solid #555"], "boxShadow": "sm", "marginY": "0.5em"}}>
  <Link as={NextLink} href={`https://www.amazon.es/dp/8408143980?creativeASIN=8408143980&asc_item-id=amzn1.ideas.2ZIHJJFJ9AVZ3&ref_=aip_sf_list_spv_ons_d_asin`} isExternal={true}>
  <Image src={`/libros/7_habitos_gente_efectiva.jpg`} sx={{"width": "29em", "height": "14em", "borderRadius": "5px 15px ", "border": "4px solid #555", "boxShadow": "sm", "objectFit": "container"}}/>
>>>>>>> vercion1.1
=======
  <Box sx={{"padding": [3], "bg": "#03223f", "height": ["30em"], "width": ["30em"], "borderRadius": ["5px 20px"], "border": ["4px solid #555"], "boxShadow": "sm", "marginY": "0.5em"}}>
  <Link as={NextLink} href={`https://www.amazon.es/dp/8408143980?creativeASIN=8408143980&asc_item-id=amzn1.ideas.2ZIHJJFJ9AVZ3&ref_=aip_sf_list_spv_ons_d_asin`} isExternal={true}>
  <Image src={`/libros/7_habitos_gente_efectiva.jpg`} sx={{"width": "29em", "height": "14em", "borderRadius": "5px 15px ", "border": "4px solid #555", "boxShadow": "sm", "objectFit": "container"}}/>
>>>>>>> vercion1.1
</Link>
  <Heading size={`sm`}>
  {`Los 7 Hábitos de la Gente Altamente Efectiva`}
</Heading>
  <Text>
  {`Un clásico sobre liderazgo personal y eficacia, destacando hábitos fundamentales.`}
</Text>
  <Badge colorScheme={`skyBlue`} variant={`solid`}>
  {`PRECIO : 10.17$`}
</Badge>
</Box>
</HStack>
</Box>
</HStack>
  <HStack>
  <Box sx={{"bg": "#464255", "width": "100%", "zIndex": "5", "paddingX": 30}}>
  <Center>
  <HStack>
  <Text as={`span`}>
  <Text sx={{"color": "#038bbb", "fontSize": "1em", "fontWeight": "bold"}}>
  {`hola mundo este es mi primer sitio web 2023/2024, la idea viene de`}
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
