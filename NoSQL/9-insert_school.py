#!/usr/bin/env python3
"""Python inserting new doc mongo module with pymongo"""


def insert_school(mongo_collection, **kwargs):
    """
    Inserting new doc function in a mongo collection with kawargs
    Returns new doc id
    """
    new_doc = mongo_collection.insert_one(kwargs )
    return new_doc.inserted_id
