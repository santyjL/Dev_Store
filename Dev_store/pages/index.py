
import reflex as rx

from Dev_store.components.creditos import creditos
from Dev_store.components.cuerpo import categorias
from Dev_store.components.Header import encabezado, presentacion
from Dev_store.components.styles import PaletaDeColores, tamaños


@rx.page(title="Dev_Store")
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
                    categorias(),
                    margin=tamaños.MARGEN.value
                ),
            rx.hstack(
                creditos(),
            ),
        bg=PaletaDeColores.SKYBLUE.value,
        width="100%"
    )

