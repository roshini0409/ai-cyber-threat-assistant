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
