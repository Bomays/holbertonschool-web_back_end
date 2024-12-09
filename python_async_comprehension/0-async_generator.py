#!/usr/bin/env python3
"""
Module that handles a coroutine with a prototype
with no arguments.
"""
import asyncio
import random


async def async_generator():
    """
    async Function that executes loops 10 times, each time
    asynchronously wait 1 second, then yield a random
    number between 0 and 10 using random module from asyncio
    """
    for _ in range(10):
        await asyncio.sleep(delay=1)
        yield random.uniform(0, 10)
