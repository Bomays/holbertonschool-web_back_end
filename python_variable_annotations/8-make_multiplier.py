#!/usr/bin/env python3
"""
Module with a type-annotated function make_multiplier
that takes a float multiplier as argument and returns a
function that multiplies a float by multiplier
"""


from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    Function that takes a float multiplier
    as argument and returns a function
    """

    def function(n: float) -> float:
        """Function that multiplies a float by multiplier"""
        return float(n * multiplier)

    return function
