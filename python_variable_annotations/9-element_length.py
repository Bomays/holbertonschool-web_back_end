#!/usr/bin/env python3
"""
Duck typing an iterable object
> Annotate a function parameters and
return values with appropriate type
"""

from typing import Iterable, List, Tuple, Sequence


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """
    function that take either a list or an iterable of
    sequences and return a list of tuples where we find a sequence of
    the inputed list and its length
    """
    return [(i, len(i)) for i in lst]
