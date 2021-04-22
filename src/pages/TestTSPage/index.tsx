import { FC } from 'react'
import PropTypes from 'prop-types'

interface IProps {
    name?: string
}

type Props = IProps;

const TestTSPage: FC<Props> = ({ name = '11' }) => {
    return (
        <div>TestTSPage{name}</div>
    );
}

// 
// 直接设置默认值
// 设置defaultProps 生效
// TestTSPage.defaultProps = {
//     name: '12'
// };

export default TestTSPage;