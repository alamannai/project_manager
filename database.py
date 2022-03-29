import motor.motor_asyncio as ma
from model import Project


client = ma.AsyncIOMotorClient("mongodb://localhost:27017/")
database = client.ProjectList
collection = database.project

async def fetch_one_project(title):
    document = await collection.find_one({"title": title})
    return document

async def fetch_all_projects():
    projects = []
    cursor = collection.find({})
    async for document in cursor:
        projects.append(Project(**document))
    return projects

async def create_project(project):
    document = project
    result = await collection.insert_one(document)
    return document


async def update_project(title, desc):
    await collection.update_one({"title": title}, {"$set": {"description": desc}})
    document = await collection.find_one({"title": title})
    return document

async def remove_project(title):
    await collection.delete_one({"title": title})
    return True