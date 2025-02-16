Run unit test cases in Angular using the Jasmine karma package
different ways to unit test components
code coverage

Here I will talk about various ways to run the unit test cases of any component or a whole project test suite of angular application. I will also talk about how you can check code coverage means how many functions have you covered in your testing.
 
Following are the different ways to unit test components-
 
1- context method-
This method you need to use in the test.ts file. you need to call this method in the test.ts file. In this method, you have to pass the component spec file name of which you want to run the test cases.

Add below code in test.ts file whichever component you want to check
Example-

const context = require.context(‘./’, true, /.*profile.component.spec.ts$/);

Here I have passed the profile component testing file. It will run the test cases of this file.
 
The command to check your unit test code is 
>ng test

2- fdescribe-
 
As we know by default we have describe keywords with test suite in all testing files. Here you need to add f code to describe Keyword. After this, you can run the test command.
Example-

describe -> fdescribe

Now run the test command-
>ng test

code coverage commands-
To check unit test code coverage 
 
update the angular.json file first:

“test”: {
"options": { 
“codeCoverage”: true
 }
}

Run below command:

>ng test --no-watch --code-coverage

Another command to run coverage is: 
>ng test --code-coverage --watch --browsers Chrome


Tip:
If you have imported any service file in the component update it to public then it will increase the code coverage percent.
Introduction to Unit Testing in Angular
About
Benefits
Testing Areas
Jasmine
karma
Different types of testing-
Topics to cover
Prebuilt matchers
Terminologies
Implementation of headless browser
Run unit test cases

Here I will talk about unit testing in angular 2.0+ projects. As we know software can’t be shipped to customers without testing it thoroughly. There are multiple ways to test an application — manual tests, automated integration tests, automated unit tests, performance tests etc. These different types of testing help you to deliver a good Product or Application. Here I will give you a basic idea of unit testing.

Testing is a vital part of any application. It makes your application error-free. With JavaScript libraries and frameworks, you can automate the process of testing. There are lots of testing libraries and frameworks that you can use to write test cases. Unit tests are always written by Developers.

To deep test any application firstly you have to understand the structure, functions of the project. In the Angular application, we use Jasmine and Karma framework for unit testing.

Benefits of unit testing

It improves the quality and robustness of the code.

Test suites are good documentation of functionalities. It saves lots of time.

Suppose if we do any functionality improvement in the application then with the test cases you can get the idea of the application, data and code.

The main idea behind testing is to Arrange-act-assert(AAA).

We write tests in Test Sequences that are made of one or more Test Specs.

Testing Areas that you also need to consider for unit testing-

Independent Logic

User Input Events

Inherited Functionality

Application Events

Services

Input emitter

Output emitter

Life Cycle Hooks

Mock Method Chains

Jasmine:

Jasmine is a JavaScript (JS) testing framework that maintains a software development system called Behaviour Driven Development (BDD). It is a spy-based testing framework because only the concept of spy exists in Jasmine. What we can’t do, in Jasmine, is to mock objects.

Jasmine provides a lot of useful functions to write tests. The three main APIs are:

Describe(): It’s a suite of tests

it(): Declaration of a single test

expect(): Expect something to be true for example

Jasmine Is An Open-Source Javascript Testing Framework That Has Not Any Dependencies And Can Be Used For Testing Any Kind Of Javascript Code. Jasmine(Successor Of Jsunit) Was Built By Pivotal Labs And Launched In 2010 And Is Heavily Influenced By Rspec. Since It Is Based On Behaviour Driven Development (BDD), Jasmine Does Not Test The Entire Application As A Whole But Rather Breaks Down Tests To Small Units Or Statements. Unlike Mocha, Jasmine Is Armed With Its Assertion Libraries And Also Features “Spies” For Implementing Test Doubles.  

If you have worked on the angular front end framework then you know that it is used to write test cases of UI components. By using this you can easily write unit test cases of functionalities.  

Benefits-  

Jasmine Does Not Depend On Any Other Frameworks Or Libraries – It Has No Dependencies.  

Does Not Require Any Dom To Run Tests. Jasmine Multiplies Parts Of Dom That It Needs To Run Tests To Check The Javascript Code. As A Result, It Can Run Hundreds Of Tests In Mere Seconds And Is One Of The Fastest Javascript Testing Frameworks Out There Beating Even Jest In Some Scenarios.  

Easy To Read Descriptive Syntax And Low Complexity.  

Jasmine Remains As The Most Popular Choice To Run Tests In Angularjs.  

Can Be Deployed Out Of The Box With Minimum Configuration And Has Its Assertion Libraries Which Can Be Easily Extended.  

Top Clients-  

Growth Hackers, Coderus, Ubiqua, Infoshare  

karma:

Karma is a tool that lets us spawn browsers and run jasmine tests inside of them all from the command line. The results are displayed on the command line of the tests suites.

In the angular, these packages are already configured. You can write test cases using Jasmine as the testing framework and karma as a test runner. It also gives us the ability to check results on the browser which give a better visualization of test results. The Angular Testing module provides various utilities for testing asynchronous operations.

You can also use a headless browser if you do not want UI.

