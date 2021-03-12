
import Link from 'next/link';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const LinkButton = withStyles({
    root: {
        borderRadius: 7,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 15px',
        margin: '0 10px',
    },
    label: {
        textTransform: 'capitalize',
    },
})(Button);


export const NavLink = ({ title, url }) => {
    return (
        <div>
            <Link href={url}>
                <LinkButton>
                    <a>{title}</a>
                </LinkButton>
            </Link>
        </div>
    );
}

export default NavLink;