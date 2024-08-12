import axios from 'axios';
let TOKEN = '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xxxxxxxxxx'
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
  TOKEN = TOKEN.slice(0, TOKEN.length - 10)
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