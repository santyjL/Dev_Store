import reflex as rx

from Dev_store.components.styles import TamañosProductos


class InfoProducto():
    def __init__(self,imagen=None ,link=None , nombre_producto=None , descripcion=None) -> None:

        #parametros variables
        self.nombre_producto = nombre_producto
        self.link = link
        self.imagen = imagen
        self.descripcion = descripcion

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
        self.bg="black"

    def productos (self) -> rx.Component:
        return rx.box(
                    rx.link(rx.image(
                        src=self.imagen,
                        width=self.width_imagen,
                        height=self.height_imagen,
                        border_radius=self.border_radius_imagen,
                        border=self.border_imagen,
                        box_shadow=self.box_shadow,) ,

                    href="https://www.python.org/" , is_external=True),

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


producto1 = InfoProducto(imagen="favicon.ico" ,
                             link="https://www.python.org/" ,
                             nombre_producto="Huawei ultra" ,
                             descripcion="hola mundo")



def cuerpo() -> rx.Component:
    return rx.box(
            rx.hstack(
                producto1.productos(),
                producto1.productos(),
                producto1.productos(),
            ),
            rx.hstack(
                producto1.productos(),
                producto1.productos(),
                producto1.productos(),
            ),
        border_radius=TamañosProductos.BORDES_RADIUS.value,
        border=TamañosProductos.BORDER.value,
        box_shadow=TamañosProductos.BOX_SHADOW.value,
        padding=TamañosProductos.PADDING.value,
        bg="white",
        width="100%"

        )
