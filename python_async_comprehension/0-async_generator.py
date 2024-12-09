#!/usr/bin/env python3
"""
Module async Generator that handles a coroutine
with an async comprehesion
"""
import asyncio
import random
from typing import AsyncGenerator, List


async def async_generator() -> AsyncGenerator[float, None]:
    """
    coroutines that each time
    asynchronously wait 1 second, then yield a random
    number between 0 and 10 using random module from asyncio
    """
    for i in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)


async def async_comprehension() -> List[float]:
    """ Async comprehension that generates 10 random floats using
        async_generator()"""
    return [value async for value in async_generator()]
