import './Button.scss'
export default function Button(props) {
  return (
    <button className='btn' onClick={props.functionToDo}>{props.value}</button>
  )
}
