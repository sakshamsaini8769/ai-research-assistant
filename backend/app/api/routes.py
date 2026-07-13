import json
from pathlib import Path

from fastapi import APIRouter
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

    return {
        "history": history
    }