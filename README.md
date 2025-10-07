# 🍔 Food Recipe App

A simple and interactive React-based food recipe search app that uses the [Spoonacular API](https://spoonacular.com/food-api) to fetch and display recipes with details such as ingredients, preparation time, and price per serving.

---

## 🚀 Features

- 🔍 Search any food item (e.g., pizza, pasta, salad)
- 🍽️ View recipe name, image, ingredients, and cooking instructions
- 🥦 See if the recipe is Vegetarian or Vegan
- ⏱️ Check preparation time and servings
- 💰 Display price per serving (formatted to 2 decimals)
- 📱 Responsive, simple UI with modular React components

---

## 🧠 Tech Stack

- **React.js** (Frontend framework)
- **CSS Modules** for styling
- **Spoonacular API** for recipe data
- **Vite** (for fast development and build)
- **JavaScript (ES6+)**

---

## 🏗️ Project Structure

```
FoodApp/
├── public/
├── src/
│   ├── components/
│   │   ├── Container.jsx
│   │   ├── FoodDetails.jsx
│   │   ├── FoodItem.jsx
│   │   ├── FoodList.jsx
│   │   ├── InnerContainer.jsx
│   │   ├── Item.jsx
│   │   ├── ItemList.jsx
│   │   ├── Nav.jsx
│   │   ├── Search.jsx
│   ├── css/
│   │   ├── container.module.css
│   │   ├── foodDetails.module.css
│   │   ├── foodItem.module.css
│   │   ├── innerContainer.module.css
│   │   ├── item.module.css
│   │   ├── nav.module.css
│   │   ├── search.module.css
│   ├── App.css
│   ├── App.jsx
│   ├── main.jsx
├── index.html
├── package.json
├── vite.config.js
```

---

## ⚙️ Technologies Used

- **React JS (with Vite)**
- **Modular CSS** for scoped styling
- **Node.js & npm**
- **Vite** for fast development and build

---

## 🚀 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/sudasun007/FoodApp.git
cd FoodApp
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the app

```bash
npm run dev
```

### 4. Build for production

```bash
npm run build
```

---

## 🧩 Components Overview

| Component            | Description                                             |
| -------------------- | ------------------------------------------------------- |
| `Container.jsx`      | Main wrapper for the food app layout                    |
| `FoodDetails.jsx`    | Displays detailed information about selected food items |
| `FoodItem.jsx`       | Represents individual food item cards                   |
| `FoodList.jsx`       | Lists all available food items                          |
| `InnerContainer.jsx` | Nested layout wrapper for specific sections             |
| `Item.jsx`           | Generic reusable item component                         |
| `ItemList.jsx`       | Displays multiple items (used for categories or menu)   |
| `Nav.jsx`            | Top navigation bar with links or filters                |
| `Search.jsx`         | Search input component for filtering food items         |

---

## 🎨 Styling

All styles are written using **CSS Modules** (e.g., `item.module.css`), allowing component-level style encapsulation.


This project is open source and available under the [MIT License](LICENSE).
