# PortfolioSite

A modern, responsive personal portfolio website built with **Next.js, React, TypeScript, and Tailwind CSS**.

The portfolio showcases my professional experience, technical skills, projects, and provides a way for visitors and recruiters to get in touch.

## 🚀 Tech Stack

### Frontend

* Next.js
* React
* TypeScript
* Tailwind CSS
* HTML5
* CSS3

### Planned Backend

* Java
* Spring Boot
* REST APIs
* PostgreSQL

> Backend integration will be added in a later phase. The current version focuses on the frontend portfolio experience.

---

## ✨ Features

### Current

* Responsive portfolio layout
* Hero section
* About section
* Technical skills
* Professional experience
* Featured projects
* Project details
* Social links
* Resume section
* Contact form UI
* Responsive navigation

### Planned

* Spring Boot contact API
* PostgreSQL contact message storage
* Admin authentication
* Admin message management
* Contact message status management
* Portfolio analytics
* Production deployment

---

## 📁 Project Structure

```text
PortfolioSite/
│
├── frontend/
│   ├── public/
│   │   ├── images/
│   │   └── resume.pdf
│   │
│   ├── src/
│   │   ├── app/
│   │   ├── components/
│   │   ├── data/
│   │   ├── types/
│   │   └── lib/
│   │
│   ├── package.json
│   └── ...
│
└── README.md
```

---

## 🧩 Portfolio Content

For the initial version, portfolio content is maintained on the frontend using TypeScript data files.

```text
src/data/
├── profile.ts
├── projects.ts
├── experience.ts
├── skills.ts
└── socialLinks.ts
```

This keeps the portfolio simple and easy to maintain without requiring APIs for static content.

---

## 📌 Project Sections

The portfolio will contain:

* **Home** – Introduction and developer profile
* **About** – Professional summary
* **Skills** – Technical skills and technologies
* **Experience** – Professional experience
* **Projects** – Featured and personal projects
* **Resume** – Downloadable resume
* **Contact** – Contact form
* **Social Links** – GitHub, LinkedIn and other profiles

---

## 🛠️ Getting Started

### Prerequisites

Make sure you have installed:

* Node.js
* npm
* Git

### Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/PortfolioSite.git
```

### Navigate to the frontend

```bash
cd PortfolioSite/frontend
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## 🔧 Available Scripts

### Development

```bash
npm run dev
```

Starts the Next.js development server.

### Production Build

```bash
npm run build
```

Creates an optimized production build.

### Start Production Server

```bash
npm run start
```

Starts the production server.

### Lint

```bash
npm run lint
```

Runs ESLint checks.

---

## 🌱 Development Approach

The project is being developed incrementally.

### Phase 1 — Frontend

* [x] Create Next.js project
* [ ] Setup project structure
* [ ] Create navigation
* [ ] Build hero section
* [ ] Build about section
* [ ] Add skills
* [ ] Add experience
* [ ] Add projects
* [ ] Add project details
* [ ] Add contact UI
* [ ] Make responsive
* [ ] Add animations
* [ ] Optimize SEO

### Phase 2 — Backend

* [ ] Create Spring Boot application
* [ ] Create contact API
* [ ] Add validation
* [ ] Add PostgreSQL
* [ ] Store contact messages
* [ ] Add error handling
* [ ] Connect frontend with backend

### Phase 3 — Admin

* [ ] Admin login
* [ ] JWT authentication
* [ ] Admin dashboard
* [ ] View contact messages
* [ ] Update message status
* [ ] Delete messages

### Phase 4 — Deployment

* [ ] Deploy frontend
* [ ] Deploy backend
* [ ] Deploy PostgreSQL database
* [ ] Configure environment variables
* [ ] Configure CORS
* [ ] Connect custom domain
* [ ] Production testing

---

## 📦 Deployment Plan

The planned production architecture is:

```text
                    PortfolioSite
                         │
                         ▼
                    Next.js
                         │
                      Vercel
                         │
                         │
                  Contact API
                         │
                         ▼
                   Spring Boot
                         │
                       Render
                         │
                         ▼
                    PostgreSQL
                       Neon
```

The initial frontend will be deployed independently. Backend and database services will be added later.

---

## 🎯 Goals

The main goals of this project are:

1. Build a modern and professional developer portfolio.
2. Showcase real-world frontend development skills.
3. Demonstrate React and Next.js best practices.
4. Demonstrate TypeScript usage.
5. Build a responsive and accessible user experience.
6. Gradually integrate a Spring Boot backend.
7. Demonstrate REST API and PostgreSQL integration.
8. Deploy the application using modern cloud platforms.

---

## 👨‍💻 Author

**Lokesh Jawale**

Front-End Developer

### Technologies

`React` · `Next.js` · `TypeScript` · `JavaScript` · `Vue.js` · `Redux` · `Spring Boot` · `PostgreSQL`

---

## 📄 License

This project is intended for personal portfolio and demonstration purposes.
