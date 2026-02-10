# AI Cyber Threat Assistant

An end-to-end AI-powered cybersecurity assistant that performs semantic threat search using embeddings and a vector database.

## 🚀 Features
- Semantic search for cyber threats using sentence embeddings  
- FastAPI backend for AI inference  
- React + Tailwind frontend dashboard  
- Endee vector database running via Docker  
- Real-time similarity scoring of threats  

## 🏗️ Tech Stack
- Python, FastAPI  
- SentenceTransformers (MiniLM)  
- React, Vite, Tailwind CSS  
- Docker + Endee Vector DB  

## 🧠 System Design & Endee Usage

The AI Cyber Threat Assistant follows a **semantic search architecture**:

1. User enters a cybersecurity-related query in the React frontend.
2. The query is sent to a FastAPI backend service.
3. The backend converts the text into **vector embeddings** using a Sentence-Transformer model.
4. These embeddings are searched inside the **Endee Vector Database** running via Docker.
5. Endee returns the most **semantically similar cyber-threat records**.
6. Results are displayed in the frontend with similarity scores.

Endee is used as the **core vector storage and retrieval engine**, enabling
**AI-driven semantic search instead of keyword matching**, which is essential
for modern RAG and recommendation systems.

## ⚙️ How to Run

### 1. Start Endee DB
```bash
docker start endee-server
```

### 2. Run Backend
```bash
cd backend
uvicorn main:app --reload
```
http://127.0.0.1:8000/

### 3. Run Frontend
```bash
cd frontend
npm run dev
```
http://localhost:5173/
