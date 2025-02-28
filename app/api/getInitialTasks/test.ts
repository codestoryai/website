// This is a simple test script to verify the getInitialTasks API
// You can run this with ts-node or similar tools

async function testGetInitialTasks() {
  try {
    // Test default response
    const defaultResponse = await fetch('http://localhost:3000/api/getInitialTasks');
    const defaultData = await defaultResponse.json();
    console.log('Default response:', defaultData);

    // Test open-issues response
    const issuesResponse = await fetch('http://localhost:3000/api/getInitialTasks?type=open-issues');
    const issuesData = await issuesResponse.json();
    console.log('Open issues response:', issuesData);

    // Test repos response
    const reposResponse = await fetch('http://localhost:3000/api/getInitialTasks?type=repos');
    const reposData = await reposResponse.json();
    console.log('Repos response:', reposData);

    // Test empty response
    const emptyResponse = await fetch('http://localhost:3000/api/getInitialTasks?type=empty');
    const emptyData = await emptyResponse.json();
    console.log('Empty response:', emptyData);

    // Test error response
    const errorResponse = await fetch('http://localhost:3000/api/getInitialTasks?error=true');
    const errorData = await errorResponse.json();
    console.log('Error response:', errorData);
  } catch (error) {
    console.error('Test failed:', error);
  }
}

// Uncomment to run the test
// testGetInitialTasks();

export {}; 