
import reflex as rx

from Dev_store.components.creditos import creditos
from Dev_store.components.cuerpo import categorias
from Dev_store.components.Header import encabezado, presentacion
from Dev_store.components.styles import PaletaDeColores, route, tamaños


@rx.page(route.Dev_Store.value,
    title="Dev_Store")
def index() -> rx.Component:
    return rx.box(
            rx.hstack(
                encabezado(),
            ),

                rx.hstack(
                    presentacion("tienda tecnologica aficionada que lo disfrute"),
                    margin=tamaños.MARGEN.value
            ),
                rx.hstack(
                    categorias(),
                    margin=tamaños.MARGEN.value
                ),
            rx.hstack(
                creditos(),
            ),
        bg=PaletaDeColores.SKYBLUE.value,
        width="100%"
    )

