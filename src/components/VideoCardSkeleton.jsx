import * as React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Skeleton from '@mui/material/Skeleton';
import { MdMoreVert } from "react-icons/md";
function Media(props) {
    const { loading = false } = props;

    return (
        <Card sx={{ maxWidth: 345, m: 2 }}>
            <CardHeader
                avatar={
                    loading ? (
                        <Skeleton animation="wave" variant="circular" width={40} height={40} />
                    ) : (
                        ''
                    )
                }
                action={
                    loading ? null : (
                        ''
                    )
                }
                title={
                    loading ? (
                        <Skeleton
                            animation="wave"
                            height={10}
                            width="80%"
                            style={{ marginBottom: 6 }}
                        />
                    ) : ''
                }
                subheader={
                    loading ? (
                        <Skeleton animation="wave" height={10} width="40%" />
                    ) : ''
                }
            />
            {loading ? (
                <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
            ) : ''}

        </Card>
    );
}

Media.propTypes = {
    loading: PropTypes.bool,
};

export default function Facebook() {
    return (
        <div>
            <Media loading />
            <Media />
        </div>
    );
}
