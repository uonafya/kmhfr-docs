---
sidebar_position: 1
---

# Authentication

You have just learned how to set up the Master Facility Registry Development Server.
Lets look at how we can get authorization to consume the resources from our development server.

To access resources from Master Health Facility Registry REST API you will need to get a valid auth token as shown below

## OAuth token based authentication

### Generate auth token

    To generate the auth token you will need to have the server running and setup to listen on your preferred port. To get the token you will need to make a request to ```/o/token``` endpoint.

    The request requires the following:
    
    - A user account which will have **username** and a **password** that is currently in the database

        :::info[Creating a user account in MFR]
        Please note that you may not have a user account after setting up the server. To create one, use the django admin web portal to create a user.
        :::
    - A **Client ID**, which is usually generated for you by django
    - A **Client Secret**, which is also system generated when you setup MFR

    To generate the token you can use the tool of your choise to make the http request. In this tutorial we will use curl, which you can easily install and is installed by default in most linux distributions

    ```curl
    curl -X POST \
    -d "grant_type=password&username=<user_email>&password=<user_password>&scope=read" \
    -u "5O1KlpwBb96ANWe27ZQOpbWSF4DZDm4sOytwdzGv:PqV0dHbkjXAtJYhY9UOCg \
    RVi5BzLhiDxGU91kbt5EoayQ5SYOoJBYRYAYlJl2RetUeDMpSvhe9DaQr0HKHan0 \
    B9ptVyoLvOqpekiOmEqUJ6HZKuIoma0pvqkkKDU9GPv" \
    https://api.kmhfr.health.go.ke/o/token/
    ```
    This ```5O1KlpwBb96ANWe27ZQOpbWSF4DZDm4sOytwdzGv``` is the **Client ID** while ```PqV0dHbkjXAtJYhY9UOCg
    RVi5BzLhiDxGU91kbt5EoayQ5SYOoJBYRYAYlJl2RetUeDMpSvhe9DaQr0HKHan0``` is the **Client Secret** from the example above

    Make sure to replace `<user_email>` and `<user_password>` with your respective login credentials, as well as the client id and client secret in ```-u "5O1KlpwBb96ANWe27ZQOpbWSF4DZDm4sOytwdzGv:PqV0dHbkjXAtJYhY9UOCg \
    RVi5BzLhiDxGU91kbt5EoayQ5SYOoJBYRYAYlJl2RetUeDMpSvhe9DaQr0HKHan0 \
    B9ptVyoLvOqpekiOmEqUJ6HZKuIoma0pvqkkKDU9GPv"```. 

    

### Use token to make request

Once you have the token add it to the header section of your request as illustrated below.

```typescript title="index.ts"

const url = “/api/...”

async fetchResource(url: string) {

    return await fetch(url, {
        headers:{
        Authorization: `Bearer  ${<user_generated_token>}`,
        . . .
        }
    })

}
```

Replace `<user_generated_token>` with the token you generated above


