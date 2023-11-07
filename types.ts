export interface SignupUser {
    username: string;
    email: string;
    password: string;
    avatar?: any;
}

export type SignInUser = Omit<SignupUser, "username" | "avatar">;

export interface Follow {
    followers: number;
    followings: Number;
}

export interface SendPosts {
    content: string;
    type?: any;
    file?: any;
}

export interface PersonalPost {
    comments: Array<Commentary>;
    post: PersonalPostCard;
}

export interface Commentary {
    commentary:string,
    createdAt:string,
    updatedAt:string,
    post:string,
    user:{username:string, _id:string},
    _v:number,
    _id:string
}

export interface PersonalPostCard {
    author: { avatar: string; username: string; _id: string };
    content: string;
    file: string;
    likecnt: number;
    liketype: Boolean;
    type: string;
    createdAt: string;
    updatedAt: string;
    __v: Number;
    _id: string;
}

export type ReceivePosts = ProfilePersonalPost[];

export interface ProfilePersonalPost {
    author: string;
    content: string;
    createdAt:string;
    file:string;
    id: string;
    updatedAt:string;
    __v: Number;
    _id:string;
}

export interface CurrentUser {
    username: string;
    avatar: string;
}
