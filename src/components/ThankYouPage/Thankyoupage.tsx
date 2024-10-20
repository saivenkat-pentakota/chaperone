import { useNavigate } from "react-router-dom";
import { StyledButton, StyledContainer, StyledThankyoupageContainer, StyledCloseButton } from "./Thankyoupage.style";
import plant from '../../images/plant.png';

export default function Thankyoupage() {
    const navigate = useNavigate();

    const handleClose = () => {
        navigate('/'); 
    };

    return (
        <StyledThankyoupageContainer>
            <StyledContainer>
                <StyledCloseButton onClick={handleClose}>✖</StyledCloseButton> 
                <p>Your Cart</p>
                <hr/>
                <h3>Congratulations <br/>Order Placed!</h3>
                <img src={plant} alt="plant" />
                <p>Thank you for choosing Chaperone services.<br/>We will soon get in touch with you!</p>
                
                <StyledButton>CONTINUE SHOPPING</StyledButton>
            </StyledContainer>
        </StyledThankyoupageContainer>
    );
}