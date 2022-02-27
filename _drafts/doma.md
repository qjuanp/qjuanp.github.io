
We went from Monoliths to Microservice and we now have network distributed monotliths

If we cannot produce a modularized monolith we cannot produce a well structured / modulirized microservices


Microservoces
    - PROS
        - Modularization forced
    - Chanllenges/Problems
        - Domain model -> Tangled web of classes
            A tipical Domain Model cannot be partitioned accross multiple services
        - ACID Transactions
            inforce innvariance
            inforce business rules
            Violates encapsulation -> if rules enforce cross boundary domains
                CAP Theorem -> 2 Phase consistency transactions
                    Availability over consistency in moder applications
            Doesn't fir with NoSQL Databases since they have limited capabilities around transactionoperations


Problem Domain models and microservices
- Goal Microsierve: using ancient tecnique modularization
    - Microservice = Business capability
    Breaking applicaiton in services
        Each service has itsown database (loose copling)
    Service inforce Modularity
        Everithing is private unless its exposed to a well defined interface

- API gatwway
    Facade
    Single point of access


Microservices based in Domain Driven Design
- Accient text
- Abstract thought
- Used to model modern applications

Aggregates -> solution to Microservices Domain partitioning

- What it is?
    - Cluster of objects that can be treated as a unit
    - graph consisting of a root entity and one or more entities and value objects reference by the root (directly or inderictly
    - Typical business entities are aggregates
    - Rules
        - Reference other aggregate roots via identity ()
            - Foreig keys in a Domain Model??? considered code smell, but a thradeoff to pay to loose connection, easily partition
        - Processing one command by one aggregate 
            - This transactions match with NoSQL if the aggregate is an entire document
    - Aggregate Granularity
        - Consistency <----> Scalability/User experience
        - Design decision
    - Eventual consistency
        - Aggregate publish it's change events
        - An intereseted service in other aggregate changes will listen those change events and act accrodingly
        - BASE - Basically Available  Soft State Eventualy consistency
        - Need compensating transactions
    - Events proble
        - Dual write problem (database, events) if fail one of those cinsistency is at risk
    - Event Driven Architecture
        - application events (application publishing events)
        - Database triggers (custom triggers)
        - Transaction log tailing (Database -> Kafka)
        - Event Sourcing -> similarity with transaction log tailing
            - Event centric persistency
            - Event Store = Message Brocker + Database
            - For each Domain object -> DDD Aggregate
                - dentify the state change/ domain event
                - Busienss logic oriented through State change
                - |Persis events | NOT CURRENT STATEs


DDD


Functional Partitioning