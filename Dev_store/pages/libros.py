"""Welcome to Reflex! This file outlines the steps to create a basic app."""

import reflex as rx

from Dev_store.components.creditos import creditos
from Dev_store.components.cuerpo import libros_productos
from Dev_store.components.Header import encabezado, presentacion
from Dev_store.components.styles import PaletaDeColores, route, tamaños


@rx.page(route=route.BIBLIOTECA.value, title="Dev_store")
def biblioteca() -> rx.Component:
    # Encabezado
    header_section = rx.hstack(encabezado())

    # Presentación
    presentation_section = rx.hstack(
        presentacion("tienda tecnologica apartado de biblioteca"),
        margin=tamaños.MARGEN.value
    )

    # Productos de la Biblioteca
    libros_section = rx.hstack(
        libros_productos(),
        margin=tamaños.MARGEN.value
    )

    # Créditos
    credits_section = rx.hstack(creditos())

    return rx.box(
        header_section,
        presentation_section,
        libros_section,
        credits_section,
        bg=PaletaDeColores.FONDO_GRADIENTE.value,
        width="100%"
    )
