import React from 'react';
import styled from 'styled-components';
import { Modal } from './Modal/Modal';

function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [completed, setCompleted] = React.useState(false);

  React.useEffect(() => {
    if (completed) {
      alert('Выполнено действие!')
      setIsOpen(false)
    }
  }, [completed])

  const handleOpenModal = () => {
    if (!completed) {
      setIsOpen(true);
      return;
    }
    alert('Выполнено действие!')
  }

  return (
    <AppWrapper>
      {!isOpen ?
        <Button
          onClick={handleOpenModal}>
          Выполнить действие
        </Button>
        :
        <Modal
          title='Согласие с правилами'
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onComplete={() => setCompleted(true)}
        />
      }
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 500px;
`

const Button = styled.button`
  border: none;
  border-radius: 6px;
  background-color: #c7e0fa;
  padding: 15px 25px;
`