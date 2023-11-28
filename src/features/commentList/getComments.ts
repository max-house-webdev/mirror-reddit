import { getHoursDifference } from '../../../utils/functions/getHoursDifference';

import type { ICommentProps } from '../../components/smart/Comment';

export interface IRedditCommentData {
  data: {
    children: {
      data: {
        id: string;
        author?: string;
        // avatarSrc: string;
        body?: string;
        selftext?: string;
        sr_detail?: {
          description?: string;
        };
        created?: string;
        subreddit: string;
      };
    }[];
  };
}

function getAvatarSrc() {
  const avatarArr = [
    'https://www.redditstatic.com/avatars/defaults/v2/avatar_default_2.png',
    'https://www.redditstatic.com/avatars/defaults/v2/avatar_default_4.png',
    'https://www.redditstatic.com/avatars/defaults/v2/avatar_default_7.png',
  ];

  const random = Math.random();

  if (random < 0.3) return avatarArr[0];

  if (random < 0.6) return avatarArr[1];

  return avatarArr[2];
}

export function getComments(args: IRedditCommentData[]): ICommentProps[] {
  const commentArray: ICommentProps[] = [];

  args.map((item) => {
    const { data } = item;
    const { children } = data;

    children.map((child) => {
      const { id, author, body, selftext, sr_detail, created, subreddit } =
        child.data;
      let description = '';

      if (sr_detail && sr_detail.description) {
        description = sr_detail.description;
      }

      const comment: ICommentProps = {
        id,
        author: author ? author : 'unknown',
        avatarSrc: getAvatarSrc(),
        createdAt: getHoursDifference(Number(created))
          ? (getHoursDifference(Number(created)) as string)
          : '',
        subreddit: subreddit ? subreddit : '',
        value: body || selftext || description || 'no comment',
      };

      commentArray.push(comment);
    });
  });

  return commentArray;
}
