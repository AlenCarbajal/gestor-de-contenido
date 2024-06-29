import { useState } from "react"

interface Props {
    resources: Array<any>;
}
/*
const resourceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  author: { type: String, required: true },
  categories: { type: [String], required: true },
  tags: { type: Schema.Types.ObjectId, ref: 'Tag' }
},{timestamps: true});
*/
function ResourceTable({ resources }: Props){    
    return (
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Body</th>
                    <th>Author</th>
                    <th>Categories</th>
                    <th>Tags</th>

                </tr>
            </thead>
            <tbody>
            {resources.map((resource, index) => (
                    <tr key={index}>
                        <td>{resource.title}</td>
                        <td>{resource.body}</td>
                        <td>{resource.author}</td>
                        <td>{resource.categories}</td>
                        <td>{resource.tags.map((tag:any) => tag.name)}</td>
                    </tr>
                ))}

            </tbody>
        </table>
    )
}

export {ResourceTable}