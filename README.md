## Endpoints

### Sign Up
```http
POST /auth/signup
```

| Body | Type | Description |
| :--- | :--- | :--- |
| `email` | `string` | **Required**. |
| `password` | `string` | **Required**. |

**Response**

```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ZDAwZWQ1LTI4NTQtNGFlYy1iN2E4LThlYzc2YzViMzc2YyIsImlhdCI6MTY4OTMxODA4MiwiZXhwIjoxNjk3MDk0MDgyfQ.HxliXFMUiiFYsckfQWwDw_OVlM-6XwPHKTLBpSyshlI"
}
```

---
## Login
```http
POST /auth/login
```

| Body | Type | Description |
| :--- | :--- | :--- |
| `email` | `string` | **Required**. |
| `password` | `string` | **Required**. |

**Response**

```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ZDAwZWQ1LTI4NTQtNGFlYy1iN2E4LThlYzc2YzViMzc2YyIsImlhdCI6MTY4OTMxODA4MiwiZXhwIjoxNjk3MDk0MDgyfQ.HxliXFMUiiFYsckfQWwDw_OVlM-6XwPHKTLBpSyshlI"
}
```
---

## Get Todos
```http
GET /todos
```

| Query key  | Type | Description |
| :--- | :--- | :--- |
| `isCompleted` | `boolean` | **Optional**. |
| `searchQuery` | `string` | **Optional**. |

**example endpoint with query key**
```http
GET /todos?isCompleted=true&searchQuery=firsts
```

**Response**

```json
[
    {
        "id": "795815b1-9434-4fb7-a62b-946af1f8419a",
        "text": "first todo",
        "isCompleted": false,
        "userId": "69d00ed5-2854-4aec-b7a8-8ec76c5b376c",
        "created_at": "2023-07-14T07:14:31.440Z",
        "updated_at": "2023-07-14T07:14:31.440Z"
    },
    {
        "id": "36f3c966-de93-4e72-afed-c3340ca692d7",
        "text": "second todo",
        "isCompleted": false,
        "userId": "69d00ed5-2854-4aec-b7a8-8ec76c5b376c",
        "created_at": "2023-07-14T07:15:14.613Z",
        "updated_at": "2023-07-14T07:15:14.613Z"
    }
]
```
---

## Create Todo
```http
POST /todos
```

| Body | Type | Description |
| :--- | :--- | :--- |
| `text` | `string` | **Required**. |

**Response**

```json
{
    "id": "36f3c966-de93-4e72-afed-c3340ca692d7",
    "text": "first todo",
    "isCompleted": false,
    "userId": "69d00ed5-2854-4aec-b7a8-8ec76c5b376c",
    "created_at": "2023-07-14T07:15:14.613Z",
    "updated_at": "2023-07-14T07:15:14.613Z"
}
```
---

## Edit Todo
```http
PATCH /todos/:id
```

| Parameter  | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | **Required**. |

| Body | Type | Description |
| :--- | :--- | :--- |
| `text` | `string` | **Optional**. |
| `isCompleted` | `boolean` | **Optional**. |

**Response**

```json
{
    "id": "36f3c966-de93-4e72-afed-c3340ca692d7",
    "text": "first todo",
    "isCompleted": false,
    "userId": "69d00ed5-2854-4aec-b7a8-8ec76c5b376c",
    "created_at": "2023-07-14T07:15:14.613Z",
    "updated_at": "2023-07-14T07:15:14.613Z"
}
```
---

## Delete Todo
```http
DELETE /todos/:id
```

| Parameter  | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | **Required**. |


**Response**

```json
{
    "id": "36f3c966-de93-4e72-afed-c3340ca692d7",
    "text": "first todo",
    "isCompleted": false,
    "userId": "69d00ed5-2854-4aec-b7a8-8ec76c5b376c",
    "created_at": "2023-07-14T07:15:14.613Z",
    "updated_at": "2023-07-14T07:15:14.613Z"
}
```
---
