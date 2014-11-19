Web performance data chart
==========================

* Create an interface that allows you to enter a series of dates, each with a corresponding url and total
page response time in seconds. Any data previously entered should be displayed in a table.
* Display the data in some kind of graphical form (e.g. bar chart)
* The user should have the option to sort the data by any of the table columns. 
It should also be possible to amend and/or delete the data after it has been entered.
* allow the user to manipulate the graphic you produced in question two in some way and make the data they 
entered update automatically to reflect the change

### Build the application for deploy

Manually add CanvasJS lib in /app/scripts/vendor/canvasjs-1.5.0-beta/canvasjs.min.js

Please note you must be in the module root using the console.

```
npm install
bower install
grunt build
```

In the event of 'wiredep' error when building, set as empty string the 'cwd' property 
of the wiredep configuration in Gruntfile.js 

```
wiredep: {
  options: {
    cwd: ''
  },
  app: {
    src: ['<%= yeoman.app %>/index.html'],
    ignorePath:  /\.\.\//
  }
},
```

### Run the app locally ( after npm & bower install )

```
grunt serve
```

### Run unit test
 
Please note you must be in the module root using the console.

```
// run unit tests
grunt karma:unit

```

### Run end2end test with protractor
 
Protractor must be installed 
(follow this tutorial http://www.sergiorinaudo.com/angularjs-e2e-tests-implementare-protractor-ed-utilizzarlo-con-grunt/).
Multiple console windows should be used.

```
grunt serve // Protractor will read the page served by this command

webdriver-manager start // start a selenium server

grunt protractor
```
### Run all tests

```
grunt test
```

### Build without test 

Please note you must be in the module root using the console.

```
npm install
grunt build
```

### Build, test and run all the task

```
npm install
grunt serve // Protractor will read the page served by this command
node node_modules/protractor/bin/webdriver-manager start // start a selenium server
grunt
```
