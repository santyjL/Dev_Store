from enum import Enum

import reflex as rx


class TamañosProductos(Enum):
    WIDTH_IMAGEN="25em"
    HEIGHT_IMAGEN="6.6em"
    BORDES_RADIUS_IMAGEN="5px 15px "
    BORDER_IMAGEN="4px solid #555"

    BOX_SHADOW="sm"
    SIZE="sm"
    PADDING=3,
    HEIGHT="20em",
    WIDTH="26em",
    BORDES_RADIUS="5px 20px",
    BORDER="4px solid #555",
    MARGIN="0.5em"


class tamaños(Enum) :
    PEQUEÑO="0.5em"
    MEDIANO="1em"
    grande="2em"
    ENORME="4em"
    MARGEN="3em"
    MAX_WIDTH="1100PX"