import React, {Fragment} from 'react';
import { Bem, decl } from 'bem-react-core';
import Board from 'b:Board';

export default decl({
    block: 'Game',

    content() {
        return (
            <Fragment>
                <Board/>
                <Bem elem="Info"/>
            </Fragment>
        );
    }
});

