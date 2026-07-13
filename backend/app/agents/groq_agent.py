import os
from pathlib import Path
from dotenv import load_dotenv
from groq import Groq

# Load backend/.env
env_path = Path(__file__).resolve().parents[2] / ".env"
load_dotenv(dotenv_path=env_path)

api_key = os.getenv("GROQ_API_KEY")

if not api_key:
    raise ValueError("GROQ_API_KEY not found in .env")

client = Groq(api_key=api_key)


def generate_report(topic: str, content: str):

    prompt = f"""
You are an expert AI Research Assistant.

Create a detailed research report on the given topic.

Topic:
{topic}

Reference Content:
{content}

Write the report using the following headings:

# Introduction

# History

# Applications

# Advantages

# Disadvantages

# Future Scope

# Conclusion

Rules:
- Write in professional English.
- Use only the reference content.
- Do not mention Tavily or Firecrawl.
- Return only the report.
"""

    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {
                "role": "user",
                "content": prompt,
            }
        ],
        temperature=0.3,
        max_tokens=1200,
    )

    return response.choices[0].message.content