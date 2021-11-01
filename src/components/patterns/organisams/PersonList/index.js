import PropTypes from 'prop-types'

import { Col } from 'reactstrap'

import PersonCard from '../../molecules/PersonCard'

const PersonList =({items,page})=>{
    return items?.map((item,index)=>{
        item.idNum=(page-1)*10+index+1
            return(
                <Col lg={{size:6}}  key={`person-${index}`} className='p-lg-0'>
                    <PersonCard className={'mx-2 mb-3'} item={item}></PersonCard>
                </Col>
            )
        })
}

PersonList.propTypes = {
    page:PropTypes.number,
    items:PropTypes.array
}
export default PersonList