import os
from pathlib import Path
from dotenv import load_dotenv
from firecrawl import FirecrawlApp

# Load backend/.env
env_path = Path(__file__).resolve().parents[2] / ".env"
load_dotenv(dotenv_path=env_path)

api_key = os.getenv("FIRECRAWL_API_KEY")

app = FirecrawlApp(api_key=api_key)


def scrape_url(url: str):
    try:
        result = app.scrape_url(
            url=url,
            formats=["markdown"],
        )

        return result

    except Exception as e:
        return {
            "markdown": f"Error: {str(e)}"
        }