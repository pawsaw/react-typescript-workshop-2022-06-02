import { CSSProperties } from 'react';

const name = 'Pawel';

export interface SimpleNameProps {
    textStyle?: CSSProperties;
}

export const SimpleName: React.FC<SimpleNameProps> = ({ textStyle = {} }) => {
    return <p style={style.outerText}>Hello, <span style={{...style.nameText, ...textStyle}}>{name}</span></p>;
}

const style: Record<string, CSSProperties> = {
    outerText: {
        color: 'red'
    },
    nameText: {
        color: 'blue'
    }
};

