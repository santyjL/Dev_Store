from enum import Enum

import reflex as rx


class PaletaDeColores (Enum):
    AZUL_OSCURO = "#010d23"
    AZUL_INTERMEDIO = "#03223f"
    CELESTE = "#038bbb"
    GRIS = "#464255"
    FONDO_GRADIENTE = "linear-gradient(271.68deg, #F26008 0.75%, #FF3000 88.52%)"

class route(Enum):
    Dev_Store="Dev_Store"
    SETUP = "setup"
    SMART_HOME = "SmartHome"
    MERCHANDISING = "Merchandising"
    BIBLIOTECA = "biblioteca"

class TamañosProductos(Enum):
    WIDTH_IMAGEN="29em"
    HEIGHT_IMAGEN="14em"
    BORDES_RADIUS_IMAGEN="5px 15px "
    BORDER_IMAGEN="4px solid #555"

    BOX_SHADOW="sm"
    SIZE="sm"
    PADDING=3,
    HEIGHT="30em",
    WIDTH="30em",
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
    MAX_HEIGHT="600PX"