
import datetime

import reflex as rx

from Dev_store.components import styles


def creditos () -> rx.Component():
    return rx.box(
        rx.center(
     rx.hstack(
         rx.span(
             rx.text("hola mundo este este es mi primer sitio web ,  la idea viene de",
                     color = styles.PaletaDeColores.CELESTE.value ,
                     font_size=styles.tamaños.MEDIANO.value,font_weight="bold")
             ),
         rx.span(
             rx.link(
             rx.text("retosdeprogramacion.com/proyectos/",
                     color = styles.PaletaDeColores.CELESTE.value ,
                     font_size=styles.tamaños.MEDIANO.value,font_weight="bold",),
             href="https://retosdeprogramacion.com/proyectos/",
             is_external=True


            ),
         ),

         rx.span(
             rx.text("hecho por " ,
                     color = styles.PaletaDeColores.CELESTE.value
                     , font_size=styles.tamaños.MEDIANO.value,
                     font_weight="bold")
         ),
        rx.span(
            rx.link(rx.text("by santyjL" ,
                            color = styles.PaletaDeColores.CELESTE.value ,
                            font_size=styles.tamaños.MEDIANO.value,
                            font_weight="bold"),
                    href="https://github.com/santyjL/santyjL")
        )
     )
     )   ,
    bg=styles.PaletaDeColores.GRIS.value,
    width="100%",
    z_indez="5",
    padding_x=30
     )