import reflex as rx

from Dev_store.components.styles import (PaletaDeColores, TamañosProductos,
                                         route)


class InfoProducto():
    def __init__(self,imagen ,link , nombre_producto, descripcion ,precio ,categoria ):

        #parametros variables
        self.nombre_producto = nombre_producto
        self.link = link
        self.imagen = imagen
        self.descripcion = descripcion
        self.categoria = categoria
        self.precio = precio

        #parametros no variables
        self.width_imagen=TamañosProductos.WIDTH_IMAGEN.value
        self.height_imagen=TamañosProductos.HEIGHT_IMAGEN.value
        self.border_radius_imagen= TamañosProductos.BORDES_RADIUS_IMAGEN.value
        self.border_imagen=TamañosProductos.BORDER_IMAGEN.value
        self.box_shadow=TamañosProductos.BOX_SHADOW.value

        self.size=TamañosProductos.SIZE.value
        self.padding=TamañosProductos.PADDING.value
        self.height=TamañosProductos.HEIGHT.value
        self.width=TamañosProductos.WIDTH.value
        self.border_radius=TamañosProductos.BORDES_RADIUS.value
        self.border=TamañosProductos.BORDER.value
        self.margin=TamañosProductos.MARGIN.value
        self.bg=PaletaDeColores.AZUL_INTERMEDIO.value

    def productos (self) -> rx.Component:
        return rx.box(
                    rx.link(rx.image(
                        src=self.imagen,
                        width=self.width_imagen,
                        height=self.height_imagen,
                        border_radius=self.border_radius_imagen,
                        border=self.border_imagen,
                        box_shadow=self.box_shadow,) ,

                    href=self.link , is_external=True),

                    rx.heading(self.nombre_producto , size=self.size),
                    rx.text(self.descripcion),
                    rx.badge(F"PRECIO : {self.precio}",variant="solid" ,color_scheme="skyBlue" ),
                    padding=self.padding,
                    bg=self.bg,
                    height=self.height,
                    width=self.width,
                    border_radius=self.border_radius,
                    border=self.border,
                    box_shadow=self.box_shadow,
                    margin_y=self.margin
                )

#productos setup
producto1 = InfoProducto(imagen="/setup/GK61.jpg" ,
                             link="https://www.amazon.com/-/es/GK61-60-intercambiable-retroiluminado-Layout/dp/B0C77FTYW3/ref=sr_1_1?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=teclado+mecanico+g61&sr=8-1" ,
                             nombre_producto="teclado mecanico G61 Logitech" ,
                             precio="30.00$",
                             descripcion="Geeky GK61 60% - Teclado mecánico - 61 teclas multicolor RGB  retroiluminado para PC/Mac - Diseño americano ANSI US (azul, marrón mecánico)",
                             categoria="setup")
producto2 = InfoProducto(imagen="/setup/monitor ULTRAWIDE.jpg" ,
                             link="https://www.amazon.com/-/es/GIGABYTE-pantalla-3840x2160-respuesta-DisplayPort/dp/B09WPTKDQY/ref=sr_1_1?keywords=4k+ultrawide+monitor&sr=8-1" ,
                             nombre_producto="monitor ultrawide 32p''" ,
                             precio="300$.00$",
                             descripcion=
                             "GIGABYTE M32UC 32'' 144Hz 4K UHD - Monitor curvado - SS VA, pantalla 3840x2160, tiempo de respuesta de 1 ms, 1 DisplayPort 1.4, 2 HDMI 2.1, 1 USB tipo C, 4 USB 3.2",
                             categoria="setup")
producto3 = InfoProducto(imagen="/setup/Astro A10.jpg" ,
                             link="https://www.amazon.com/-/es/Astro-A10-Auriculares-micr%C3%B3fono-Playstation/dp/B0C381TXNZ/ref=sr_1_6?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=A10%2Bastros&sr=8-6&th=1" ,
                             nombre_producto="Astro A10" ,
                             precio="50.00$",descripcion=
                             "Astro A10 - Auriculares para juegos Gen 2 con cable, con micrófono abatible para silenciar, controladores de 1.260 in, para Xbox Series X|S, Xbox One, Playstation 5/4, Nintendo Switch, PC, Mac",
                             categoria="setup")
