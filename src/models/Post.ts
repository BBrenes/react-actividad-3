export type State = Post[];

export interface Post {
    id: string;
    title: string;
    description: string;
    category: string;
    imageURL: string;
    comments: Array<string>;
}