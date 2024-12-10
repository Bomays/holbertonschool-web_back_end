#!/usr/bin/env python3
"""Pagination module with get_page() to retrieves a specific page
using inde_range() in a dataset() of a given CSV file"""

from typing import Tuple
import csv
from typing import List


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """
    function that returns a tuple of size two containing a start index and an
    end index corresponding to the range of indexes to return in a list for
    those particular pagination parameters.
    """
    start = (page - 1) * page_size
    end = page * page_size
    return (start, end)


class Server:
    """Server class to paginate a database of popular baby names."""

    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset"""
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """
        Function that get a page from the dataset

        Args:
            page(int): page num by default first one
            page_size(int): the page size with number of items
            by default 10
        Returns:
            List[] : a list of rows for the searched page or an empty list if
            idexes are out of range of the dataset
        """
        assert (
            isinstance(page, int) and page > 0
        ), "page must be an integer greater than 0"
        assert (
            isinstance(page_size, int) and page_size > 0
        ), "page_size must be an integer greater than 0"

        dataset = self.dataset()  # my csv file

        try:
            start, end = index_range(page, page_size)
            return dataset[start:end]
            # slicing method to get a new list of what we only need
        except IndexError:
            return []

    def get_hyper(self, page: int = 1, page_size: int = 10) -> dict:
        """
        function that returns informations of the pagination
        did with get_page() in a new dict with specifics
        key/value pairs
        """
        # defining all the value si need for my dict returned
        data = self.get_page(page, page_size)  # use get_page() to retrieve specific data
        page_size = len(data)  # length of the data i retrieved
        total_data = len(self.dataset())  # total length of my dataset

        if page_size == 0:
            total_pages = 0
        else:
            total_pages = (total_data + page_size - 1) // page_size

        next_page = page + 1 if page < total_pages else None
        prev_page = page - 1 if page > 1 else None

        return {
            "page_size": page_size,
            "page": page,
            "data": data,
            "next_page": next_page,
            "prev_page": prev_page,
            "total_pages": total_pages,
        }
