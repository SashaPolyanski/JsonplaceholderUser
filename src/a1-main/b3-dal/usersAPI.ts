import {instance} from "./settings";

type GeoUserType = {
    "lat": string
    "lng": string
}
type AddressUserType = {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: GeoUserType
}
type CompanyUserType = {
    "name": string
    "catchPhrase": string
    "bs": string
}
export type UsersType = {
    id: number
    name: string
    username: string
    email: string
    address: AddressUserType
    phone: string
    website: string
    company: CompanyUserType
}




export const usersAPI = {
    getUsers() {
        return instance.get<Array<UsersType>>('users')
    },
    getCurrentUser(userID: number) {
             return instance.get(`users/${userID}`)
            .then(res => res.data)
    }

}