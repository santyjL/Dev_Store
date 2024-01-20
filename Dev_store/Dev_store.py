"""Welcome to Reflex! This file outlines the steps to create a basic app."""

import reflex as rx

from Dev_store.components.styles import tamaños
from Dev_store.pages.index import index
from Dev_store.pages.libros import biblioteca
from Dev_store.pages.merchandising import merchandising
from Dev_store.pages.setup import setup
from Dev_store.pages.smarthome import smart_home

#
app = rx.App()
app.compile()
