export type State = PostI[];

export interface PostI {
    id: string;
    title: string;
    description: string;
    category: string;
    imageURL: string;
    comments: Array<string>;
}