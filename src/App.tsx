import React, { useCallback, useState } from 'react';
import { css, ClassNames } from '@emotion/react';
import './App.css';
import { ChildArea } from './components/ChildArea';

function App() {
  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    return setText(e.target.value);
  };

  const onClickOpen = () => {
    setOpen(!open);
  };

  const onClickClose = useCallback(() => {
    setOpen(false);
  }, []);

  const containerStyle = css`
    background-color: #f0f0f0;
    padding: 20px;
    border-radius: 5px;
  `;

  return (
    <div className="App">
      <ClassNames>
        {({ css }) => <div className={css(containerStyle)}></div>}
      </ClassNames>
      <input value={text} onChange={onChangeText} />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}

export default App;
