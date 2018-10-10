import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

const Colors = (props) => {
    const {colors} = props;
    return(
        <table className={style.component}>
            <thead>
                <tr><th>Color</th><th>Code</th></tr>
            </thead>
            <tbody>
                {
                    colors.map((entry) => {
                        const {name, rgb} = entry;
                        return (<tr key={name}><td>{name}</td><td>{rgb}</td></tr>)
                    })
                }
            </tbody>
        </table>
    )
}

Colors.propTypes = {
    colors: PropTypes.array
}

Colors.defaultProps = {
    colors: [
        {name: 'red', rgb: 'ff0000'},
        {name: 'green', rgb: '00ff00'},
        {name: 'blue', rgb: '0000ff'}
    ]
}

export default Colors;
