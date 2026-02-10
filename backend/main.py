from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from sentence_transformers import SentenceTransformer
import numpy as np

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load embedding model
model = SentenceTransformer("sentence-transformers/all-MiniLM-L6-v2")

# 🔹 Local vector store (final reliable approach)
documents = [
    "SQL injection attack on database",
    "Phishing email stealing credentials",
    "Distributed denial of service attack",
    "Malware infection through downloads",
    "Ransomware encrypting user files",
]

embeddings = model.encode(documents)


class Query(BaseModel):
    text: str


@app.get("/")
def root():
    return {"message": "AI Cyber Threat Assistant running"}


@app.post("/search")
def search(query: Query):
    query_emb = model.encode(query.text)

    # cosine similarity
    sims = np.dot(embeddings, query_emb) / (
        np.linalg.norm(embeddings, axis=1) * np.linalg.norm(query_emb)
    )

    # top 3 results
    top_idx = sims.argsort()[-3:][::-1]

    results = [[documents[i], float(sims[i])] for i in top_idx]

    return {"results": results}