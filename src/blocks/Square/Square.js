import { decl } from 'bem-react-core';

export default decl({
    block : 'Square',

    tag: 'button',

    attrs({ onClick }) {
        return { onClick };
    }
});
