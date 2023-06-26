React TypeScript Quiz Application
=================================

Table of contents
-----------------

*   [Overview](#overview)
*   [Demo](#demo)
*   [Features](#features)
*   [Structure](#structure)
*   [Setup](#setup)

Overview
--------

This React TypeScript Quiz application offers a fun and interactive way for users to test their knowledge in two different quiz formats. Users can select an activity from the Home screen and proceed to answer a series of questions. Once completed, a Score screen will appear displaying the user's score and a detailed breakdown of correct and incorrect answers. A link back to the Home screen allows users to start again or choose a different activity.

Demo
----

To see the app in action, visit [Demo Link](http://nodejs.worldcloud7.com/)

Features
--------

*   **Activity One**: Presents a straightforward set of questions answerable by Correct or Incorrect.
*   **Activity Two**: Presents a set of questions distributed in different rounds, again answerable by Correct or Incorrect. The user will be prompted to proceed to the next round after answering all questions in the current round.
*   **Score Screen**: Provides a summary of the user's performance, including the total score, a list of correct and incorrect answers, and a link to return to the home screen.

Structure
---------

The project is structured into several key React components coded in TypeScript:

1.  **App.tsx**: This is the entry point of the application, fetching a quiz dataset from an external API and defining the various routes and components. The fetched dataset is the only one that will be used in the entire Application. 
2.  **HomeScreen.tsx**: Displays the home screen where users can select an activity (Activity One or Two, but other disabled Activities demonstrate the Quiz capability to expand its services).
3.  **QuestionScreen.tsx**: Displays the quiz questions and handles user responses.
4.  **ScoreScreen.tsx**: Displays the score screen with the user's list of correct or wrong answers and provides a link back to the home screen.

Note: The original API has been relayed to another host which allows an unrestricted CORS policy.

In addition to these core components there are several supporting files:

*   **CheckAnswers.tsx**: Helps list the correct and incorrect answers of the user at the Score Screen.
*   **IntroScreen.tsx**: Provides a clear break between activities or rounds.
*   **Toolbox.tsx**: Provides helper functions to the Application that can be added/amended to serve future projects..
*   **Ambiance.tsx**: a vanity component that enhances user experience and engagement.
*   **App.css**: Contains the application's custom styles.

Note: During the Quiz there's no option to repeat the previous question or round. However at the end of the Quiz at the Score screen a link to the Home screen is provided to allow retaking of the Quiz.

Setup
-----

To use the project, follow these steps:

1.  Clone the repository to your local machine.
2.  Navigate to the project folder and install the required dependencies with `npm install`.
3.  Run `npm start` to start the application. It will be available at `http://localhost:3000`.

To install the project's additional dependencies, run the following commands:

*   Bootstrap 5: `npm install bootstrap`
*   React-bootstrap: `npm install react-bootstrap`
*   React-router-dom: `npm install @types/react-router-dom`

Contributing to the Project
----------------------------

To contribute to the project, please fork the repository and submit a pull request.

License
-------

The project is licensed under the MIT License.

I hope this helps! Let me know if you have any other questions.

Contact
--------

ronaldvaldehueza@gmail.com

Enjoy the quiz and keep learning!
