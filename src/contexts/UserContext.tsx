import {
  createContext,
  useState,
  PropsWithChildren,
  SetStateAction,
  Dispatch,
} from 'react'

export interface IRegistryData {
  firstName: string
  surname: string
  birthDate: string
  birthPlace: string
  cpf: string
}

interface UserContext {
  registryData: IRegistryData
  cpf: string
  setRegistryData: Dispatch<SetStateAction<IRegistryData>>
  setCpf: Dispatch<SetStateAction<string>>
}

export const UserContext = createContext({} as UserContext)

export const UserContextProvider = ({ children }: PropsWithChildren) => {
  const [registryData, setRegistryData] = useState<IRegistryData>(
    {} as IRegistryData
  )

  const [cpf, setCpf] = useState('')

  return (
    <UserContext.Provider
      value={{ registryData, cpf, setCpf, setRegistryData }}
    >
      {children}
    </UserContext.Provider>
  )
}
