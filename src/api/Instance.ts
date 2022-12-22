import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://servicodados.ibge.gov.br/api/v1',
})

// axios
//   .get(`${BASEURL}/localidades/estados?orderBy=nome`)
//   .then((response) => (states = response.data))
//   .catch((error) => console.log(error))
