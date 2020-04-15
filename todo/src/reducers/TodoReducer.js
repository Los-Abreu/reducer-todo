export const initialState = [
    {
      item: 'Learn about reducers',
      completed: false,
      id: 3892987589
    }
  ];

export const todoReducer = (state, action) => {
    switch(action.type){
        case 'ADD_TODO':
            return [
                ...state,
                {
                    item: action.payload,
                    completed: false,
                    id: new Date()
                }
            ];
        case 'TOGGLE_TODO':
            return state.map(newTodo => newTodo.id === action.payload.id ? {...newTodo, completed: ! newTodo.completed}: newTodo)
        case 'CLEAR':
            return state.filter(todo => !todo.completed)
            default: return state;
    }
}
