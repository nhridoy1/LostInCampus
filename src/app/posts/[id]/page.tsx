

export default async function Page({params}: {params: {id: string} }) {

    const id = params.id;
    const response = await fetch(`https://dummyjson.com/posts/${id}`)
    const singlePost = await response.json();


    return (
        <div className="p-4">
            <h3>This is Post details Page</h3>
            <h1 className="text-2xl font-bold mb-2">{singlePost.title}</h1>
            <p className="text-gray-700">{singlePost.body}</p>
        </div>
    )
}