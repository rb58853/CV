import requests

# Define tu token de acceso personal de GitHub aquí
TOKEN = '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'

# La consulta GraphQL que quieres enviar
query = """
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
"""

def retrieve_contribution_data(user_name='rb58853'):
    # Prepara las variables para la consulta
    variables = {"userName": user_name}
    
    # Crea el cuerpo de la solicitud con la consulta y las variables
    body = {
        "query": query,
        "variables": variables
    }
    
    # Configura los encabezados de la solicitud
    headers = {
        "Authorization": f"Bearer {TOKEN}",
        "Content-Type": "application/json"
    }
    
    try:
        # Realiza la solicitud POST al API de GraphQL de GitHub
        response = requests.post('https://api.github.com/graphql', json=body, headers=headers)
        
        # Verifica si la respuesta es exitosa
        if response.status_code == 200:
            # Devuelve los datos de la respuesta como un diccionario de Python
            return response.json()
        else:
            raise Exception(f"Query failed to run by returning code of {response.status_code}.")
    except Exception as e:
        print("Error fetching data:", e)
        raise e

# Ejemplo de uso
data = retrieve_contribution_data('rb58853')
print(data)
