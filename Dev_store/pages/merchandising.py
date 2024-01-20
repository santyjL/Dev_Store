"""Welcome to Reflex! This file outlines the steps to create a basic app."""

import reflex as rx

from Dev_store.components.creditos import creditos
from Dev_store.components.cuerpo import Merchandising_productos
from Dev_store.components.Header import encabezado, presentacion
from Dev_store.components.styles import PaletaDeColores, route, tamaños


@rx.page(route=route.MERCHANDISING.value)
def merchandising() -> rx.Component:
    # Encabezado
    header_section = rx.hstack(encabezado())

    # Presentación
    presentation_section = rx.hstack(
        presentacion("tienda tecnologica apartado de Merchandising"),
        margin=tamaños.MARGEN.value
    )

    # Productos de Merchandising
    merchandising_section = rx.hstack(
        Merchandising_productos(),
        margin=tamaños.MARGEN.value
    )

    # Créditos
    credits_section = rx.hstack(creditos())

    return rx.box(
        header_section,
        presentation_section,
        merchandising_section,
        credits_section,
        bg=PaletaDeColores.FONDO_GRADIENTE.value,
        width="100%"
    )
