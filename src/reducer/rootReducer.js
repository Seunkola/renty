export default (state,action) => {
    switch(action.type) {
        case "progressChange":
            return {
                ...state,
                progress: action.payload
            };
        case "location":
            return {
                ...state,
                location: action.payload
            };
        case "Car":
            return {
                ...state,
                Car: action.payload
            }
        default:
            return state;
    }
}