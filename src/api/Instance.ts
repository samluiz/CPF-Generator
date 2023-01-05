import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://servicodados.ibge.gov.br/api/v1',
})
