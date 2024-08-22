---
sidebar_position: 6
title: Reporting
---


# API

This is a guide of all Report API endpoints for KMHFR


## api reporting_list

<a id="opIdapi_reporting_list"></a>

> Code samples

```javascript

fetch('http://api.kmhfr.health.go.ke/api/reporting/',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/reporting/`

<h3 id="api_reporting_list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

:::info
To perform this operation, you must be authenticated by means of one of the following methods:
Basic
:::

## api reporting_chul_list

<a id="opIdapi_reporting_chul_list"></a>

> Code samples

```javascript

fetch('http://api.kmhfr.health.go.ke/api/reporting/chul/',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/reporting/chul/`

<h3 id="api_reporting_chul_list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

:::info
To perform this operation, you must be authenticated by means of one of the following methods:
Basic
:::

## api reporting_upgrades_downgrades_list

<a id="opIdapi_reporting_upgrades_downgrades_list"></a>

> Code samples

```javascript

fetch('http://api.kmhfr.health.go.ke/api/reporting/upgrades_downgrades/',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/reporting/upgrades_downgrades/`

<h3 id="api_reporting_upgrades_downgrades_list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

:::info
To perform this operation, you must be authenticated by means of one of the following methods:
Basic
:::

