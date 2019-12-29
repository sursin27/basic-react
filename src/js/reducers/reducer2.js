let initial=0;
export const IncreReducer=(state=initial,action)=>{
    switch(action.type){
        case 'increment':
            return 27
        default:
            return 28
    }

}