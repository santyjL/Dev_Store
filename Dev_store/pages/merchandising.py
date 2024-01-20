"""Welcome to Reflex! This file outlines the steps to create a basic app."""

import reflex as rx

from Dev_store.components.creditos import creditos
from Dev_store.components.cuerpo import Merchandising_productos
from Dev_store.components.Header import encabezado, presentacion
from Dev_store.components.styles import PaletaDeColores, route, tamaños


@rx.page(route=route.MERCHANDISING.value)
def merchandising() -> rx.Component:
    return rx.box(
            rx.hstack(
                encabezado(),
            ),

                rx.hstack(
                    presentacion("tienda tecnologica apartado de Merchandising"),
                    margin=tamaños.MARGEN.value
            ),
                rx.hstack(
                    Merchandising_productos(),
                    margin=tamaños.MARGEN.value
                ),
            rx.hstack(
                creditos(),
            ),
        bg=PaletaDeColores.FONDO_GRADIENTE.value,
        width="100%"
    )

