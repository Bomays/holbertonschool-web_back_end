#!/usr/bin/env python3
"""
Module that handles a coroutine with a prototype
with no arguments : async comprehesion
"""
import asyncio
import random
from typing import AsyncGenerator


async def async_generator() -> AsyncGenerator[float, int]:
    """
    async Generator function that executes loops 10 times, each time
    asynchronously wait 1 second, then yield a random
    number between 0 and 10 using random module from asyncio
    """
    for i in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
