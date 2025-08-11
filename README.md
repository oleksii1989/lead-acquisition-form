# Lead Acquisition Form

A React-based, TypeScript-powered multi-step form for collecting loan application leads.

## Key design decisions

- **Frontend:** Web app is built with React (Vite) for component-based architecture and easy integration with CMS platforms, as well as TypeScript for type safety.
- **Styling:** The form is styled using custom CSS for flexibility, as it is intended to be embedded into a CMS website and should match it's design.
- **Responsive Design:** The form is mobile-friendly and adapts to the website’s layout.
- **Testing:** Project includes automated tests (unit and integration) that are written using the Vitest framework.
- **Validation:** The form inputs for loan amount, email and phone number are validated using custom functions.
- **Form handling:** `react-hook-form` library is used to handle form state, validation, and submission.
- **Navigation:** `react-router-dom` library is used to handle navigation between pages, specifically to navigate the user to a "thank-you" page after the form is submitted.
- **Submitting:** Once the form is submitted, the application simulates an API call to Salesforce and logs the data to the console.
- **Embedding to a CMS:** Using Vite’s build process the app can be bundled as a static JavaScript bundle for easy embedding into CMS website. Command `npm run build` generates a `dist/` folder containing static JavaScript, CSS, and asset files that can be included in any HTML page.

## Setup

### 1. Clone the repository

```
git clone https://github.com/oleksii1989/lead-acquisition-form.git
cd lead-acquisition-form
```

### 2. Install dependencies

```
npm install
```

### 3. Run the development server

```
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173).

### 4. Run the tests

```
npm test
```
