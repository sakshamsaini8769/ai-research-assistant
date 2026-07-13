import json
from pathlib import Path
from datetime import datetime

from app.agents.tavily_agent import search_topic
from app.agents.firecrawl_agent import scrape_url
from app.agents.groq_agent import generate_report


# history.json path
HISTORY_FILE = Path(__file__).resolve().parents[2] / "history.json"


def save_history(topic: str, report: str):
    print("Saving history...")
    print("File Path:", HISTORY_FILE)

    if HISTORY_FILE.exists():
        with open(HISTORY_FILE, "r", encoding="utf-8") as f:
            try:
                history = json.load(f)
            except json.JSONDecodeError:
                history = []
    else:
        history = []

    history.insert(
        0,
        {
            "topic": topic,
            "report": report,
            "date": datetime.now().strftime("%d-%m-%Y %I:%M %p"),
        },
    )

    with open(HISTORY_FILE, "w", encoding="utf-8") as f:
        json.dump(history, f, indent=4, ensure_ascii=False)

    print("History Saved Successfully")


def generate_research(topic: str):

    tavily_result = search_topic(topic)

    item = tavily_result["results"][0]

    scraped = scrape_url(item["url"])

    if isinstance(scraped, dict):
        markdown = scraped.get("markdown", "")
        if not markdown:
            markdown = str(scraped)
    else:
        markdown = str(scraped)

    combined_content = markdown[:8000]

    report = generate_report(topic, combined_content)

    # Save report to history
    save_history(topic, report)

    return {
        "report": report
    }