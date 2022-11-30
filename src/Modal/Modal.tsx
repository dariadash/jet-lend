import React from 'react';
import styled from 'styled-components';
import { ModalFooter } from './ModalFooter';

type IProps = {
    onClose: () => void,
    onComplete: () => void,
    isOpen: boolean,
    title: string,
}

export const Modal: React.FC<IProps> = ({
    title,
    isOpen,
    onClose,
    onComplete
}) => {


    if (!isOpen) {
        return null;
    }

    return (
        <Wrapper onClick={onClose}>
            <ModalWrapper onClick={(e) => e.stopPropagation()}>
                <CloseWrapper>
                    <CloseButton onClick={() => onClose()}>
                        x
                    </CloseButton>
                </CloseWrapper>
                <Header>{title}</Header>
                <div>
                    <Text>
                        Для данной функции применяются особые условия и правила пользования,
                        их необходимо подтвердить, нажав на кнопку "Подтвердить".
                    </Text>
                    <ModalFooter
                        onClose={onClose}
                        onComplete={onComplete}
                    />
                </div>
            </ModalWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    z-index: 20;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content:center;
    align-items: flex-start;
    position: fixed; 
    top: 0;
    left: 0;
    background-color: #11111199;
    overflow: hidden;
    overflow-anchor: auto;
    align-items: center;
`

const ModalWrapper = styled.div`
    max-width: 500px;
    border: none;
    border-radius: 6px;
    background-color: white;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    gap: 10px;
`

const Header = styled.h3`
    margin: 0;
`

const CloseWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`

const Text = styled.p`
    text-align: center;
    margin: 0;
`

const CloseButton = styled.button`
    border: none;
    background-color: white;
`