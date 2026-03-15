
function ButtonBlock ({addNewElement}) {

    return (
        <div className='text-center'>
            <div className="btn-group font-monospace" role="group">
                <button
                    onClick={() => addNewElement(1)}
                    type="button"
                    className="btn btn-outline-success">
                        +
                </button>
                <button
                    onClick={() => addNewElement(-1)}
                    type="button"
                    className="btn btn-outline-danger">
                        -
                </button>
            </div>
        </div>
    )
}
export default ButtonBlock