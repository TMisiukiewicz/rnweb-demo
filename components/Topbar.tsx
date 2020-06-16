import React, { useCallback } from 'react';
import { Appbar } from 'react-native-paper';

interface Props {
    title?: string;
    subtitle?: string;
    withBack?: boolean
}
const Topbar = ({title, subtitle, withBack}: Props) => {
    const onBack = useCallback(() => {
        console.log('go back');
    }, []);

    return (
        <Appbar.Header>
            {withBack && <Appbar.BackAction onPress={onBack} />}
            <Appbar.Content title={title} subtitle={subtitle} />
        </Appbar.Header>
    )
}

export default Topbar;