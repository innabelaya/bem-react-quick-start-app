import React, {Fragment} from 'react';
import { decl } from 'bem-react-core';
import { Bem } from 'bem-react-core';
import Board from 'b:Board';

export default decl({
    block: 'Game',
    content() {
        return (
            <Fragment>
                <Bem elem="Board">
                    <Board/>
                </Bem>
            </Fragment>
        );
    }
});

