"""Welcome to Reflex! This file outlines the steps to create a basic app."""

import reflex as rx

from Dev_store.components.creditos import creditos
from Dev_store.components.cuerpo import setup_productos
from Dev_store.components.Header import encabezado, presentacion
from Dev_store.components.styles import PaletaDeColores, route, tamaños


@rx.page(route=route.SETUP.value)
def setup() -> rx.Component:
    return rx.box(
            rx.hstack(
                encabezado(),
            ),

                rx.hstack(
                    presentacion(),
                    margin=tamaños.MARGEN.value
            ),
                rx.hstack(
                    setup_productos(),
                    margin=tamaños.MARGEN.value
                ),
            rx.hstack(
                creditos(),
            ),
        bg=PaletaDeColores.SKYBLUE.value,
        width="100%"
    )


