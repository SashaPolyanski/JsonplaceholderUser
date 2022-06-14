import {instance} from "./settings";

export type PostsType = {
    userId: number
    id: number
    title: string
    body: string
}

export const postsAPI = {
    getPosts() {
        return instance.get<PostsType[]>('posts')
    },
    getCurrentUserPost(userID: number) {
        return instance.get(`posts/?userId=${userID}`)
            .then(res => res.data)
    }
}