import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { restaurantCommentsFetch } from '../../redux/thunk';
import CommentsToApprove from './CommentsToApprove'

function AdminCommentApproval() {
  const dispatch = useDispatch();
  const { comments } = useSelector((state) => state.restaurantReducer);
  console.log('COMMENTS ADMIN ', comments);

  useEffect(() => {
    dispatch(restaurantCommentsFetch());
  }, [dispatch]);

  return (
    <div>
      <h1>Комменты на утверждение</h1>
      { comments.map((comment) => comment.status === false && <CommentsToApprove id={comment.id} username={comment.username} text={comment.text} status={comment.status} restId={comment.restaurantCard_id}/> ) }
    </div>
  );
}

export default AdminCommentApproval;
