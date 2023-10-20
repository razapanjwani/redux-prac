import data from "src/app/todo.json"
const Post = () => {
    return(
        <>
            <div>
                <h1>post Page</h1>
                {data.map((items,i)=>{
                    return <p className="p-2 font-bold text-xl" key={i}>{items.title}</p>
                })}
            </div>
        </>
    )
}
export default Post;