import Button from 'react-bootstrap/Button';
import {styled } from '@mui/material/styles';

export const StyledButton = styled(Button)(() => ({
    backgroundColor: '#E1963C',
    border: 0,
    color: 'black',
    fontWeight: 'bold',
    '&:active, &:hover': {
        backgroundColor: 'black !important',
        color: 'white',
    }
}))