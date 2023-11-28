export interface Isr_detail {
  community_icon: string;
  header_img: string;
  banner_img: string;
  icon_img: string;
  url: string;
  public_description: string;
}

export interface IRedditPostData {
  data: {
    // post id
    id: string;
    // author
    author: string;
    // post title
    title: string;
    // preview
    thumbnail: string;
    // created date
    created: number;
    // karma
    score: string;
    // number of comments
    num_comments: string;
    // preview
    url: string;
    // post data
    sr_detail: Isr_detail;
    subreddit: string;
    subreddit_id: string;
  };
}

export interface IPost {
  postId: string;
  url: string;
  title: string;
  description: string;
  preview: string;
  createdAt: string;
  headerImg: string;
  bannerImg: string;
  commentsCounter: number;
  karmaCounter: number;
  subreddit: string;
  subredditId: string;
  authorName: string;
  authorAvatar: string;
  authorLink: string;
}
