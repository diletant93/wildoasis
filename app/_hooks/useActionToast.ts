import { toast } from "sonner";
import { ActionResponse } from "../_types/actionResponse";

export function useActionToast(){
    function actionToast(response:ActionResponse){
        if(response.status === 'error') toast.error(response.message, {
            style:{
                backgroundColor:'#F8D7DA',
                color:'black'
            }
        })
        if(response.status === 'success') toast.success(response.message,{
            style:{
                backgroundColor:'#D4EDDA',
                color:'black'
            }
        })
    }
    return actionToast
}