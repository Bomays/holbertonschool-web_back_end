#!/usr/bin/env python3
"""
Python all topics (of a school doc name based) changing
mongo module with pymongo
"""


def update_topics(mongo_collection, name, topics):
    """
    Function that changes all topics of a school doc based on the name
    """
    mongo_collection.school.update_many(
        {"name": name},
        {"$set": {"topics": topics}}
        )
