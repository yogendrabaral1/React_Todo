const initialState = {
  dataFromInput: [],
  completedList: [],
  hey: "hi"
};

export const ourReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DATA':
      return {
        ...state,
        dataFromInput: [...state.dataFromInput, action.payload]
      }

    case 'UPDATE':
      var pushToComplete = state.dataFromInput[action.payload];
      var newDataFromInput = [...state.dataFromInput];
      newDataFromInput.splice(action.payload, 1);
      console.log(newDataFromInput);
      console.log(pushToComplete);
      return {
        ...state,
        dataFromInput: [...newDataFromInput],
        completedList: [...state.completedList, pushToComplete]
      }

    case 'UPDATECOM':
      var pushToDo = state.completedList[action.payload];
      var newCompletedList = [...state.completedList];
      newCompletedList.splice(action.payload, 1);
      console.log(newCompletedList);
      console.log(pushToDo);
      return {
        ...state,
        dataFromInput: [...state.dataFromInput, pushToDo],
        completedList: [...newCompletedList]
      }

    case 'DELETECOM':
      var newCompletedList = [...state.completedList];
      newCompletedList.splice(action.payload, 1);
      return {
        ...state,
        completedList: [...newCompletedList]
      }

    case 'DELETETODO':
      var newDataFromInput = [...state.dataFromInput];
      newDataFromInput.splice(action.payload, 1);
      return {
        ...state,
        dataFromInput: [...newDataFromInput]
      }

    default:
      return state;

  }
}