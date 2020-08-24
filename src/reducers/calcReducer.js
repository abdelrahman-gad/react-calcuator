

export const calcReducer = (state , action ) => {
     switch(action.type){
         case 'ac' : //clear
            console.log('ac action type clear');
            return state;
        case '2' : // * , / , + , - 
            console.log('arithmetic operation');
            console.log(action.payload);
            return state;
        case '1' : //user pushed on number
            console.log('typing number');
            console.log(action.payload);
            return state;
        case '3' : //equels
            console.log('= op ');
            console.log(action.payload);
            return state;
        default : //clear
            console.log('nothing happend');
            return state;
     } 
     
}

