# mailer-app

[![Build Status](https://travis-ci.com/shterion/mailer-app.svg?token=H7APE9Z98wMSqKwH4sYc&branch=master)](https://travis-ci.com/shterion/mailer-app)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity)

Mailer application is a simple email app which creates emails and stores them in an external database. In order to test it locally you need to run [mailer-worker](https://github.com/shterion/mailer-worker) which is a service running in background.

---------

## Functionality  

The application offers the following options for scheduling emails:  
  - **now**
  - **later** - on a specific date
  - **custom occurrence**
    - repeat - daily, weekly, monthly or yearly
    - ends - never, on(date), after(occurrences)

## Local installation
  1. Clone the repository `git clone git@github.com:shterion/mailer-app.git`
  2. In the **root** directory run `npm install` to install server dependencies
  3. Navigate to **client** with `cd client/` and run `npm install` to install client dependencies
  4. You should create a `.env` file in the **root** directory with the following variables:
   - `DB_USERNAME` - your MongoDB username
   - `DB_PASSWORD`- your MongoDB password
   - `APPLICATION_NAME` - application name is only used for a local  testing
   > IMPORTANT: For local testing the `APPLICATION_NAME` variable in [mailer-worker](https://github.com/shterion/mailer-worker) **MUST** be the same as this one here. They have to be identical.  

  5. In **root** directory run `npm run dev`
  6. The app should be running on `localhost:5000`

  ------------------------------------  
## List of supported endpoints

  | Endpoint        | Method           | Description  | Required properties |
  | ------------- |:-------------:| -----|------|
  | /api/v1/emails| POST |Email creation | `recipient`, `to`, `text`, `date`, `sendType`, `repeatType`|


The application is deployed on [heroku](https://www.heroku.com/) using [Travis CI](https://travis-ci.com/shterion/mailer-worker) and it could be accessed on [email-scheduler-app.herokuapp.com/](https://email-scheduler-app.herokuapp.com/)
