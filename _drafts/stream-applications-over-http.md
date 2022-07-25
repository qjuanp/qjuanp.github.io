Stream applications over HTTP

There are several frameworks to build app Stream applications.

Java → WebFlux

C# → ????

But, if http protocol (at least V1) is a stateless protocol (request/response ephemeral connections), how a stream application could work on top of it?

Goal is to propose alternative mechanisms to retrieve data from the server

How can we reproduce this consumption mechanisms from webflux in c# like library [https://nurkiewicz.com/2021/08/json-streaming-in-webflux.html](https://nurkiewicz.com/2021/08/json-streaming-in-webflux.html)

All seems to point out to the implementation of “application/stream+json” responses

[https://kamilszymanski.github.io/serving-large-datasets-with-spring-webflux/](https://kamilszymanski.github.io/serving-large-datasets-with-spring-webflux/)

The implementation came in [asp.net](http://asp.net) core 6 [https://anthonygiretti.com/2021/09/22/asp-net-core-6-streaming-json-responses-with-iasyncenumerable-example-with-angular/](https://anthonygiretti.com/2021/09/22/asp-net-core-6-streaming-json-responses-with-iasyncenumerable-example-with-angular/)

Outstanding questions:

- PAging?
- How long can the connection be opened to receive updates in the stream?
- How to handle lost connection?
- How Load Balancing works?
- Scenarios
    - Loading large set of data
    - Load data that needs to be processed
    - Live logs ??