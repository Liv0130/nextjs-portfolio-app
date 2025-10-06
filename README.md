# Olivia Witt — Portfolio

A modern, animated developer portfolio built with **Next.js**, designed and developed by Olivia Witt.  
It showcases my work, side projects, and study records with smooth transitions and strong focus on UI/UX.

---

## 🚀 Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion / custom CSS keyframes
- **Deployment:** Vercel
- **Design:** Figma (custom design by me)
- **Font:** Tenor and Montserrat

---

## 🖥️ Features

- Dynamic page reveal animations  
- Responsive layout for all devices  
- Sticky and animated navigation  
- “About Me”, “Work”, “Archive”, and “Contact” sections  
- (planning) Analytics integration via Azure Cosmos DB

---

## 📸 Preview

https://www.figma.com/design/hafA2MIj5mBvx421Qg6gf5/Yeonju-Oh--Olivia--s-team-library?node-id=0-1&t=A69ru41b1UenlMlo-1

---

## 🧩 Folder Structure

```
project-root/
├── app/ # App Router pages
│ ├── api/ # API routes (backend logic)
│ ├── layout.tsx # Global layout
│ └── page.tsx # Home page
├── components/ # Reusable UI components
├── public/ # Static assets (images, fonts)
├── styles/ # Global CSS & Tailwind config
└── README.md
```


---

## ⚙️ Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/Liv0130/nextjs-portfolio-app.git
cd nextjs-portfolio-app
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```

### 4. Build for production
```bash
npm run build
npm start
```

---

## ☁️ Deployment

This project is optimized for Vercel.
Each push to the main branch triggers an automatic redeploy.

### To add analytics later:

1. Create an Azure Cosmos DB (NoSQL)
2. Add env vars in Vercel
3. Push /api/track backend route

---

## 👩🏻‍💻 Author

Olivia Witt
Frontend Developer based in Malmö, Sweden

🌐 [Portfolio Website](https://nextjs-portfolio-app-kappa.vercel.app/)  
💼 [LinkedIn](https://linkedin.com/in/oliviawittyj)  
🐙 [GitHub](https://github.com/Liv0130)



