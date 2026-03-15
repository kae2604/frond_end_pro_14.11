
import {Button} from "react-bootstrap";

function LogBlock ({elementValue, deleteElement}) {

    return (
        <Button
            onClick={deleteElement}
            className="list-group-item list-group-item-action mb-3 text-center"
            type="button">
                {elementValue}
        </Button >
    )
}
export default LogBlock;