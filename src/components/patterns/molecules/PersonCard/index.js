import PropTypes from 'prop-types'
import classNames from 'classnames'

import { Col, Row } from "reactstrap"
import Image from '../../atoms/Image'

const PersonCard = ({className, item}) =>{
    return(
            <Row className={classNames('shadow','p-3',className,'h-100')}>
                <Col xs={{size:3}} className='p-0 align-self-center'>
                <Image 
                    height={80}
                    width={80}
                    src='https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg'
                />
                </Col>
                <Col xs={{size:9}} className='text-start align-self-center'>
                    <div className='text-end px-2'><b className='rounded-pill text-center shadow-lg px-2 py-1'>no: {item?.idNum}</b></div>
                    <div ><b>Id: </b>{item?.id}</div>
                    <div ><b>Name: </b>{item?.name}</div>
                    <div><b>Phone number: </b>{item?.phoneNumber}</div>
                </Col>
            </Row>
    )
}

PersonCard.propTypes = {
    className:PropTypes.string,
    item:PropTypes.object
}

export default PersonCard