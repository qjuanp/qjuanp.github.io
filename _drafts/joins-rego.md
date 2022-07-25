---
layout: post
title: "Joins in rego"
category: devops
tags: [opa, rego, sets]
---
# Support material

Use SQL Join Venn diagram to orient

Operations

- [ ]  set example
- [ ]  Set Operations
    - [ ]  Intersection (Inner Join)
        - [ ]  example → languages
        - [ ]  graphic
        - [ ]  relation algebra
        - [ ]  SQL
        - [ ]  rego
    - [ ]  Union → Full outer inclusive
        - [ ]  
    - [ ]  Difference, Except (Left/Right Join exclusive)
- [ ]  Rest of Join operations
    - [ ]  Cross join, product
        - [ ]  example - breakfast [https://www.sqlshack.com/sql-cross-join-with-examples/](https://www.sqlshack.com/sql-cross-join-with-examples/)
    - [ ]  Left/Right Inclusive
    - [ ]  Full outer exclusive

Data example

- area → applications → user
    - examples:
        - users in multiple areas

## Excercise

```
package jpi.dev.examples.sets.joins

images := [
	{ "name":"alpine", "version":"3.13.5", "repo": "https://github.com/alpinelinux/docker-alpine" },
    { "name":"nginx", "version":"1.19.10", "repo": "https://github.com/nginxinc/docker-nginx" },
    { "name":"mongo", "version":"0.54.0", "repo": "https://github.com/mongo-express/mongo-express-docker" },
    { "name":"couchdb", "version":"3.1.1", "repo": "https://github.com/apache/couchdb-docker" }
]

npm := [
	{ "name":"react", "version": "17.0.2", "repo": "https://github.com/facebook/react" },
    { "name":"moment", "version": "2.29.1", "repo": "https://github.com/moment/moment/releases" },
    { "name":"dayjs", "version": "1.10.4", "repo": "https://github.com/iamkun/dayjs" },
    { "name":"express", "version": "4.17.1", "repo": "https://github.com/expressjs/express" },
    { "name":"request", "version": "2.88.1", "repo": "https://github.com/request/request" }
]

python := [
	{ "name": "flask", "version":"1.1.2", "repo" : "https://github.com/pallets/flask"},
	{ "name": "django", "version":"3.2", "repo" : "https://github.com/django/django"}
]

apps := {
	{
    	"name":"todo",
        "dependencies":{
        	"react":"17.0.2",
            ""
        }
    }
}

authorized := { "nginx", "mongo", "react", "dayjs", "express"}

images_set[image] {
	image := object.union(images[_], { "type":"docker_image"} )
}

npm_set[pkg] {
	pkg := object.union(npm[_], {"type":"npm"})
}

python_set[pkg]{
	pkg := object.union(python[_],{"type":"python"})
}

artifacts[artifact] {
	some pkg
    pkg_name := {images_set[pkg].name}
	artifact := object.union(images_set[pkg], {"authorized": count(pkg_name - authorized) == 0 })
} {
	some pkg
    pkg_name := {npm_set[pkg].name}
	artifact := object.union(npm_set[pkg], {"authorized": count(pkg_name - authorized) == 0 })
} {
	some pkg
    pkg_name := {python_set[pkg].name}
	artifact := object.union(python_set[pkg], {"authorized": count(pkg_name - authorized) == 0 })
}

authorized_artifacts[artifact]{
	some pkg
    artifacts[pkg]
    pkg.authorized
    artifact := pkg
}
```
Meals

- drinks
- Breakfast
- lunch
- dinner

---

As I mentioned in the previous post, Rego is a query language, and when you talk about queries over data collection is impossible not to talk about joining sets. Part of the previous post was show sets definition and usage of intersection in rego, now, to explain the rest of the available set operations let's bring another concept that is well spread: "SQL Joins" to understand more capabilities around Rego.

Remember, sets and arrays are different in rego, arrays is an indexed collection of values and sets is a non-indexed and unsorted collection of unique values.

> 💡 Previouos post was from the policy perspective this is more from the query perspective

Base operations in relational algebra:

- 

# Intersection

We talked about intersections in the previous post, nevertheless, let me bring you up to speed of how to use it.