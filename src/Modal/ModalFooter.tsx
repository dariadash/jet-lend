import React from 'react'
import styled, { css } from 'styled-components'

interface IProps {
    onComplete: () => void
    onClose: () => void
}

export const ModalFooter: React.FC<IProps> = ({ onComplete, onClose }) => {
    const [timer, setTimer] = React.useState(5)

    React.useEffect(() => {
        if (timer > 0) {
            const timeout = setTimeout(() => setTimer(timer - 1), 1000)
            return () => clearTimeout(timeout)
        }
    }, [timer])

    const disabled = timer > 0

    return (
        <ButtonsWrapper>
            <Button onClick={() => onClose()}>
                Отмена
            </Button>
            <Button
                onClick={() => !disabled && onComplete()}
                disabled={disabled}
            >
                Подтвердить
                {timer !== 0 && `(${timer})`}
            </Button>
        </ButtonsWrapper>
    )

}

type StyledProps = {
    disabled?: boolean;
}

const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 30px;
`

const Button = styled.button<StyledProps>`
    ${({ disabled }) => disabled && css`
        pointer-events: none;
        background-color: #e8e8e8;
    `}
    cursor: pointer;
    border: none;
    border-radius: 6px;
    background-color: #c7e0fa;
    padding: 15px 25px;
`