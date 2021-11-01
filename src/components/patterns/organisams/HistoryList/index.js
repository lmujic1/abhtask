import PropTypes from 'prop-types'
import { Col } from 'reactstrap'
import HistoryCard from '../../molecules/HistoryCard'

const HistoryList =({items,page})=>{
    return items?.map((item,index)=>{
        item.id=(page-1)*10+index+1
            return(
                <Col lg={{size:6}}  key={`person-${index}`} className='p-lg-0'>
                    <HistoryCard className={'mx-2 mb-3'} item={item}></HistoryCard>
                </Col>
            )
        })
}

HistoryList.propTypes = {
    page:PropTypes.number,
    items:PropTypes.array
}
export default HistoryList