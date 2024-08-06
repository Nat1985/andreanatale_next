import useBlogStore from "@/app/zustand/blogStore";

export const Post = async ({ params }) => {
    console.log(params);
    return (
        <div className="text-white">
            Post
        </div>
    )
}

export default Post;