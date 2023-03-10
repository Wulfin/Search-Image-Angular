export class Photo {
  id: number
  pageURL: string
  type: string
  tags: string
  previewURL: string
  webformatURL: string
  largeImageURL: string
  likes: number
  comments: number
  user_id: number
  user: string
  userImageURL: string


  constructor(id: number, pageURL: string, type: string, tags: string, previewURL: string, webformatURL: string, largeImageURL: string, likes: number, comments: number, user_id: number, user: string, userImageURL: string) {
    this.id = id;
    this.pageURL = pageURL;
    this.type = type;
    this.tags = tags;
    this.previewURL = previewURL;
    this.webformatURL = webformatURL;
    this.largeImageURL = largeImageURL;
    this.likes = likes;
    this.comments = comments;
    this.user_id = user_id;
    this.user = user;
    this.userImageURL = userImageURL;
  }
}
