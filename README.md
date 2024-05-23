## `/api/feed`

This endpoint fetches data from an external source to provide a feed of content.

- **Method**: GET
- **URL**: `/api/feed`
- **Headers**:
  - `Accept`: application/json
  - `Prefer`: code=200, dynamic=true

### Response

The endpoint returns a JSON object with the following structure:

```json
{
  "contentCards": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "imageUri": "https://picsum.photos/500/500",
      "textData": {
        "title": "string",
        "subTitle": "string",
        "body": "This is the body",
        "author": {
          "first": "string",
          "last": "string"
        }
      },
      "metadata": {
        "priority": 100,
        "publishDate": "2019-08-24T14:15:22Z"
      },
      "comments": [
        {
          "text": "string",
          "author": "string",
          "profilePic": "https://picsum.photos/200",
          "likes": 0
        }
      ]
    },
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "imageUri": "https://picsum.photos/500/500",
      "textData": {
        "title": "string",
        "subTitle": "string",
        "body": "This is the body",
        "author": {
          "first": "string",
          "last": "string"
        }
      },
      "metadata": {
        "priority": 0,
        "publishDate": "2019-08-24T14:15:22Z"
      },
      "comments": [
        {
          "text": "string",
          "author": "string",
          "profilePic": "https://picsum.photos/200",
          "likes": 0
        }
      ]
    }
  ]
}
```
