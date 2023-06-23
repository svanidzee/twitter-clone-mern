import CommentItem from './commentItem';

interface CommentFeedProps {
  comments?: Record<string, any>[];
}

const CommentFeed = ({ comments = [] }: CommentFeedProps) => {
  return (
    <>
      {comments.map((comment: Record<string, any>) => (
        <CommentItem key={comment.id} data={comment} />
      ))}
    </>
  );
};

export default CommentFeed;
