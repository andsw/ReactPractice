/**
 * Created by HeShaowen on 2020/7/20.
 */
import React from 'react';

export default function FunctionComponent(props) {
    return <div>{props.data}</div>
}

FunctionComponent.defaultProps = {
    data: "this is default data content of FunctionComponent ! "
};
