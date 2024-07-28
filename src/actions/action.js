export const DATA = 'DATA';

export const addToDo = (inputData) => {
  return {
    type: "DATA",
    payload: inputData
  }
}

export const updateToDo = (inputData) => {
  return {
    type: "UPDATE",
    payload: inputData
  }
}

export const updateCompleted = (inputData) => {
  return {
    type: "UPDATECOM",
    payload: inputData
  }
}

export const deleteCompleted = (inputData) => {
  return {
    type: "DELETECOM",
    payload: inputData
  }
}

export const deleteToDo = (inputData) => {
  return {
    type: "DELETETODO",
    payload: inputData
  }
}