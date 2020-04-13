[Home](./README.md) > [Examples](/Examples)

# HomePage - Examples

This section contains examples and how to's documentation to help you to use the hermes topic service  

## The Project Application

> This application is an application that allows users to create projects that can contains some 
child molecules.
> 
> When creating project, two events occured :
> - all users are notified of the creation of a new object
> - a background service is informed of the creation of the project and add two random molecules to it
>
> The creator of the project is automatically informed when a molecule is added to the created project
> Other users can follow additions of molecules of created project by other users.

### Composition of the Application

This application will be a featherjs application ([feathers documentation](https://feathersjs.com/)).

It will need only the @hermes/topicservice package

#### Configuration of the project

Initialize npm first

 ``` bash
 npm init
 ```
 Add the hermes repository, by following [this tutorial](/README#installation-for-server-side) 
 
