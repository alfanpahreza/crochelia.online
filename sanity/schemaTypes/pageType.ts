import { defineField,defineType } from "sanity";

export const pageType = defineType({
    name:"page",
    title:"Page",
    type: 'document',
    fields:[
    defineField({
        name:"title",
        title:"Title",
        type:"string"
    }),
    ]
})