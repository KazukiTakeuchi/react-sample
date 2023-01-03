const Hello = () => {
  const onClick = () => {
    alert('hello');
  }
  const text = 'hello, world';

  return (
    <div onClick={onClick}>{ text }</div>
  )
}

export default Hello;
