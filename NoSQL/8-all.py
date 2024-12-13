#!/usr/bin/env python3
"""Python all documents listing mongo module with pymongo"""


def list_all(mongo_collection):
    """
    Listing function for all documents
    Returns empty list if no document is found in colletion
    """
    docs = list(mongo_collection.find())
    if docs:
        return docs
    else:
        return []
