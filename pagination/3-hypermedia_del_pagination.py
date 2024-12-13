#!/usr/bin/env python3
"""
Deletion-resilient hypermedia pagination
"""

import csv
from typing import Dict, List, Optional
import math


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List]:
        """Dataset indexed by sorting position, starting at 0
        """
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            truncated_dataset = dataset[:1000]
            self.__indexed_dataset = {
                i: dataset[i] for i in range(len(dataset))
            }
        return self.__indexed_dataset

    def get_hyper_index(
            self, index: Optional[int] = None, page_size: int = 10
            ) -> Dict:
        """
        Function that retrieves data  in a deletion-resilient pagination
        Args:
            index(int): starting index, must not be out of range of
            indexed dataset
            page_size(int): num of items in a page, by default 10

        Raise:
            AssertionError:
                If the index provide is not an integer or is out of range

        Returns:
            Dict: a dictionnary with key/value pairs
            {index, next_index, page_size, data}
        """

        index_dataset = self.indexed_dataset()

        assert isinstance(index, int) and 0 <= index < len(index_dataset),\
            "index must be in in the indexed dataset range"

        data: list[list[str]] = []
        current_index = index

        while len(data) < page_size and current_index < len(index_dataset):
            if index_dataset.get(current_index) is not None:

                data.append(index_dataset[current_index])

            current_index += 1

        next_index: Optional[int] = current_index

        while next_index < len(index_dataset) and \
            index_dataset.get(next_index) is None:

            next_index += 1

        if next_index >= len(index_dataset):
            next_index = None

        return {
            "index": index,
            "next_index": next_index,
            "page_size": len(data),
            "data": data,
        }
