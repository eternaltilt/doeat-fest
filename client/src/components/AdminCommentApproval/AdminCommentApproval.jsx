import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { restaurantCommentsFetch } from '../../redux/thunk';
import CommentsToApprove from './CommentsToApprove';
import style from './AdminCommentApproval.module.css';

function AdminCommentApproval() {
  const dispatch = useDispatch();
  const { comments } = useSelector((state) => state.restaurantReducer);
  console.log('COMMENTS ADMIN ', comments);

  useEffect(() => {
    dispatch(restaurantCommentsFetch());
  }, [dispatch]);

  return (
    <div className={style.Formapp}>
      <h1>Комменты на утверждение</h1>
      { comments.map((comment) => comment.status === false && <CommentsToApprove id={comment.id} username={comment.username} text={comment.text} restId={comment.restaurantCard_id}/> ) }
    </div>
  );
}

export default AdminCommentApproval;
