# SaaS Dashboard - Juspay UI Developer Assignment

This project is a pixel-perfect implementation of a modern SaaS dashboard, built as part of the UI developer assignment for Juspay. The focus was on creating a responsive, interactive, and high-performance user interface using a modern tech stack.

---

### Table of Contents

1.  [Live Demo & Video Walkthrough](#-live-demo--video-walkthrough)
2.  [Features](#-features)
3.  [Tech Stack & Architectural Decisions](#️-tech-stack--architectural-decisions)
4.  [Getting Started](#-getting-started)
5.  [Challenges & Solutions](#-challenges--solutions)
6.  [Accessibility Features](#-accessibility-features)
7.  [Known Limitations & Future Improvements](#-known-limitations--future-improvements)

---

### **▶️ Live Demo & Video Walkthrough**

- **Live Application:** [https://juspay-saas-dashboard-assignment.vercel.app/]
- **Video Walkthrough:** `[Recording at the moment]`

---

### **✨ Features**

- **Pixel-Perfect UI**: Meticulously crafted to match the Figma designs, including layout, typography, and color palette.
- **Responsive Design**: Fully responsive layout that adapts gracefully to desktop, tablet, and mobile devices.
- **Light & Dark Mode**: Seamless theme switching with persistence.
- **Interactive Charts**: Custom-styled charts for data visualization with interactive tooltips.
- **Advanced Data Table**: A fully-featured table with client-side:
  - Searching (Global Filter)
  - Sorting
  - Filtering (Multi-select)
  - Pagination
- **Meaningful Microinteractions**: Subtle, spring-based animations on cards and navigation elements to enhance the user experience.
- **Skeleton Loading States**: Elegant skeleton loaders provide a better perceived performance while data is being simulated.
- **Accessibility**: Keyboard navigation and accessible components are implemented throughout the application.

---

### **🛠️ Tech Stack & Architectural Decisions**

This project was built with a focus on modern, efficient, and scalable technologies.

| Category        | Technology/Library             | Justification                                                                                                                                                                                                                 |
| :-------------- | :----------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Framework**   | `Next.js (App Router)`         | Chosen for its robust feature set, including file-based routing, server components, and out-of-the-box performance optimizations like automatic code-splitting and image optimization.                                        |
| **Language**    | `TypeScript`                   | To ensure type safety, improve code quality, and enable better developer tooling.                                                                                                                                             |
| **UI**          | `Tailwind CSS + shadcn/ui`     | This combination was chosen over libraries like MUI to achieve true pixel-perfect control. `shadcn/ui` provides unstyled, accessible components, allowing for rapid development without fighting pre-existing style opinions. |
| **Animation**   | `Framer Motion`                | Selected to implement smooth, jank-free animations and microinteractions that enhance the user experience, as required by the judging criteria.                                                                               |
| **Data Tables** | `TanStack Table (React Table)` | A headless utility that provides powerful, out-of-the-box state management for complex table features like sorting, filtering, and pagination, separating logic from presentation.                                            |
| **State**       | `React Context API`            | Used for managing global state like the current theme and user information. A heavier library like Redux was not used as the application's state complexity did not warrant it.                                               |

---

### **🚀 Getting Started**

To run this project locally, follow these steps:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/Ishvendra/juspay-saas-dashboard-assignment.git
    cd juspay-saas-dashboard-assignment
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Run the development server:**

    ```bash
    npm run dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

---

### 📂 Folder Structure

The project follows a feature-based folder structure to keep the code organized, scalable, and easy to navigate. Key directories include:

```
src/
├── app/                # Next.js App Router: all pages and layouts
│   ├── (dashboard)/      # Route group for the main dashboard layout
│   │   ├── (ecommerce)/  # Nested group for e-commerce pages
│   │   │   ├── analytics/
│   │   │   └── orders/
│   │   └── layout.tsx    # Shared layout for the dashboard
│   ├── layout.tsx        # Root layout
│   └── not-found.tsx     # Custom 404 page
├── assets/             # Static assets like images and custom SVG icons
├── components/         # All React components, organized by function
│   ├── dashboard/      # High-level components specific to the dashboard (e.g., charts)
│   ├── layout/         # General layout components (Sidebar, Topbar)
│   ├── providers/      # React Context providers (Theme, User, Breadcrumb)
│   └── ui/             # Reusable, low-level UI components from shadcn/ui
├── config/             # Project-wide configuration files (e.g., breadcrumbs)
├── hooks/              # Custom React hooks (e.g., useDebounce, useScrolled)
├── lib/                # Utility functions, mock data, and nav structure
└── types/              # TypeScript type definitions
```

---

### 🎨 Theme & Styling

The application's theme was built from the ground up to match the provided Figma design specifications. All colors for both light and dark mode are defined as CSS variables in `src/app/globals.css` and mapped to the `shadcn/ui` component theme, ensuring consistency across the entire UI.

<details>
<summary>Click to view the full <strong>globals.css</strong> theme file</summary>

```css
@import 'tw-animate-css';
@import 'tailwindcss';

@layer base {
  :root {
    --radius: 0.625rem;

    /* Black Scale */
    --black-100: #1c1c1c;
    --black-80: #494949;
    --black-40: #a4a4a4;
    --black-20: #d2d2d2;
    --black-10: #e8e8e8;
    --black-5: #f3f3f3;

    /* Primary Scale */
    --primary-brand: #1c1c1c;
    --primary-blue: #e3f5ff;
    --primary-purple: #e5ecf6;
    --primary-purple-50: #f2f5fa;
    --primary-light: #f7f9fb;

    /* Secondary Scale */
    --secondary-purple-b: #c6c7f8;
    --secondary-red: #ff4747;

    /* Mapping to shadcn/ui variables for Light Mode */
    --background: #ffffff;
    --foreground: var(--black-100);
    --card: #ffffff;
    --card-foreground: var(--black-100);
    --popover: #ffffff;
    --popover-foreground: var(--black-100);
    --primary: var(--primary-brand);
    --primary-foreground: #ffffff;
    --secondary: var(--primary-light);
    --secondary-foreground: var(--black-100);
    --muted: var(--black-5);
    --muted-foreground: var(--black-40);
    --accent: var(--primary-purple-50);
    --accent-foreground: var(--black-100);
    --destructive: var(--secondary-red);
    --border: var(--black-10);
    --input: var(--black-10);
    --ring: var(--black-80);
    --card-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }

  .dark {
    /* Mapping to shadcn/ui variables for Dark Mode */
    --background: #1c1c1c;
    --foreground: #f3f3f3;
    --primary: var(--secondary-purple-b);
    --primary-foreground: #1c1c1c;
    --secondary: #494949;
    --secondary-foreground: #f3f3f3;
    --muted: #494949;
    --muted-foreground: #a4a4a4;
    --accent: #494949;
    --accent-foreground: #f3f3f3;
    --destructive: var(--secondary-red);
    --border: #494949;
    --input: #494949;
    --ring: #a4a4a4;
    --card-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  }

  body {
    @apply bg-background text-foreground;
  }

  * {
    @apply border-border;
  }
}
```

</details>

---

### **♿ Accessibility Features**

- **Keyboard Navigation**: All interactive elements are fully navigable using the `Tab` key.
- **Keyboard Shortcuts**:
  - Toggle Left Sidebar: `Ctrl + B`
  - Toggle Right Sidebar: `Alt + B`
  - Focus Search Bar: `Ctrl + /`

---

### **🧠 Challenges & Solutions**

During development, several challenges were addressed with specific solutions:

- **Challenge**: The custom SVG icons provided in the Figma file were not directly importable as React components in Next.js.

  - **Solution**: I created a manual component for each of the 13 icons, wrapping the SVG code in a React component. This bypassed build tool complexity and created a stable, explicit icon system.

- **Challenge**: Implementing a breadcrumb system that was decoupled from the URL structure (due to the use of clean URLs via Next.js Route Groups).
  - **Solution**: I initially tried a URL-based approach, but quickly identified its limitations. I pivoted to a more more direct, config-driven approach suitable for the project's scope. I created a central configuration file (breadcrumb-config.ts) to map URL paths to their specific breadcrumb trails. A dedicated `BreadcrumbNav` component then uses the current pathname to look up and dynamically render the correct breadcrumbs.

---

### **📝 Known Limitations & Future Improvements**

- **Right Sidebar Styling**: A minor discrepancy exists between the design (`w-17rem`) and implementation (`w-18rem`) to prevent text wrapping. This could be resolved with more granular typography adjustments.
- **Geographical Chart**: For the "Revenue by Location" chart, a static image was used for brevity. A future implementation would use a dedicated library like D3.js or Leaflet to create a fully interactive choropleth map.

Thank you for the opportunity to work on this assignment!
