# 🌦️ Weather App (React + Redux)

A modern weather application built with **React, Redux Toolkit, and Material UI**, supporting multi-language (Arabic 🇸🇦 / English 🇺🇸) and real-time weather data.

---

## 📌 Features

* 🌡️ Real-time weather data using API
* 🌍 Multi-language support (Arabic / English)
* 🔄 Language toggle with RTL/LTR support
* 📅 Live formatted date using Moment.js
* ⚡ Global state management with Redux Toolkit
* ⏳ Loading indicator while fetching data
* 🎨 Clean UI using Material UI (MUI)

---

## 🛠️ Tech Stack

* ⚛️ React (Vite)
* 🧠 Redux Toolkit
* 🌐 Axios (API requests)
* 🌍 i18next (translations)
* 🕒 Moment.js (date formatting)
* 🎨 Material UI (MUI)
* 💨 TailwindCSS (base styling)

---

## 📂 Project Structure

```
src/
│
├── components/
│   └── WeatherContainer.jsx
│
├── providers/
│   └── Theme.jsx
│
├── store.js
├── weatherApiSlice.js
├── i18n.js
├── App.jsx
└── main.jsx
```

---

## ⚙️ Installation & Setup

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/weather-app.git
cd weather-app
```

Install dependencies:

```bash
npm install
```

Create a `.env` file in the root directory:

```env
VITE_WEATHER_API_KEY=YOUR_API_URL
```

Run the app locally:

```bash
npm run dev
```

---

## 🌐 API Usage

This app uses a weather API (e.g. OpenWeatherMap).

Example API format:

```bash
https://api.openweathermap.org/data/2.5/weather?q=Riyadh&appid=YOUR_API_KEY&units=metric
```

---

## 🌍 Internationalization (i18n)

* Arabic 🇸🇦 (RTL)
* English 🇺🇸 (LTR)

Language can be toggled dynamically from the UI.

---

## 🧠 What I Learned

* Managing async API calls with Redux Toolkit
* Handling loading states and UI feedback
* Implementing multi-language apps (i18next)
* Supporting RTL and LTR layouts dynamically
* Structuring scalable React applications

---

## ⚠️ Important Notes

* Make sure to add your API key in `.env`
* Do NOT upload your `.env` file to GitHub

---
---