Different types of testing-

1-Unit testing-

This is sometimes also called Isolated testing. It’s the way of testing small isolated pieces of code. If your test uses any external resource, like the network or a database, it’s not a unit test. Test a component in isolation without external assets.

2- Functional Testing-

This is described as the testing of the complete functionality of an application. In practice with web applications, this means interacting with your app as it’s running in a browser just like a user would interact with it in real life, i.e. via clicks on a page. This is also known as End To End or E2E testing.

3- Integration Testing-

In the integration, it uses external resources(e.g file system, database, API endpoints) components i.e template.

Following things that you need to learn for valid testing: Topics to cover

How to write & run tests in Angular using Jasmine & Karma.

Write tests cases for classes, components, directives and pipes.

when to use the Angular Test Bed to help test behaviours that depend on the Angular framework.

Write tests using mocks and spies.

Work on tests that depend on change detection.

when to write tests that involve an asynchronous action (Async Behaviour).

when to write tests that require the dependency injection framework.

when to write tests that involve the HTTP service (Calls).

when to write tests that involve model-driven forms (template-driven forms require E2E testing).

How to write tests to test the Angular Router.

Test event on particular HTML element.

test an HTML element like Textarea in the component.

How to write test cases for classes, components, directives and pipes. All thing in Angular is an instance of a class e.g Component, Directive, Pipe

Prebuilt matchers available in jasmine library
https://wordpress.com/post/neweraofcoding.wordpress.com/1055

Terminologies for unit testing in angular
https://wordpress.com/post/neweraofcoding.wordpress.com/1053

Implementation of headless browser for unit testing
https://wordpress.com/post/neweraofcoding.wordpress.com/1051

Run unit test cases in Angular using the Jasmine karma package
https://wordpress.com/post/neweraofcoding.wordpress.com/240

https://leewarrick.com/blog/why-write-tests/

https://netbasal.com/simulating-events-in-angular-unit-tests-5482618cd6c6

medium.com/@jonyeezs/writing-resilient-angular-unit-test-2d17618db70a

https://angular.io/guide/testing-components-basics#component-class-testing

http://angular-tips.com/blog/2021/07/unit-testing-spies-and-mocks/

Prebuilt matchers available in jasmine library
index-

about
list of methods

Here I will talk about Prebuilt Matchers available in Jasmine. Jasmines come with some pre-built Matchers that we use to check behaviour. In these Matchers, we need to pass the expected outcome of that test suite. These test cases make the code more relevant and easier to read.

Following is the list of methods/Matchers that you can use-

toContain:

This method is used to-

match the expected result that contains the value of the member or not.

check the component’s DOM is rendered correctly or not.

expect(array).toContain(member);

toThrow-

The method is used to throw any message from the expected result.

expect(fn).toThrow(string);

toThrowError-

A method is used to throw any exception error from the expected result.

expect(fn).toThrowError(string);

toBe-

Match or Asserts that expected and actual objects are the same.

expect(instance).toBe(instance);

Testing Booleans, numbers

expect(true).toBe(true);

toBeDefined-

The method is used to check the expected result is defined or not.

expect(mixed).toBeDefined();-

toBeFalsy-

The method is used to match the expected result is false or not i.e. means expected result is a Boolean value.

expect(mixed).toBeFalsy();-

toBeNull-

The method is used to check the expected result is null or not.

expect(mixed).toBeNull();

toBeTruthy-

With this, You can check an instance of a class created or not. The method is used to match the expected result is true or not i.e. means expected result is a Boolean value. It does not check null, undefined, false, empty string, zero falsy values.

expect(mixed).toBeTruthy();

toBeUndefined-

This method is used to check expected result is undefined or not.

expect(mixed).toBeUndefined();-

toEqual-

To Check For Deep Equality, Use .ToEqual() Instead Of.ToBe() because . toBe() is used for reference equality. To compare objects use this. Don’t use toBe to test arrays.

                expect(mixed).toEqual(mixed);

toMatch-

Match the expected result is the same according to the given regular expression.

expect(mixed).toMatch(pattern);-

toBeCloseTo

expect(number).toBeCloseTo(number, decimalPlaces);

toBeGreaterThan

The method is used to match the expected result is greater than or not.

expect(number).toBeGreaterThan(number2);-

toBeLessThan-

expect(number).toBeLessThan(number);

toBeGreaterThanOrEqual-

expect(number).toBeGreaterThanOrEqual(number);

toBeNaN

expect(number).toBeNaN();

toHaveBeenCalledTimes-

expect(spy).toHaveBeenCalledTimes(number);

toHaveBeenCalled

it is mostly called with spyon method.

expect(spy).toHaveBeenCalled(); -

create service

update method code

toHaveBeenCalledWith-

expect(spy).toHaveBeenCalledWith(...arguments);-

toBeLessThanOrEqual-

Not keyword-

You can use not with any prebuilt matcher.

expect('data').not.toBeNull();

triggerEventHandler

callFake example-

unit test nativeElement focus-

   

    fixture.detectChanges();

https://www.instagram.com/p/B4cq4CRgJX_/?utm_source=ig_embed&utm_campaign=loading