producto4 = InfoProducto(imagen="/setup/G502 Hero.jpg",
                       link="https://www.amazon.com/-/es/Logitech-G502-HERO-rendimiento-programables/dp/B07GBZ4Q68/ref=sr_1_1?keywords=logitech+mouse&sr=8-1"
                       ,nombre_producto="Logitech G502 HERO",
                       precio="43.00$",
                       descripcion=" Mouse de alto rendimiento con cable, sensor HERO 25K, 25,600$ ppp, RGB, pesos ajustables, 11 botones programables, memoria integrada, PC / Mac",
                       categoria="setup")
producto5 = InfoProducto(imagen="/setup/silla ergonomica.jpg",
                         link="https://www.amazon.com/-/es/ergon%C3%B3mica-reposapi%C3%A9s-computadora-reposacabezas-reposabrazos/dp/B0C7C1B9D3/ref=cs_sr_dp_3?__mk_es_US=%EF%BF%BDM%EF%BF%BD%7D%EF%BF%BD%EF%BF%BD&keywords=silla+ergonomitca&sr=8-1",
                         nombre_producto="Silla de oficina ergonómica plegable",
                         precio="109.00$",
                         descripcion="silla de escritorio de computadora con respaldo alto y soporte lumbar ajustable, reposabrazos fijos, reposacabezas, mecedora de 90° a 110°, silla de escritorio de oficina en casa, fácil montaje, color negro",
                         categoria="setup")
producto6 = InfoProducto(imagen="/setup/lapto.jpg",
                         link="https://www.amazon.com/-/es/LG-gram-Port%C3%A1til-pulgadas-plataforma/dp/B0BVXQQQRL/ref=sr_1_6?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=laptops%2B16%2Bram%2B%2C%2B512%2Bgb%2B%2C%2Bfull%2BHD%2B1080x1980%2B%2C%2B15%2C6pulgadas%2B%2C%2Bintel%2B12&sr=8-6&th=1",
                         nombre_producto="LG gram",
                         precio="1024.00$",
                         descripcion="Portátil ligero de 16 pulgadas, procesador Intel Core i7 13, Windows 11 Home, 16 GB de RAM, SSD de 512 GB, negro",
                         categoria="septup")

#productos smart_home
producto7=InfoProducto(imagen="/smart_home/alexa.jpg",
                       link="https://www.amazon.com/-/es/dp/B0BF73CTQF?ref_=mars_gen_B07XJ8C8F5",
                       nombre_producto="Alexa Dot 5.ª generación",
                       precio="34.99$",
                       descripcion=" Usa el Echo Dot para mantenerte al día con la ayuda de Alexa, controlar dispositivos de Smart Home e iniciar rutinas por movimiento.",
                       categoria="smart_home")
producto8=InfoProducto(imagen="/smart_home/aspiradora_robot.jpg",
                       link="https://www.amazon.com/-/es/iRobot-Roomba-aspiradora-conectividad-compatible/dp/B08SP5GYJP/ref=sr_1_1?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=aspiradora+robot&sr=8-1",
                       nombre_producto="Robot Roomba",
                       precio="126.38$",
                       descripcion="  Robot aspiradora con conectividad Wi-Fi, compatible con Alexa",
                       categoria="smart_home")
producto9=InfoProducto(imagen="/smart_home/tira_led.jpg",
                       link="https://www.amazon.com/sincronizaci%C3%B3n-bricolaje-decoraci%C3%B3n-dormitorio-compatible/dp/B09DCX12V4?ref_=ast_sto_dp&th=1led Govee",
                       nombre_producto="tira led Govee",
                       precio="54.99$",
                       descripcion=" Tira de luces RGBIC de neón con sincronización de música, diseño de bricolaje, funciona con Alexa, Google Assistant, tira de luces LED de 10 pies para juegos, decoración de dormitorio y sala de estar ",
                       categoria="smart_home")
