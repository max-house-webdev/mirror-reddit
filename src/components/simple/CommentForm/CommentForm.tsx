import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';

import styles from './CommentForm.scss';

import { Button } from '../../../components';
import { useFocusWithRef } from '../../../../utils/hooks';

export interface ICommentForm {
  appealName: string;
  commentField: string;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export function CommentForm(props: ICommentForm) {
  const { appealName, commentField, onSubmit, onChange } = props;

  const textAreaRef = useFocusWithRef<HTMLTextAreaElement>(null);

  const [invite, setInvite] = useState(true);

  useEffect(() => {
    // remove invite
    if (commentField !== '') {
      setInvite(false);
    }
  }, [commentField]);

  return (
    <form className={styles.commentForm} onSubmit={onSubmit}>
      <legend className={styles.visuallyHidden}>Форма ввода комментария</legend>
      <div className={styles.textContainer}>
        {invite && (
          <label className={styles.usernameLabel}>
            {appealName}
            <span>{' оставьте комментарий'}</span>
          </label>
        )}

        <textarea
          ref={textAreaRef}
          name={'commentField'}
          className={styles.input}
          onChange={onChange}
          value={commentField}
        />
      </div>
      <Button type={'submit'} textContent={'Комментировать'} role={'primary'} />
    </form>
  );
}
