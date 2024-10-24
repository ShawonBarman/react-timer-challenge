# react-timer-challenge
A simple React application demonstrating the use of React refs, portals, and timers. The app allows users to set their name and participate in different timer-based challenges with varying difficulty levels. Each challenge runs on a timer, and the user can start, stop, or reset the timer as needed.

## Features
- Set and display player names using refs.
- Multiple timer challenges with difficulty levels.
- Ref-based modal using `createPortal` to display results.
- Start, stop, and reset functionality for each timer.
- Scoring system based on remaining time.

## Technologies Used
- **React**: For building the UI components.
- **Refs**: For handling input and modal behavior.
- **Portals**: For rendering the result modal outside the normal DOM hierarchy.
- **Hooks**: `useState`, `useRef`, and `useImperativeHandle` for managing state and refs.

## Components
- **Player**: Allows users to set their name.
- **TimerChallenge**: Manages the countdown timer for each challenge.
- **ResultModal**: Displays the results of the challenge using `createPortal`.

## Installation and Setup

To run these apps locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ShawonBarman/react-timer-challenge-app.git
   cd react-timer-challenge-app
   ```

2. **Install dependencies:**

   Make sure you have Node.js and npm installed.

   ```bash
   npm install
   ```

3. **Run the applications:**

   ```bash
   npm start
   ```

This will start the app at http://localhost:3000.

## Folder Structure

```
  src/
  │
  ├── components/
  │   ├── Player.jsx
  │   ├── TimerChallenge.jsx
  │   └── ResultModal.jsx
  │
  ├── App.jsx               # Main application component
  └── index.css             # Styling for the app
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
