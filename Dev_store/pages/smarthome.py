"""Welcome to Reflex! This file outlines the steps to create a basic app."""

import reflex as rx

from Dev_store.components.creditos import creditos
from Dev_store.components.cuerpo import smart_home_productos
from Dev_store.components.Header import encabezado, presentacion
from Dev_store.components.styles import PaletaDeColores, route, tamaños


@rx.page(route=route.SMART_HOME.value)
def smart_home() -> rx.Component:
    # Encabezado
    header_section = rx.hstack(
        encabezado(),
    )

    # Presentación
    presentation_section = rx.hstack(
        presentacion("tienda tecnologica apartado de smart home"),
        margin=tamaños.MARGEN.value
    )

    # Productos de Smart Home
    smart_home_section = rx.hstack(
        smart_home_productos(),
        margin=tamaños.MARGEN.value
    )

    # Créditos
    credits_section = rx.hstack(
        creditos(),
    )

    return rx.box(
        header_section,
        presentation_section,
        smart_home_section,
        credits_section,
        bg=PaletaDeColores.FONDO_GRADIENTE.value,
        width="100%"
    )
