import datetime

import reflex as rx

from Dev_store.components import styles


def presentacion() -> rx.components:
    return rx.box(
        rx.hstack(rx.span(rx.heading("bienvenido a la " ,
                color="rgb(255,255,255)",
                size="xl")),

        rx.span(rx.heading("DEV_STORE",
                background="linear-gradient(271.68deg, #D6D0CF 0.75%, #A566E7 88.52%)",
                background_clip="text",
                size="2xl",
                ))
        ),
        rx.heading("tienda tecnologica aficionada que lo disfrute" ,
                color="rgb(233,255,255)",
                size="md"),
        padding_y=styles.tamaños.ENORME.value

    )


def encabezado() -> rx.Component:
    return rx.box(
        rx.hstack(
            rx.heading(rx.text("DEV_STORE",
                               as_="i",
                               size=styles.tamaños.MEDIANO.value),
            color="rgb(0,0,0)"),

            bg="rgb(255,255,255)",
            position="fixed",
            width="100%",
            z_indez="5",

        ),
    )