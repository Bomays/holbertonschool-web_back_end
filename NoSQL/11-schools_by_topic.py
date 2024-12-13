#!/usr/bin/env python3
"""
Python specific topic (of a school doc name based) retrieving
mongo module with pymongo
"""


def schools_by_topic(mongo_collection, topic):
    """
    Function that returns the list of school having a specific topic
    """
    find = mongo_collection.find({"topics": topic})
    return find