producto10=InfoProducto(imagen="/smart_home/tomas_corrientes.jpg",
                       link="https://www.amazon.com/-/es/enchufes-inteligentes-Bluetooth-Assistant-inteligente/dp/B09LVN3PF8/ref=sr_1_11?keywords=tomacorriente+inteligente+alexa&sr=8-11",
                       nombre_producto="tomas correintes inteligentes",
                       precio="48.98$",
                       descripcion=" Paquete de 2 enchufes inteligentes duales, toma Bluetooth WiFi de 15 A, funciona con Alexa y Google Assistant, paquete de diseño compacto 2 en 1 con enchufe inteligente Govee y enchufes WiFi",
                       categoria="smart_home")

#productos libros libros
producto11=InfoProducto(imagen="/libros/codigo limpio.jpg",
                       link="https://www.amazon.es/dp/8441532109?creativeASIN=8441532109&asc_item-id=amzn1.ideas.2ZIHJJFJ9AVZ3&ref_=aip_sf_list_spv_ons_d_asin",
                       nombre_producto="Código Limpio",
                       precio="49.87$",
                       descripcion=" Manual de estilo para el desarrollo ágil de software (PROGRAMACIÓN)",
                       categoria="libros")
producto12 = InfoProducto(imagen="/libros/programador_pragmatico.jpg",
                      link="https://www.amazon.com/Programador-Pragmatico-El-Spanish/dp/020161622X",
                      nombre_producto="El Programador Pragmático",
                      precio="37.95",
                      descripcion="Un clásico en la programación, aborda conceptos prácticos y eficientes para desarrolladores.",
                      categoria="Libros de Programación")
producto13 = InfoProducto(imagen="/libros/curso_intensivo_python.jpg",
                      link="https://www.amazon.es/dp/B0CLD7RPNS?creativeASIN=B0CLD7RPNS&asc_item-id=amzn1.ideas.2ZIHJJFJ9AVZ3&ref_=aip_sf_list_spv_ons_d_asin",
                      nombre_producto="Curso Intensivo de Python",
                      precio="49.87",
                      descripcion="Ideal para aprendices como tú, proporciona una inmersión profunda en Python con ejercicios prácticos.",
                      categoria="Libros de Programación")
producto14 = InfoProducto(imagen="/libros/habitos_atomicos.jpg",
                      link="https://www.amazon.es/dp/B085G3G2CY?creativeASIN=B085G3G2CY&asc_item-id=amzn1.ideas.2ZIHJJFJ9AVZ3&ref_=aip_sf_list_spv_ons_d_asin",
                      nombre_producto="Hábitos Atómicos",
                      precio="19.00",
                      descripcion="Explora cómo pequeños cambios en los hábitos pueden conducir a resultados extraordinarios.",
                      categoria="Desarrollo Personal")
producto15 = InfoProducto(imagen="/libros/biografia_steve_jobs.jpg",
                      link="https://www.amazon.com/Steve-Jobs-Walter-Isaacson/dp/1451648537",
                      nombre_producto="Biografía de Steve Jobs",
                      precio="21.19",
                      descripcion="Un relato detallado sobre la vida del cofundador de Apple, ofreciendo perspectivas inspiradoras.",
                      categoria="Biografías")
producto16 = InfoProducto(imagen="/libros/padre_rico_padre_pobre.jpg",
                      link="https://www.amazon.com/Padre-rico-pobre-Rich-Father/dp/1612680194",
                      nombre_producto="Padre Rico, Padre Pobre",
                      precio="6.39",
                      descripcion="Aborda conceptos financieros esenciales, proporcionando una perspectiva única sobre el dinero.",
                      categoria="Finanzas Personales")
