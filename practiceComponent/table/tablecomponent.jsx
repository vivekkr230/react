import {TableConditionalRendering} from './rendering'
export function TableActualComponent(porps){
    return(
        <div>
            <TableConditionalRendering caption="Students Data" column={["USN","SEM","BRANCH"]} />
        </div>

    )


    
}
