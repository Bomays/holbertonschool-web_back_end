#!/usr/bin/env python3
"""Module that returns a string and a square of an int or a float  """


from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Function that returns a string and a square of an int or a float"""
    return (k, v**2)
