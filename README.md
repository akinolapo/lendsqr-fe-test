
# Lendsqr Frontend Engineer Assessment

This project is a submission for the **Lendsqr Frontend Engineering Assessment (V2)**. It is a responsive, pixel-perfect clone of parts of the Lendsqr Admin Console, built using modern frontend technologies including **Next.js**, **TypeScript**, and **SCSS Modules**.

The application includes key features such as a login page, user dashboard, user list with filtering and sorting, and user detail view—all styled according to the provided Figma design.

---

## 🚀 Live Demo

🔗 [https://akinolapo-lendsqr-fe-test-weld.vercel.app]

---

## 🖼️ Screens Implemented

- ✅ **Login Page**: Responsive authentication page with form validation and modern UI.
- ✅ **Dashboard Page**: Summary view with sidebar navigation and top bar.
- ✅ **User List Page**: Lists 500 users from a mock API. Supports filtering, and pagination.
- ✅ **User Details Page**: Displays detailed information for a user.

*Note:* The User List and User Detail pages were implemented together within the dashboard flow as described in the task.

---

## 🧱 Tech Stack

- **Next.js 14** – React framework with App Router and SSR support.
- **TypeScript** – Type-safe JavaScript development.
- **SCSS Modules** – Component-scoped styling.
- **Mock API** – User data mocked using a static `.json` file simulating 500+ records.
- **localStorage** – Used to persist selected user details.

---

## 📂 Project Structure

```
src/
├── app/
│   ├── page.tsx           // Landing page with links to key screens
│   ├── login/             // Login page and styles
│   ├── dashboard/         // Dashboard with user list and filter
│   └── user/              // (Optional) Separate user detail screen if needed
├── components/            // UI components (Sidebar, Topbar, StatCard)
├── public/                // Static assets and mocked data
│   └── data.json         // Contains 500 mock users
```

---

## 📐 Design Fidelity

- Layouts match the Figma designs pixel-for-pixel.
- Components and typography are styled consistently across all pages.
- Responsive behavior was thoroughly implemented using media queries.

---

## 🧪 Testing

- Functional testing of user flows such as login and user detail viewing.
- Positive and negative test scenarios were considered for login inputs.
- Although unit testing libraries (e.g. Jest, React Testing Library) are not integrated here due to time constraints, structure is designed to support testing.

---

## 📝 Architectural Decisions

- Used `Next.js App Router` with TypeScript for modern and scalable routing.
- Applied `SCSS Modules` for encapsulated and reusable styles.
- Leveraged mock JSON instead of external API mocking tools for simplicity and full control.

---

## 📸 Video Walkthrough

Loom video link (max 3 minutes, with explanation + face visible):

▶️ [https://www.loom.com/share/8d8c71156c75437c80841cb9862085cf]

---

## 📄 Submission

- ✅ Public GitHub Repo: [https://github.com/akinolapo/lendsqr-fe-test]
- ✅ Live Demo Deployed on Vercel [https://akinolapo-lendsqr-fe-test-weld.vercel.app]
- ✅ Document Submitted via Google Form
- ✅ Email sent to `careers@lendsqr.com`

---

## ✅ Highlights

- Fully responsive mobile-first UI
- Uses modern, scalable architecture
- Clear commit messages and logical git history
- High design fidelity
- Semantic HTML and accessibility-friendly structure

---

## ❌ Known Limitations / Future Improvements

- Currently uses static mock data. Would extend to dynamic API calls with pagination support.
- User authentication is not validated (form only).
- Unit testing is not fully implemented but planned in next iteration.

---

## 💡 Getting Started (Local Setup)

1. Clone the repo:
   ```bash
   git clone https://github.com/akinolapo/lendsqr-fe-test.git
   cd lendsqr-fe-test
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000] in your browser.

---

## 📧 Contact

For support regarding this assessment or to follow up, email: **akinolapo@gmail.com**

---

### ⚠️ Disclaimer

This project was built **solely for assessment purposes** and is not intended for production or commercial use. All assets and brand references belong to **Lendsqr**.
