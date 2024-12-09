#!/usr/bin/env python3
"""
Module async Generator that handles a coroutine
"""
import asyncio
import random
from typing import Generator


async def async_generator() -> Generator[float, None, None]:
    """
    coroutines that each time
    asynchronously wait 1 second, then yield a random
    number between 0 and 10 using random module from asyncio, 10 times
    """
    for i in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
