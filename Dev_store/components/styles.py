from enum import Enum

import reflex as rx


class PaletaDeColores (Enum):
    AZUL_OSCURO = "#010d23"
    AZUL_INTERMEDIO = "#03223f"
    CELESTE = "#038bbb"
    CREMA = "#e19f41"
    SKYBLUE = "#cbe4ea"

class route(Enum):
    SETUP = "setup"
    SMART_HOME = "SmartHome"
    MERCHANDISING = "Merchandising"
    PERSONAL = "personal"

class TamañosProductos(Enum):
    WIDTH_IMAGEN="25em"
    HEIGHT_IMAGEN="10em"
    BORDES_RADIUS_IMAGEN="5px 15px "
    BORDER_IMAGEN="4px solid #555"

    BOX_SHADOW="sm"
    SIZE="sm"
    PADDING=3,
    HEIGHT="22em",
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