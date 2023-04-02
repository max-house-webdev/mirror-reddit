import { getHoursDifference } from '../../../utils/functions/getHoursDifference';
import { isImage } from '../../../utils/functions/isImage';

import { IRedditPostData, IPost } from './interface';

export function getPosts(args: IRedditPostData[]) {
  const posts: IPost[] = [];

  for (const item of args) {
    const { data } = item;

    const {
      id,
      author,
      title,
      thumbnail,
      created,
      score,
      num_comments,
      url,
      subreddit,
      subreddit_id,
      sr_detail,
    } = data;

    const {
      community_icon,
      header_img,
      banner_img,
      icon_img,
      public_description,
    } = sr_detail;

    const getImage = (image: string) => {
      const noImage =
        'https://katrangun.com.ua/image/cache/7d0597d8a1876ce8537e80ffaf06a8a3.png';

      return isImage(image) ? image : noImage;
    };

    const getCreatedAt = (created: number) => {
      return getHoursDifference(created) ? getHoursDifference(created) : '';
    };

    const post: IPost = {
      postId: id,
      url: url || '#url',
      title,
      description: public_description,
      preview: getImage(thumbnail),
      createdAt: getCreatedAt(created),
      headerImg: header_img,
      bannerImg: banner_img,
      commentsCounter: Number(num_comments),
      karmaCounter: Number(score),
      subreddit,
      subredditId: subreddit_id,
      authorName: author,
      authorAvatar: icon_img || community_icon || '',
      authorLink: sr_detail.url || '#author-link',
    };

    posts.push(post);
  }

  return posts;
}
