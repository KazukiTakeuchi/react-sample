import React, { createContext, useContext } from 'react'

const TitleContext = createContext('');

const Title = () => {
  return (
    <TitleContext.Consumer>
      {(title) => {
        return <h1>{title}</h1>
      }}
    </TitleContext.Consumer>
  )
};

const Header = () => {
  return (
    <div>
      <Title />
    </div>
  )
};

const Page = () => {
  const title = 'React';

  return (
    <TitleContext.Provider value={title}>
      <Header />
    </TitleContext.Provider>
  );
};

export default Page;
