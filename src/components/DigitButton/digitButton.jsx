export const DigitButton = ({digit, onClickHandler}) => {
    return (
        <div className="button" onClick={() => onClickHandler(digit)}>{digit}</div>
    )
}