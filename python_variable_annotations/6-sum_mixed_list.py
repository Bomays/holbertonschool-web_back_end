#!/usr/bin/env python3
"""Module that make the sum of a list of floats and integers """

from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """Function that returns the sum of floats and integers as a float"""
    return sum(mxd_lst)
