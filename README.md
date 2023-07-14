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
