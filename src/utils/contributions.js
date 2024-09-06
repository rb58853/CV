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
export async function retrieveContributionData(userName = 'rb58853') {
  let TOKEN = process.env.REACT_APP_GITHUB_TOKEN + "xxxxxxxxxx";
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