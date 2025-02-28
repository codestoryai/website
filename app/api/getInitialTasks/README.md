# getInitialTasks API

This is a mock API endpoint that simulates fetching initial tasks for the AgentFarm application. It returns different types of data based on the query parameters.

## Endpoint

```
GET /api/getInitialTasks
```

## Query Parameters

- `type` (optional): The type of data to return. Possible values:
  - `open-issues`: Returns a list of open GitHub issues
  - `repos`: Returns a list of GitHub repositories
  - `empty`: Returns an empty data response
  - If not specified, a random type will be returned

- `error` (optional): If set to `true`, the API will simulate an error response

## Response Types

### Open Issues

```typescript
{
  type: 'open-issues',
  data: {
    issues: Array<{
      title: string;
      number: number;
      url: string;
      openedBy: string;
      openedAt: string;
      repo: {
        name: string;
        description: string;
        owner: string;
        id: string;
      }
    }>,
    totalCount: number;
  }
}
```

### Repositories

```typescript
{
  type: 'repos',
  data: {
    repos: Array<{
      name: string;
      description: string;
      owner: string;
      id: string;
    }>,
    totalCount: number;
  }
}
```

### Empty Data

```typescript
{
  type: 'empty'
}
```

### Error Response

```typescript
{
  error: string
}
```

## Usage

This API is used by the `InitialTasks` component to display different UI states based on the response type:

1. For `open-issues`, it displays a list of issues with checkboxes and a "Go!" button
2. For `repos`, it displays a list of repositories with links to create new issues
3. For `empty`, it displays a message that the application only works with GitHub
4. For error responses, it displays an error message with a retry button

## Testing

You can test this API using the included `test.ts` script:

```bash
# Install ts-node if you don't have it
npm install -g ts-node

# Run the test script
ts-node app/api/getInitialTasks/test.ts
``` 