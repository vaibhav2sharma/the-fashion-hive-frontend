# 🛍️ Fashion Hive

Link: https://the-fashion-hive-frontend.vercel.app/

**Fashion Hive** is a modern e-commerce platform built with **React** for the frontend and **Strapi CMS** for backend content management. It provides a smooth user shopping experience with real-time product updates and a dynamic admin dashboard for managing inventory.

---

## 🔧 Tech Stack

- 💻 **Frontend**: React.js, Axios, React Router
- 🔙 **Backend**: Strapi (Headless CMS)
- 🎨 **UI**: Custom CSS / Tailwind / Bootstrap (optional)
- 🔐 Authentication: JWT (via Strapi)
- 📦 Deployment: Netlify (Frontend), Render/Heroku (Strapi Backend)

---

## ✨ Features

- 🧾 Product listing with categories and filters
- 🛒 Shopping cart with add/remove/update quantity
- 👤 User authentication & registration
- 🧑‍💼 Admin panel to manage products, users, and orders
- 💳 Order placement flow with dummy checkout
- 📸 Upload images for products via Strapi

---

## 🚀 How to Run Locally

```bash
# Clone the repo
git clone https://github.com/yourusername/fashion-hive.git
cd fashion-hive

# Install frontend dependencies
cd client
npm install
npm start

# Install backend dependencies (Strapi)
cd ../backend
npm install
npm run develop
