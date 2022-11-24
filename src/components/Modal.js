import Modal from 'react-bootstrap/Modal';
import {StyledButton} from './Button';
import {styled } from '@mui/material/styles';

export const StyledModal = styled(Modal)(() => (
    {
        [`.modal`]: {
            paddingRight: '0 !important'
        },
        [`.modal-content`]: {
            backgroundColor: '#FFF8F6',
            overflowY: 'scroll',
            maxHeight: '90vh',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        [`.modal-header`]: {
            borderBottom: 0,
        },
        [`.row`]: {
            marginBottom: '0.5rem',
        },
        h3: {
            color: '#E1963C',
            textAlign: 'center',
        },
        button: {
            margin: 'auto',
            display: 'block',
            outline: '0',
        },
        label: {
            fontWeight: 'bold',
        },
        'input, select': {
            maxWidth: '100%',
            borderRadius: '0.25rem',
            backgroundColor: 'transparent',
            border: '1px solid rgba(108, 106, 108, 0.6)',
            '&:focus, &:hover': {
                borderColor: '#E1963C',
            },
            '&:focus': {
                backgroundColor: 'white',
                outlineColor: 'var(--primary-color)',
            }
        },
    }
)) 

export const ConfirmModal = (props) => {
    const buttonStyle = {
        width: '80px',
        display: "inline-block",
        margin: "auto",
        marginRight: '1rem !important'

    }
    return (
        <StyledModal show = {true} centered backdrop="static" size="sm">
            <Modal.Header></Modal.Header>
            <Modal.Body>
                <h6 style = {{textAlign: "center"}}>{props.text}</h6>
                <div className="d-flex align-items-center justify-content-center">
                    <StyledButton style = {buttonStyle} onClick = {() => {props.open(""); props.openParent("") }}>Có</StyledButton>
                    <StyledButton style = {buttonStyle} onClick = {() => props.open("")}>Không</StyledButton>
                </div>
            </Modal.Body>
        </StyledModal>  
    )
}