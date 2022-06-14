import {instance} from "./settings";

export type PostsType = {
    userId: number
    id: number
    title: string
    body: string
}


export const postsAPI = {
    getPosts() {
        return instance.get<Array<PostsType>>('posts')
    },
    // getCurrentUserPost(userID: number) {
    //     debugger
    //
    //     return instance.get(`users/${userID}`)
    //         .then(res => res.data)
    // }

}