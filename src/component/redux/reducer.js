const initialState = {
  products: [],
  basket: [],
  favorite: [],
  bucket: [],
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCT":
      return {
        ...state,
        products: action.payload,
      };
    case "ADD_TO_BASKET":
      let findPro = state.basket.find((el) => el.id === action.payload.id);
      if (findPro) {
        return {
          ...state,
          basket: state.basket.map((el) =>
            el.id === action.payload.id
              ? { ...el, quantity: el.quantity + 1 }
              : el
          ),
        };
      } else {
        return {
          ...state,
          basket: [...state.basket, { ...action.payload, quantity: 1 }],
        };
      }
    case "DELETE":
      let DelFilter = state.basket.filter((el) => el.id !== action.payload.id);
      return {
        ...state,
        basket: DelFilter,
      };
    case "BUCKET":
      let DelFilte = state.basket.filter((el) => el.id !== action.payload.id);
      if (DelFilte) {
        return {
          ...state,
          bucket: [...state.bucket, action.payload],
        };
      }
    case "PLUS":
      return {
        ...state,
        basket: state.basket.map((el) =>
          el.id === action.payload.id
            ? { ...el, quantity: el.quantity + 1 }
            : el
        ),
      };
    case "ADD_TO_FAVORITE":
      let favo = state.favorite.find((el) => el.id === action.payload.id);
      if (favo) {
        return {
          ...state,
          favorite: state.favorite.filter((el) => el.id !== action.payload.id),
        };
      } else {
        return { ...state, favorite: [...state.favorite, action.payload] };
      }
    // case "BUCKET":
    // // let buckFind=state.basket.find((el)=> el.id === action.payload.id )
    // if(findPr){
    //   return{...state,basket: state.basket.find((el)=> el.id === action.payload.id )}
    // }
    default:
      return state;
  }
};
