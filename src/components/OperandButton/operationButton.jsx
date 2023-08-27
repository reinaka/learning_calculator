export const OperandButton = ({operation, onClickHandler}) => {
    return (
        <div className="button" onClick={() => onClickHandler(operation)}>{operation}</div>
    )
}