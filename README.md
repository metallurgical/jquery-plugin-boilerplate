# jquery-plugin-boilerplate
Plugin lightweight template

A Lightweight Start

Let’s begin our look at patterns with something basic that follows best practices (including those in the jQuery plugin-authoring guide). This pattern is ideal for developers who are either new to plugin development or who just want to achieve something simple (such as a utility plugin). This lightweight start uses the following:
- Common best practices, such as a semi-colon before the function’s invocation; window, document, undefined passed in as arguments; and adherence to the jQuery core style guidelines.
- A basic defaults object.
- A simple plugin constructor for logic related to the initial creation and the assignment of the element to work with.
- Extending the options with defaults.
- A lightweight wrapper around the constructor, which helps to avoid issues such as multiple instantiations.
