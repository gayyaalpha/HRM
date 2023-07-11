import {createSlice} from '@reduxjs/toolkit';
import {AddNewIssue, AllIssueList} from '../types/issueInfo';

export interface IndustryState {
  allIssueList?: AllIssueList;
  addNewIssue?:AddNewIssue
}

const getAllIssueList = () :any=> {
    // return getArrayFromLocalStorage('profileInfo');
    return null
  };

const initialState: IndustryState = {
  allIssueList: getAllIssueList(),
  addNewIssue:undefined
};

export const IndustryIssueSlice = createSlice({
  name: 'IndustryIssue',

  initialState,

  reducers: {
    setAllIssues: (state, action) => {
      state.allIssueList = action.payload;
    },
    setAddNewIssue: (state, action) => {
        state.addNewIssue = action.payload;
      },
  },
});

export const {setAllIssues} = IndustryIssueSlice.actions;
export const {setAddNewIssue} = IndustryIssueSlice.actions;

export default IndustryIssueSlice.reducer;

export const selectAllIssueList = (state: any) =>state.industryIssue?.allIssueList;
export const selectAddNewIssue= (state: any) =>state.industryIssue?.addNewIssue;
