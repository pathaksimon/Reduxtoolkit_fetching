const Iterate = props => {
  const {first} = props
  const {id, displayText} = first

  return <option value={displayText}>{displayText}</option>
}

export default Iterate