producto17 = InfoProducto(imagen="/libros/7_habitos_gente_efectiva.jpg",
                      link="https://www.amazon.es/dp/8408143980?creativeASIN=8408143980&asc_item-id=amzn1.ideas.2ZIHJJFJ9AVZ3&ref_=aip_sf_list_spv_ons_d_asin",
                      nombre_producto="Los 7 Hábitos de la Gente Altamente Efectiva",
                      precio="10.17",
                      descripcion="Un clásico sobre liderazgo personal y eficacia, destacando hábitos fundamentales.",
                      categoria="Desarrollo Personal")

#Merchandising


def libros_productos() -> rx.Component:
    return rx.box(
            rx.hstack(
                producto11.productos(),
                producto12.productos(),
                producto13.productos(),
            ),
            rx.hstack(
                producto14.productos(),
                producto15.productos(),
                producto16.productos(),
            ),
            rx.hstack(
                producto17.productos(),

            ),
        border_radius=TamañosProductos.BORDES_RADIUS.value,
        border=TamañosProductos.BORDER.value,
        box_shadow=TamañosProductos.BOX_SHADOW.value,
        padding=TamañosProductos.PADDING.value,
        bg="#000000",
        width="100%"

        )

def smart_home_productos() -> rx.components:
        return rx.box(
            rx.hstack(
                producto7.productos(),
                producto8.productos(),
                producto9.productos(),
            ),
            rx.hstack(
                producto10.productos()
            ),
        border_radius=TamañosProductos.BORDES_RADIUS.value,
        border=TamañosProductos.BORDER.value,
        box_shadow=TamañosProductos.BOX_SHADOW.value,
        padding=TamañosProductos.PADDING.value,
        bg="#000000",
        width="100%"

        )

def setup_productos() -> rx.Component:
    return rx.box(
            rx.hstack(
                producto1.productos(),
                producto2.productos(),
                producto3.productos(),
            ),
            rx.hstack(
                producto4.productos(),
                producto5.productos(),
                producto6.productos(),
            ),
        border_radius=TamañosProductos.BORDES_RADIUS.value,
        border=TamañosProductos.BORDER.value,
        box_shadow=TamañosProductos.BOX_SHADOW.value,
        padding=TamañosProductos.PADDING.value,
        bg="#000000",
        width="100%"

        )

def categorias() -> rx.Component:
    return rx.grid(
        rx.hstack(

            rx.box(
                rx.heading("BIBLIOTECA" , size="xl"),
                rx.link(
                        rx.image(src="/libros.jpg" ,h="11.7em" ,w="100%" ,padding=2 ),
                        href=route.BIBLIOTECA.value
                    ),

                bg="lightblue",
                h="14em",
                w="60%"),

            rx.box(
                rx.heading("MERCHANDISING" , size="xl"),
                rx.link(
                        rx.image(src="/Merchandising.jpg" ,h="11.7em" ,w="100%" ,padding=2 ),
                        href=route.MERCHANDISING.value
                    ),

                bg="lightgreen",
                h="14em" ,
                w="40%"),
            ),

        rx.hstack(

            rx.box(
                rx.heading("SMARTHOME" , size="xl"),
                rx.link(
                    rx.image(src="/smarthome.jpg" ,h="11.7em" ,w="100%" ,padding=2 ),
                    href=route.SMART_HOME.value
                ),

                bg="yellow",
                h="14em" ,
                w="40%",),

            rx.box(
                rx.heading("SETUP" , size="xl"),
                rx.link(
                    rx.image(src="/setup.jpg" ,h="11.7em" ,w="100%" ,padding=2 ),
                    href=route.SETUP.value
                ),

                bg="orange",
                h="14em" ,
                w="60%",),
        ),
        bg = PaletaDeColores.CREMA.value,
        h="30em",
        width="100%",
        padding=3


        )