
export interface ICreateBoards {
  userId: number, 
  titleBoard: string
}

export interface IAddSections {
  boardId: string, 
  titleSection: string
}

export interface IAddTask {
  userId: number,
  boardId: string,
  idSection: string,
  titleTask: string,
  description: string
}