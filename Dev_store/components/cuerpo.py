import reflex as rx

from Dev_store.components.styles import TamañosProductos


class InfoProducto():
    def __init__(self,imagen=None ,link=None , nombre_producto=None , descripcion=None , categoria = None):

        #parametros variables
        self.nombre_producto = nombre_producto
        self.link = link
        self.imagen = imagen
        self.descripcion = descripcion
        self.categoria = categoria

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
        self.bg="#03223f"

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
                    padding=self.padding,
                    bg=self.bg,
                    height=self.height,
                    width=self.width,
                    border_radius=self.border_radius,
                    border=self.border,
                    box_shadow=self.box_shadow,
                    margin_y=self.margin
                )


#prodcutos general
producto1 = InfoProducto(imagen="GK61.jpg" ,
                             link="https://www.amazon.com/-/es/GK61-60-intercambiable-retroiluminado-Layout/dp/B0C77FTYW3/ref=sr_1_1?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=teclado+mecanico+g61&sr=8-1" ,
                             nombre_producto="teclado mecanico G61 Logitech" ,
                             descripcion=
                             "Geeky GK61 60% - Teclado mecánico - 61 teclas multicolor RGB  retroiluminado para PC/Mac - Diseño americano ANSI US (azul, marrón mecánico)",
                             categoria="setup")
producto2 = InfoProducto(imagen="monitor ULTRAWIDE.jpg" ,
                             link="https://www.amazon.com/-/es/GIGABYTE-pantalla-3840x2160-respuesta-DisplayPort/dp/B09WPTKDQY/ref=sr_1_1?keywords=4k+ultrawide+monitor&sr=8-1" ,
                             nombre_producto="monitor ultrawide 32p''" ,
                             descripcion=
                             "GIGABYTE M32UC 32'' 144Hz 4K UHD - Monitor curvado - SS VA, pantalla 3840x2160, tiempo de respuesta de 1 ms, 1 DisplayPort 1.4, 2 HDMI 2.1, 1 USB tipo C, 4 USB 3.2",
                             categoria="setup")
producto3 = InfoProducto(imagen="Astro A10.jpg" ,
                             link="https://www.amazon.com/-/es/Astro-A10-Auriculares-micr%C3%B3fono-Playstation/dp/B0C381TXNZ/ref=sr_1_6?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=A10%2Bastros&sr=8-6&th=1" ,
                             nombre_producto="Astro A10" ,
                             descripcion=
                             "Astro A10 - Auriculares para juegos Gen 2 con cable, con micrófono abatible para silenciar, controladores de 1.260 in, para Xbox Series X|S, Xbox One, Playstation 5/4, Nintendo Switch, PC, Mac",
                             categoria="setup")
producto4 = InfoProducto(imagen="G502 Hero.jpg",
                       link="https://www.amazon.com/-/es/Logitech-G502-HERO-rendimiento-programables/dp/B07GBZ4Q68/ref=sr_1_1?keywords=logitech+mouse&sr=8-1"
                       ,nombre_producto="Logitech G502 HERO",descripcion=" Mouse de alto rendimiento con cable, sensor HERO 25K, 25,600 ppp, RGB, pesos ajustables, 11 botones programables, memoria integrada, PC / Mac",categoria="setup")
producto5 = InfoProducto(imagen="silla ergonomica.jpg",
                         link="https://www.amazon.com/-/es/ergon%C3%B3mica-reposapi%C3%A9s-computadora-reposacabezas-reposabrazos/dp/B0C7C1B9D3/ref=cs_sr_dp_3?__mk_es_US=%EF%BF%BDM%EF%BF%BD%7D%EF%BF%BD%EF%BF%BD&keywords=silla+ergonomitca&sr=8-1",
                         nombre_producto="Silla de oficina ergonómica plegable",
                         descripcion="silla de escritorio de computadora con respaldo alto y soporte lumbar ajustable, reposabrazos fijos, reposacabezas, mecedora de 90° a 110°, silla de escritorio de oficina en casa, fácil montaje, color negro",
                         categoria="setup")
producto6 = InfoProducto(imagen="lapto.jpg",
                         link="https://www.amazon.com/-/es/LG-gram-Port%C3%A1til-pulgadas-plataforma/dp/B0BVXQQQRL/ref=sr_1_6?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=laptops%2B16%2Bram%2B%2C%2B512%2Bgb%2B%2C%2Bfull%2BHD%2B1080x1980%2B%2C%2B15%2C6pulgadas%2B%2C%2Bintel%2B12&sr=8-6&th=1",
                         nombre_producto="LG gram",
                         descripcion="Portátil ligero de 16 pulgadas, procesador Intel Core i7 13, Windows 11 Home, 16 GB de RAM, SSD de 512 GB, negro",
                         categoria="septup")

def cuerpo() -> rx.Component:
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
