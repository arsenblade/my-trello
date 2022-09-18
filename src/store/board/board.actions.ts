import { createAsyncThunk } from "@reduxjs/toolkit"
import { boardService } from "../../service/board/board"
import { IBoard } from "../../types/board.types"
import { IAddSections, IAddTask, ICreateBoards } from "./board.interface"


export const getBoards = createAsyncThunk<IBoard[], number>('getBoards', async (userId, thunkApi) => {
  try {
    const response = await boardService.getBoards(userId)
    return response
  } catch (e) {
    return thunkApi.rejectWithValue(e)
  }
})

export const createBoard = createAsyncThunk<IBoard, ICreateBoards>('createBoard', async ({titleBoard, userId}, thunkApi) => {
  try {
    const response = await boardService.createBoard(userId, titleBoard)
    return response
  } catch (e) {
    return thunkApi.rejectWithValue(e)
  }
})

export const deleteBoard = createAsyncThunk<string, string>('deleteBoard', async (boardId, thunkApi) => {
  try {
    const response = await boardService.deleteBoard(boardId)
    return response
  } catch (e) {
    return thunkApi.rejectWithValue(e)
  }
})

export const addSection = createAsyncThunk<IBoard, IAddSections>('addSection', async ({boardId, titleSection}, thunkApi) => {
  try {
    const response = await boardService.addSection(boardId, titleSection)
    return response
  } catch (e) {
    return thunkApi.rejectWithValue(e)
  }
})

export const addTask = createAsyncThunk<IBoard, IAddTask>('addTask', async ({userId, boardId, idSection, description, titleTask}, thunkApi) => {
  try {
    const response = await boardService.addTask(userId, boardId, idSection, titleTask, description)
    return response
  } catch (e) {
    return thunkApi.rejectWithValue(e)
  }
})