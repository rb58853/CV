import axios from 'axios';
const TOKEN = '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'
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
export async function retrieveContributionData(userName = 'rb58853') {
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