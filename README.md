# WBCSD Assignment

This project contains both the backend (FastAPI) and the frontend (React built with Vite) in a single repository. This README explains how to run the application using different approaches:

- **Using Docker Compose** (Recommended)
- **Using Individual Docker Containers**
- **Manually Running Both Applications**

---

## 1. Prerequisites

- **Docker**: Make sure you have Docker installed. [Download Docker](https://www.docker.com/get-started)
- **Docker Compose**: Usually included with Docker Desktop.
- **Node.js & npm**: Required for running the frontend manually.
- **Python**: Required for running the backend manually.
- **frontend/.env**: A .env file containing the API URL for the backend (configured to be"http://localhost:8000" in local development).
---

## 2. Running with Docker Compose

This is the easiest way to run the entire application.

### **Steps:**

1. **Navigate to the root project directory:**

```bash
cd pcf_manager
```

2. **Build and run the containers:**

```bash
docker compose up --build
```

3. **Access the Applications:**

- **Backend:** `http://localhost:8000`
- **Frontend:** `http://localhost:5173`

4. **To stop the containers:**

```bash
docker compose down
```

---

## 3. Running Each Docker Container Individually

You can also build and run the backend and frontend separately.

### **Backend**

1. **Navigate to the root directory:**

```bash
cd pcf_manager
```

2. **Build the Docker image:**

```bash
docker build -f Dockerfile.backend -t backend .
```

3. **Run the container:**

```bash
docker run -p 8000:8000 backend
```

### **Frontend**

1. **Build the Docker image:**

```bash
docker build -f Dockerfile.frontend -t frontend .
```

2. **Run the container:**

```bash
docker run -p 5173:5173 frontend
```

---

## 4. Running the Applications Manually (Without Docker)

If you prefer to run the apps directly on your machine, follow these steps.

### **Backend**

1. **Navigate to the backend folder:**

```bash
cd backend
```

2. **Create a virtual environment and activate it:**

Make sure to create and activate a virtual environment before installing dependencies

```bash
python3 -m venv venv
source venv/bin/activate
```

3. **Install the dependencies:**

```bash
pip install -r requirements.txt
```

4. **Run the FastAPI server:**

```bash
uvicorn main:app --host 0.0.0.0 --port 8000
```

### **Frontend**

1. **Navigate to the frontend folder:**

```bash
cd frontend
```

2. **Install dependencies:**

```bash
npm install
```

3. **Run the Vite development server:**

```bash
npm run dev
```

4. **Open the application:**

- **Backend:** `http://localhost:8000`
- **Frontend:** `http://localhost:5173`

---

## 5. Troubleshooting

- **Port Conflicts:** Make sure ports 8000 and 5173 are not in use.
- **Docker Issues:** Run `docker system prune` to clean up unused images and containers if needed.
- **Missing Dependencies:** Double-check `requirements.txt` and `package.json` for missing packages.

---
