import PropTypes from 'prop-types';
import { ButtonLoad } from './Button.styled';

export const Button = ({ onclick }) => {
    return (
        <ButtonLoad type="button" onClick={onclick}>
            Load More
        </ButtonLoad>
    )
}

ButtonLoad.propTypes = {
  onClick: PropTypes.func,
};