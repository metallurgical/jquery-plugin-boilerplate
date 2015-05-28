# jquery-plugin-boilerplate
Plugin lightweight template

A Lightweight Start

Let’s begin our look at patterns with something basic that follows best practices (including those in the jQuery plugin-authoring guide). This pattern is ideal for developers who are either new to plugin development or who just want to achieve something simple (such as a utility plugin). This lightweight start uses the following:
- Common best practices, such as a semi-colon before the function’s invocation; window, document, undefined passed in as arguments; and adherence to the jQuery core style guidelines.
- A basic defaults object.
- A simple plugin constructor for logic related to the initial creation and the assignment of the element to work with.
- Extending the options with defaults.
- A lightweight wrapper around the constructor, which helps to avoid issues such as multiple instantiations.


##Namespacing And Nested Namespacing##

Namespacing your code is a way to avoid collisions with other objects and variables in the global namespace. They’re important because you want to safeguard your plugin from breaking in the event that another script on the page uses the same variable or plugin names as yours. As a good citizen of the global namespace, you must also do your best not to prevent other developers’ scripts from executing because of the same issues.
JavaScript doesn’t really have built-in support for namespaces as other languages do, but it does have objects that can be used to achieve a similar effect. Employing a top-level object as the name of your namespace, you can easily check for the existence of another object on the page with the same name. If such an object does not exist, then we define it; if it does exist, then we simply extend it with our plugin.
Objects (or, rather, object literals) can be used to create nested namespaces, such as namespace.subnamespace.pluginName and so on. But to keep things simple, the namespacing boilerplate below should give you everything you need to get started with these concepts.
