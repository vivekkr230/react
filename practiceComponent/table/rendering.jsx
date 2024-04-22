export function TableConditionalRendering(props){
    return(
        <div classname="container-fluid">
            <table classname="table table-hover caption-top">
                <caption>{props.caption}</caption>
                <tbody>
                    <tr>
                        {
                            props.column.map(entry=>
                                <th key={entry}>{entry}</th>)
                        }
                    </tr>
                </tbody>
            </table>
        </div>
    )
}