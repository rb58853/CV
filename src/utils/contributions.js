import axios from 'axios';
const query = `
query($userName:String!) {
  user(login: $userName){
    contributionsCollection {
      contributionCalendar {
        totalContributions
        weeks {
          contributionDays {
            contributionCount
            date
          }
        }
      }
    }
  }
}
`

export async function AssistantData() {
  const headers = {
    'Content-Type': 'application/json'
  };

  try {
    const response = await axios.get(
      'http://77.237.243.163:8001/my-keys/api/get/data/assistant',
      { headers }
    );
    return response.data;

  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw error;
  }
}

export async function retrieveContributionData(userName = 'rb58853') {
  let TOKEN = process.env.REACT_APP_GITHUB_TOKEN + "1234567890";
  TOKEN = TOKEN.slice(0, TOKEN.length - 10)
  const variables = { userName };
  const body = {
    query,
    variables
  };

  const headers = {
    Authorization: `Bearer ${TOKEN}`,
    'Content-Type': 'application/json'
  };

  try {
    const response = await axios.post(
      'https://api.github.com/graphql',
      body,
      { headers }
    );
    return response.data;
  }
  catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}