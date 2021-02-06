export enum StoriesTypes {
   GET_STORIES = 'GET_STORIE'
}

export interface AllStories {
  user: string;
  userPicture: string;
  time: string;

}

export interface Stories {
    arrayStories:AllStories[]
  }
  
  export interface TodosState {
    todos: Stories
  }


 
  