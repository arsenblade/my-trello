import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBoard } from "../../types/board.types";
import { getStoreLocal } from "../../utils/userLocalStorage";
import { addSection, addTask, createBoard, deleteBoard, deleteSection, deleteTask, getBoards } from "./board.actions";

interface IInitialStateBoard {
  boards: IBoard[],
  currentBoard: IBoard | null
  idCurrentSection: string,
  isLoading: boolean,
  error: '',
}

const initialState: IInitialStateBoard = {
  boards: [],
  currentBoard: null,
  idCurrentSection: '',
  isLoading: false,
  error: ''
}

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    changeCurrentBoard: (state, action: PayloadAction<IBoard>) => {
      state.currentBoard = action.payload
    },
    addSectionId: (state, action: PayloadAction<string>) => {
      state.idCurrentSection = action.payload
    },
    clearSectionId: (state) => {
      state.idCurrentSection = ''
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getBoards.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getBoards.fulfilled, (state, {payload}) => {
      state.isLoading = false;
      state.boards = payload
    })
    .addCase(getBoards.rejected, (state) => {
      state.isLoading = false;
      state.boards = []
    })
    .addCase(createBoard.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(createBoard.fulfilled, (state, {payload}) => {
      state.isLoading = false;
      state.boards.push(payload)
    })
    .addCase(createBoard.rejected, (state) => {
      state.isLoading = false;
    })
    .addCase(deleteBoard.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(deleteBoard.fulfilled, (state, {payload}) => {
      state.isLoading = false;
      state.boards = state.boards.filter(board => board.id !== payload)
    })
    .addCase(deleteBoard.rejected, (state) => {
      state.isLoading = false;
    })
    .addCase(addSection.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(addSection.fulfilled, (state, {payload}) => {
      state.isLoading = false;
      const index = state.boards.findIndex(board => board.id === payload.id)
      state.boards[index].sections = payload.sections
    })
    .addCase(addSection.rejected, (state) => {
      state.isLoading = false;
    })
    .addCase(deleteSection.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(deleteSection.fulfilled, (state, {payload}) => {
      state.isLoading = false;
      const index = state.boards.findIndex(board => board.id === payload.boardId)
      state.boards[index].sections =  state.boards[index].sections.filter(section => section.idSection !== payload.sectionId)
    })
    .addCase(deleteSection.rejected, (state) => {
      state.isLoading = false;
    })
    .addCase(addTask.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(addTask.fulfilled, (state, {payload}) => {
      state.isLoading = false;
      console.log(payload);
      const index = state.boards.findIndex(board => board.id === payload.id)
      state.boards[index].sections = payload.sections
    })
    .addCase(addTask.rejected, (state) => {
      state.isLoading = false;
    })
    .addCase(deleteTask.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(deleteTask.fulfilled, (state, {payload}) => {
      state.isLoading = false;
      const indexBoard = state.boards.findIndex(board => board.id === payload.boardId)
      const indexSection = state.boards[indexBoard].sections.findIndex(section => section.idSection === payload.sectionId)
      state.boards[indexBoard].sections[indexSection].tasks = state.boards[indexBoard].sections[indexSection].tasks.filter(task => task.idTask !== payload.taskId)
    })
    .addCase(deleteTask.rejected, (state) => {
      state.isLoading = false;
    })
  }
})


export const {reducer} = boardSlice;