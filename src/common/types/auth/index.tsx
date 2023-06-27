export interface IPropsLogin {
    setPassword: (value: string) => void, //так функция ничего не возвращает а проинимаемое значение - строка
    setEmail: (value: string) => void //так функция ничего не возвращает а проинимаемое значение - строка
}

export interface IPropsRegister{
    setPassword: (value: string) => void,
    setEmail: (value: string) => void
    setRepeatPassword: (value: string) => void
    setFirstName: (value: string) => void
    setUserName: (value: string) => void
}