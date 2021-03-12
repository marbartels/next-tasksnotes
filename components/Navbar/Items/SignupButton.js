import Link from 'next/link';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const SpecialButton = withStyles({
    root: {
        borderRadius: 7,
        border: 0,
        height: 45,
        padding: '0 30px',
        color: "white",
        backgroundColor: "#eb8634",
        margin: '0 10px',
        "&:hover": {
            //you want this to be the same as the backgroundColor above
            backgroundColor: "orange",
        }
    },
    label: {
        textTransform: 'capitalize',
    },
})(Button);

const SignupButton = ({ url }) => {
    return (
        <Link href={url}>
            <SpecialButton variant="contained">
                Signup
            </SpecialButton>
        </Link>
    );
}

export default SignupButton;