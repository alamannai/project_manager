from fastapi import FastAPI, HTTPException

from model import Project

from database import (
    fetch_one_project,
    fetch_all_projects,
    create_project,
    update_project,
    remove_project,
)

# an HTTP-specific exception class  to generate exception information

from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def read_root():
    return {"Hello": "World"}

@app.get("/api/projects/")
async def get_project():
    response = await fetch_all_projects()
    return response

@app.get("/api/projects/{title}", response_model=Project)
async def get_project_by_title(title):
    response = await fetch_one_project(title)
    if response:
        return response
    raise HTTPException(404, f"There is no project with the title {title}")

@app.post("/api/projects/", response_model=Project)
async def post_project(project: Project):
    response = await create_project(project.dict())
    if response:
        return response
    raise HTTPException(400, "Something went wrong")

@app.put("/api/projects/{title}/", response_model=Project)
async def put_project(title: str, desc: str):
    response = await update_project(title, desc)
    if response:
        return response
    raise HTTPException(404, f"There is no project with the title {title}")

@app.delete("/api/projects/{title}")
async def delete_project(title):
    response = await remove_project(title)
    if response:
        return "Successfully deleted project"
    raise HTTPException(404, f"There is no project with the title {title}")