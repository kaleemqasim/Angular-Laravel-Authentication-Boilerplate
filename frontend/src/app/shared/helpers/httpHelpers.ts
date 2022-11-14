import { HttpHeaders } from "@angular/common/http";

const httpHelpers = {
    httpHeaders: function(){
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type': 'application/json'
            })
        }
        return httpOptions;
    },
    emptyObject: function(obj: Object){
        return Object.keys(obj).length === 0;
    }
    
    
}

export default httpHelpers;