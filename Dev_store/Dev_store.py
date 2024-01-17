"""Welcome to Reflex! This file outlines the steps to create a basic app."""

import reflex as rx

from Dev_store.components.cuerpo import cuerpo
from Dev_store.components.Header import encabezado, presentacion
from Dev_store.components.styles import tamaños


class State(rx.State):
    """The app state."""

    pass


def index() -> rx.Component:
    return rx.box(
            rx.hstack(
            encabezado(),
            ),

                rx.hstack(
                    presentacion(),
                    margin=tamaños.MARGEN.value
            ),
                rx.hstack(
                    cuerpo(),
                    margin=tamaños.MARGEN.value
                )

    )

#
app = rx.App()
app.add_page(index)
app.compile()
