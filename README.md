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

Please note you must be in the module root using the console.

```
npm install
bower install
grunt build
```

### Run the app locally ( after npm & bower install )

```
grunt serve
```

### Run unit test
 
Please note you must be in the module root using the console.

```
// run unit tests
grunt test:unit

// or
grunt test
```

### Run end2end test with protractor
 
Protractor must be installed. 
Cd insie test/e2e then run comman below

```
protractor conf.js
```

### Build, test and run all the task

Please note you must be in the module root using the console.

```
npm install
grunt build
```
