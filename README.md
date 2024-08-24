# FLEXFIT Full Stack Application

This is the FLEXFIT full stack application, built using React for the frontend and Express for the backend. The application includes a feature for sending emails, which can be used for contact forms or other notifications.

## Project Structure

- **Frontend**: Built with React, handles the user interface and interactions.
- **Backend**: Built with Express, handles API requests, including email sending.
- **Email Service**: Configured with Nodemailer to send emails via Gmail SMTP.

## Features

- **React Frontend**:
  - Responsive design with a modern UI.
  - Displays programs and services.
  - Contact form for users to send messages.

- **Express Backend**:
  - API for handling requests from the frontend.
  - Secure email-sending feature using Nodemailer.
  - CORS configured to allow requests from the frontend.

## Prerequisites

- **Node.js**: Make sure Node.js is installed.
- **NPM**: Node package manager for installing dependencies.
- **Gmail Account**: For sending emails via SMTP.

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/flexfit-app.git
cd flexfit-app
```

### 2. Install Dependencies

- **Backend**:
  ```bash
  cd backend
  npm install
  ```

- **Frontend**:
  ```bash
  cd frontend
  npm install
  ```

### 3. Set Up Environment Variables

- **Backend**:
  - Create a `.env` file in the `backend` directory.
  - Add the following environment variables:

    ```env
    EMAIL_USER=your-email@gmail.com
    EMAIL_PASS=your-email-password
    SMTP_MAIL=your-destination-email@gmail.com
    FRONTEND_URL=http://localhost:3000
    PORT=4000
    ```

  - If you use 2-Step Verification with Gmail, generate an [App Password](https://myaccount.google.com/apppasswords) and use it as `EMAIL_PASS`.

- **Frontend**:
  - Create a `.env` file in the `frontend` directory if needed for any environment-specific variables.

### 4. Running the Application

- **Start the Backend**:
  ```bash
  cd backend
  npm start
  ```

  The backend server will start on the port defined in the `.env` file (default is 4000).

- **Start the Frontend**:
  ```bash
  cd frontend
  npm start
  ```

  The React app will start on `http://localhost:3000`.

## Usage

- **Frontend**: 
  - Access the frontend by navigating to `http://localhost:3000`.
  - Explore programs, and services, and use the contact form to send a message.

- **Backend**: 
  - The backend handles API requests and sends emails. 
  - Use the contact form on the frontend to trigger the `/send/mail` endpoint.

  Example request:
  ```json
  POST http://localhost:4000/send/mail
  {
    "name": "John Doe",
    "email": "johndoe@example.com",
    "message": "Hello, this is a test message."
  }
  ```



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
