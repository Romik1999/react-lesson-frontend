export interface IPropsLogin {
    setPassword: (value: string) => void, //так функция ничего не возвращает а проинимаемое значение - строка
    setEmail: (value: string) => void, //так функция ничего не возвращает а проинимаемое значение - строка
    navigate: (to: string) => void
}

export interface IPropsRegister {
    setPassword: (value: string) => void,
    setEmail: (value: string) => void
    setRepeatPassword: (value: string) => void
    setFirstName: (value: string) => void
    setUserName: (value: string) => void,
    navigate: (to: string) => void
}

export interface IAuthState {
    user: IPublicUser,
    isLogged: boolean
}

interface IPublicUser {
    id: number | null,
    firstName: string,
    username: string,
    email: string,
    createdAt: string,
    updatedAt: string,
    watchList: [IWatchList]
}

interface IWatchList {
    id: number | null,
    name: string,
    assetId: string,
    createdAt: string,
    updatedAt: string,
    user: number | null
}