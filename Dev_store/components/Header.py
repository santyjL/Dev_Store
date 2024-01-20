
import reflex as rx

from Dev_store.components import styles


def presentacion(text : str) -> rx.components:
    return rx.box(
        rx.hstack(rx.span(rx.heading("bienvenido a la " ,
                color=styles.PaletaDeColores.CELESTE.value,
                size="xl")),

        rx.span(rx.heading("DEV_STORE",
                background="linear-gradient(271.68deg, #98173d 0.75%, #038bbb 88.52%)",
                background_clip="text",
                size="2xl",
                ))
        ),
        rx.heading(text ,
                color=styles.PaletaDeColores.CELESTE.value,
                size="lg"),
        padding_y=styles.tamaños.ENORME.value

    )


def encabezado() -> rx.Component:
    return rx.box(
        rx.hstack(
            rx.heading(
                rx.link(
                rx.text("DEV_STORE",
                               as_="i",
                               size=styles.tamaños.MEDIANO.value),
            href=styles.route.Dev_Store.value,
            color=styles.PaletaDeColores.CELESTE.value),

                ),
            rx.spacer(),
            rx.link(rx.image(src="/git hub logo.jpg", width="4.5em", height="4.5em"),
                    href="https://github.com/santyjL/Dev_Store",
                    is_external=True),


            bg=styles.PaletaDeColores.GRIS.value,
            position="fixed",
            width="100%",
            z_indez="5",

        ),
    )