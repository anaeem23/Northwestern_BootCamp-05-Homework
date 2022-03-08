# 05 Third-Party APIs: Work Day Scheduler

## Task

The task was to create a simple calendar application that allows a user to save events for each hour of a standard working day. This app was to run in a browswer and feature dynamically updated HTML and CSS powered by jQuery. Moment.js was to be used as the working library to incorporate date and time features.


## Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

## Calendar

The calendar was made using Jquery and Moment.js. The app consists of a title for the page with the current date displayed and below it is the daily planner. The working hours were set from 9AM to 8PM to accomodate for Over Time work. The calender is color coded to show the past, present, and future activites yet to come. The user is allowed to fill their calender with activities and using the "Save Task" button they can save those tasks in local storage.

## Submission

The URL: https://anaeem23.github.io/Northwestern_BootCamp-05-Homework/

Example of the working app:

![GIF showcasing the apps features.](./Assets/Work-Day-Scheduler-Google-Chrome.gif)
