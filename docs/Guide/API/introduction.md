---
sidebar_position: 1
---

# Introduction

Lets dive in and look at the Ins and Outs of KMHFR API for a better understanding


<h1 id="kenya-master-health-facility-registry-kmhfr-api">Kenya Master Health Facility Registry (KMHFR) API v3</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Kenya Master Health Facility Registry (KMHFR) API version 3

Base URLs:

* <a href="https://api.kmhfr.health.go.ke/">https://api.kmhfr.health.go.ke/</a>

<a href="https://api.kmhfr.health.go.ke/terms/">Terms of service</a>
Email: <a href="mailto:support@healthit.uonbi.ac.ke">Support</a> 
 License: BSD License

# Authentication

- HTTP Authentication, scheme: basic 

# API

## API list

<a id="opIdapi_list"></a>

> Code samples

```javascript

fetch('https://api.kmhfr.health.go.ke/api/',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/`

*This view serves as the entry point to the entire API.*

# Exploring the API
There are two ways to explore this API:

 * the [Swagger](http://swagger.io/)
 [**sandbox** ( click here )](http://41.89.92.168/api/explore/#!/api)
 * the [browsable API ( click here )](http://41.89.92.168/api/docs/)
# Authentication
Anonymous users have **read only** access to *most* ( not all ) views.
If you want to try out the `POST`, `PUT`, `PATCH` and `DELETE` actions,
you will need to log in using the link on the top right corner.

For the experimental sandbox, you can get suitable credentials from
[the documentation](#). For a live
instance, you need to request for access from the administrators.

<h3 id="api_list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

:::note
To perform this operation, you must be authenticated by means of one of the following methods:
Basic
:::


