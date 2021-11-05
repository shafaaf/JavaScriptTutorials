## Udemy graphqQL course
From: https://www.udemy.com/course/aws-appsync-amplify-with-react-graphql-course/

For mongodb setup, put in .env file in root folder
```
MONGODB_USERNAME = 'sha***'
MONGODB_PASSSWORD = 'yn***p5'
CLUSTER_URL = 'cluster0***'
```
Get these from memos doc, search "mongo"

GraphQL UI:
```
http://localhost:4000/graphql
```

Example of query:
query {
    hobbies {
        title
        description
        user {
            name
        }
    }
}

Example of mutations:
mutation {
    removeUser(id:"60d3ddd62c3c703516497616") {
        id
    }
}

