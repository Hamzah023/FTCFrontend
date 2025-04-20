# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# 📄 .pages to PDF Converter (Frontend)

A modern, responsive React dashboard where users can drag-and-drop `.pages` files to convert them into `.pdf` format. This frontend communicates with a backend server (e.g., FastAPI) that performs the actual conversion using AppleScript and Apple Pages (macOS only), then returns a `.pdf` for preview and download.

---

## 🖥️ Features

- Drag-and-drop `.pages` file upload
- File is sent to backend via POST request
- Converted PDF is displayed in-browser
- User can preview and download the PDF
- Built with Vite + React + Tailwind CSS v4.0

---

## 📦 Tech Stack

- **Frontend:** React (Vite)
- **Styling:** Tailwind CSS v4.0 (no config required)
- **Backend API:** FastAPI / Flask / Django (not included here)
- **PDF Conversion:** AppleScript + Apple Pages (macOS only)

---

## ⚙️ Requirements

- Node.js ≥ 18
- macOS (backend conversion requires Apple Pages)
- A backend running on `http://localhost:8000/convert` that:
  - Accepts a `.pages` file via POST
  - Converts it using AppleScript
  - Returns a `.pdf` file

---

## 🛠️ Installation & Usage

```bash
# 1. Clone the repo
git clone https://github.com/yourusername/pages-to-pdf-frontend.git
cd pages-to-pdf-frontend

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
pages-to-pdf-frontend/
├── src/
│   ├── App.jsx         # Main component
│   ├── index.css       # Tailwind base styles
│   └── main.jsx        # Entry point
├── index.html
├── package.json
└── README.md

🧠 How It Works (App.jsx)
Handles file input using a hidden <input type="file" /> and drag-and-drop area.

Sends the file to the backend with Axios (POST /convert).

Backend returns a PDF as a binary response (Blob).

React converts the Blob to a URL and:

Displays it in an <embed />

Provides a download link via <a href="..." download>

Future Improvements
 Add toast notifications for errors

 Show upload progress/loading spinner

 Automatically delete old files on server

 Drag-and-drop multiple files

 Deploy with Docker or Vercel

Next Steps:
 - convert to typescript
 - add deeper components and designs