# sebastian-aedo

Readme

## Final Project Enhancement

### Enhancement(s) Implemented
- Toast notifications
- Dark mode toggle

### Video Demonstration

[Link to video]

### Features Added

- Implemented toast notifications for success, error and info messages
- Added a responsive dark mode toggle that persist using local storage

### Technical Implementation

-I used react-hot-toast and locaStorage.
-One of the main challenges when implementing the toast notification was getting a double toast notification instead of only one. I fixed it removing the StrictMode in main.jsx. 
-I added the Toaster in app.jsx to use toast notifications and replaced all the alerts and messages with them. 
-I modified most of the css files changing the colors to variables created on index.css to create the dark mode and added a "dark mode" button to the header. 

### New Dependencies

- react-hot-toast
- Description: React librarie that makes it easy to display moder, non-intrusice toast notifications

### Setup Instructions

1. Install dependencies: npm install react-hot-toast
2. Add the Toaste component into app.jsx
3. You can use the toast notifcations anywhere using toas. (ex: toast.succes)
