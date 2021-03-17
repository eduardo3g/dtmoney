import { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyle } from './styles/global';

export function App() {
  const [isNewTransactionModalOpened, setIsNewTransactionModalOpened] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpened(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpened(false);
  }

  return (
    <>
      <div className="App">
        <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
        <Dashboard />

        <NewTransactionModal
          isOpen={isNewTransactionModalOpened}
          onRequestClose={handleCloseNewTransactionModal}
        />
        <GlobalStyle />
      </div>
    </>
  );
}