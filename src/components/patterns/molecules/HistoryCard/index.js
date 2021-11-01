import PropTypes from 'prop-types'
import classNames from 'classnames'

import { Col, Row } from "reactstrap"
import { getDate } from '../../../../lib/date'

const HistoryCard = ({className, item}) =>{
    return(
            <Row className={classNames('shadow','p-3',className,'h-100')}>
                <Col className='text-start align-self-center'>
                    <div className='text-end px-2'><b className='rounded-pill text-center shadow-lg px-2 py-1'>no: {item?.id}</b></div>
                    <div ><b>Request query: </b>{item?.requestQuery}</div>
                    <div style={{height:90,overflowY:'scroll'}}><b>Response: </b>{JSON.stringify(JSON.parse(item?.response),null,2)}</div>
                    <div ><b>Time of starting execution: </b>{getDate(item?.executionTime)}</div>
                    <div ><b>Endpoint execution time: </b>{getDate(item?.endpointExecutionTime)}</div>
                </Col>
            </Row>
    )
}

HistoryCard.propTypes = {
    className:PropTypes.string,
    item:PropTypes.object
}

export default HistoryCard