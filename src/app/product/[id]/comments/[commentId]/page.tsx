import React from "react";

type Params = {
  id: string,
  commentId:string
};
export default function CommentDetailt({params}:{params:Params}) {
  return <div>Comment {params.commentId} for {params.id} </div>;
}
