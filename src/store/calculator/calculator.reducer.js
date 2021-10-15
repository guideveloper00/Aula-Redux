export default function (state = 50, action) {
    switch(action.type){
        case "aaa": return action.payload[0] + action.payload[1]

        default: return state
    }
}