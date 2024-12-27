import { blogsData } from "$lib/server";

export function load({params}){
    const id: number = Number(params.slug)

    const blog = blogsData.filter(
        item => item.id == id
    )[0]

    return {blog}
}