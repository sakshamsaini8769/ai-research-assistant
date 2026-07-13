import json
from pathlib import Path

from fastapi import APIRouter, HTTPException
from app.models.research_model import ResearchRequest
from app.services.research_service import generate_research

router = APIRouter()

# history.json path
HISTORY_FILE = Path(__file__).resolve().parents[2] / "history.json"


@router.get("/")
def home():
    return {"message": "Backend Working 🚀"}


@router.post("/research")
def generate_report(request: ResearchRequest):
    return generate_research(request.topic)


@router.get("/history")
def get_history():

    if HISTORY_FILE.exists():
        with open(HISTORY_FILE, "r", encoding="utf-8") as f:
            try:
                history = json.load(f)
            except json.JSONDecodeError:
                history = []
    else:
        history = []

    return {"history": history}


@router.delete("/history/{index}")
def delete_history(index: int):

    if not HISTORY_FILE.exists():
        raise HTTPException(status_code=404, detail="History file not found.")

    with open(HISTORY_FILE, "r", encoding="utf-8") as f:
        try:
            history = json.load(f)
        except json.JSONDecodeError:
            history = []

    if index < 0 or index >= len(history):
        raise HTTPException(status_code=404, detail="History item not found.")

    history.pop(index)

    with open(HISTORY_FILE, "w", encoding="utf-8") as f:
        json.dump(history, f, indent=4, ensure_ascii=False)

    return {
        "message": "History deleted successfully."
    }