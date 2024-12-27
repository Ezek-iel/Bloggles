import { fail, type Actions } from "@sveltejs/kit";

export const actions = {
    default: async({request}) =>{
        const data = await request.formData()
        const title = data.get('title')!
        const content = data.get("content")!
        const tags = data.get("tags")

        if (!title){
            return fail(400, {title, titleMissing: true})
        }
        if (!content){
            return fail(400, {title, titleMissing: true})
        }
        if (!tags){
            return fail(400, {title, titleMissing: true})
        }
    }
} satisfies Actions