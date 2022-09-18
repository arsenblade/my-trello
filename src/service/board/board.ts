import { async } from "q"
import { axiosPublic } from "../../api/interceptors"
import { getBoardsUrl } from "../../constant/serverPath"
import { IBoard, ISection, ITask } from "../../types/board.types"
import { convertDate } from "../../utils/convertDate"
const uuid = require("uuid")


export const boardService = {
  async getBoards(userId: number) {
    const response = await axiosPublic.get<IBoard[]>(getBoardsUrl())
    const filteredBoards = response.data.filter(board => board.usersOnBoard.some(usOnBoard => usOnBoard === userId))

    return filteredBoards
  },

  async createBoard(userId: number, titleBoard: string) {
    const defaultBoard: IBoard = {
      id: uuid.v4(),
      titleBoard,
      usersOnBoard: [userId],
      sections: []
    }

    const response = await axiosPublic.post<IBoard>(getBoardsUrl(), defaultBoard)

    return response.data
  },

  async deleteBoard(boardId: string) {
    const response = await axiosPublic.delete<IBoard>(getBoardsUrl(boardId))
    return boardId
  },

  async addSection(boardId: string, titleSection: string) {
    const response = await axiosPublic.get<IBoard[]>(getBoardsUrl())
    const filteredBoard = response.data.find(board => board.id === boardId)

    if(filteredBoard) {
      const section: ISection = {
        idSection: uuid.v4(),
        titleSection,
        tasks: []
      }

      filteredBoard.sections.push(section)

      const {data} = await axiosPublic.put<IBoard>(getBoardsUrl(boardId), filteredBoard)

      return data
    }
    else {
      throw new Error('Error server');
    }
  },

  async addTask(userId: number, boardId: string, idSection: string, titleTask: string, description: string) {
    const response = await axiosPublic.get<IBoard[]>(getBoardsUrl())
    const filteredBoard = response.data.find(board => board.id === boardId)
    const filteredSectionId = filteredBoard?.sections.findIndex(section => section.idSection === idSection)

    if(filteredSectionId !== undefined && filteredSectionId >= 0 && filteredBoard) {
      const task: ITask = {
        idTask: uuid.v4(),
        titleTask,
        description,
        idUser: userId,
        createdAt: convertDate(String(Date.now()))
      }

      filteredBoard.sections[filteredSectionId].tasks.push(task)

      const response = await axiosPublic.put<IBoard>(getBoardsUrl(boardId), filteredBoard)

      return response.data
    }
    else {
      throw new Error('Error server');
    }
  }
}