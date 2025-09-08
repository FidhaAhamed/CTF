
# 🕹️ CTF Dashboard

This is a small **Capture The Flag (CTF)** web app built with **React (frontend)**, **FastAPI (backend)**, and **Supabase (database)**.
Players solve fun password/flag challenges and progress through a sequence of levels. Their submissions are stored in a database for tracking.

---

## 🚀 Features

* 🔑 Multi-level CTF (Theme : Odyssey of Time).
* 🖥️ Frontend checks each submitted flag with **SHA256 hash** before sending to backend.
* 📦 Backend verifies submissions and stores them in **Supabase**.
* 📊 Database logs contain:

  * `username` (set by player)
  * `challenge_name`
  * `code` (per-challenge short letter/character)
  * `timestamp`

---

## 🏗️ Tech Stack

* **Frontend:** React + Vite + TailwindCSS
* **Backend:** FastAPI + Uvicorn
* **Database:** Supabase (Postgres)

---

## 📂 Project Structure

```
frontend/
  src/
    pages/       # Challenge pages (Rat.jsx, Cat.jsx, etc.)
    components/  # Reusable components (ChallengePage.jsx)
    App.jsx      # Router setup

backend/
  main.py       # FastAPI app
  requirements.txt
```

---

## ⚡ Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/your-username/ctf-dashboard.git
cd ctf-dashboard
```

---

### 2. Setup the backend

```bash
cd backend
python -m venv venv
venv\Scripts\activate   # (Windows)
# OR
source venv/bin/activate  # (Mac/Linux)

pip install -r requirements.txt
```

Run the backend:

```bash
uvicorn main:app --reload
```

The API will be live at **[http://127.0.0.1:8000](http://127.0.0.1:8000)**

---

### 3. Setup the frontend

```bash
cd frontend
npm install
```

Create a `.env` file in `frontend/`:

```
VITE_API_URL=http://127.0.0.1:8000
```

Run the frontend:

```bash
npm run dev
```

The frontend will be live at **[http://127.0.0.1:5173](http://127.0.0.1:5173)**

---

### 4. Setup Supabase

1. Go to [Supabase](https://supabase.com/) and create a project.
2. Create a table `submissions` with columns:

   * `id` → `uuid` (Primary key)
   * `username` → `text`
   * `challenge_name` → `text`
   * `code` → `text`
   * `timestamp` → `timestamp with time zone` (default: `now()`)
3. Copy your **API keys** and **database URL** from Supabase dashboard into your `backend/.env`.

Example `.env` (backend):

```
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_KEY=your-service-role-key
```

---

## 🎮 How to Play

1. Open **[http://127.0.0.1:5173](http://127.0.0.1:5173)** in your browser.
2. Enter your username on the landing page.
3. Solve the first challenge (Rat) by guessing the password/flag.
4. Each challenge validates your answer client-side using SHA256 and then submits it to the backend.
5. Progress through challenges until you reach **Congrats page** 🎉.

---

## 🔒 Notes

* Each challenge has a hidden password/flag.
* Submissions are stored in Supabase for tracking (admins can view them).
* Players cannot skip levels if numeric routes are removed (only animal-name routes remain).

---

## 📜 License

MIT License. Free to use, modify, and share.

