import React from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';

function SendButton(props) {
    const useStyles = makeStyles(theme => ({
        margin: {
            margin: theme.spacing(1),
        },
    }));
    const classes = useStyles();

    return (
        <Button
            type="submit"
            variant="contained"
            size="medium"
            color="primary"
            className={classes.margin}
            endIcon={<Icon>send</Icon>}
            disabled={!props.active}
        >
            Send
        </Button>
    );
}
export default SendButton;