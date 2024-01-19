"""Welcome to Reflex! This file outlines the steps to create a basic app."""

import reflex as rx

from Dev_store.components.creditos import creditos
from Dev_store.components.cuerpo import libros_productos
from Dev_store.components.Header import encabezado, presentacion
from Dev_store.components.styles import PaletaDeColores, route, tamaños


@rx.page(route=route.BIBLIOTECA.value,
         title="Dev_store")
def biblioteca() -> rx.Component:
    return rx.box(
            rx.hstack(
                encabezado(),
            ),

                rx.hstack(
                    presentacion("tienda tecnologica apartado de biblioteca"),
                    margin=tamaños.MARGEN.value
            ),
                rx.hstack(
                    libros_productos(),
                    margin=tamaños.MARGEN.value
                ),
            rx.hstack(
                creditos(),
            ),
        bg=PaletaDeColores.SKYBLUE.value,
        width="100%"
    )

