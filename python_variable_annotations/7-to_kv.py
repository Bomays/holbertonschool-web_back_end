#!/usr/bin/env python3
"""Module that make the sum of a list of floats and integers """


def to_kv(k: str, v: int | float) -> tuple[str, float]:
    """Function that returns the sum of floats and integers as a float"""
    return (k, v**2)
