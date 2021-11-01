import { useEffect, useState } from 'react'
import {Row,Col, Input} from 'reactstrap'
import PersonService from '../../../services/PersonService/PersonService'
import PropTypes from 'prop-types'
import Paging from '../../patterns/molecules/Paging'
import PersonList from '../../patterns/organisams/PersonList'
import HistoryService from '../../../services/HistoryService/HistoryService'

const PersonComponent = ({itemsToShow}) =>{
    const [items,setItems] = useState([])
    const [numFound,setNumFound] = useState(0)
    const [query,setQuery] = useState('')
    const [page,setPage]=useState(1)

    useEffect(()=>{
        PersonService.getDictionary(query,page).then((res)=>{
            setNumFound(res.numFound.data)
            setItems(res.content.data)
        })
    },[])

    useEffect(()=>{
        if(query>0) {

            const executionTime = new Date()
            let endpointExecutionTime=null
            PersonService.getDictionary(query,page).then((res)=>{
                setNumFound(res.numFound.data)
                setItems(res.content.data)
                endpointExecutionTime = new Date()
            })
            const requestQuery = `${'http://localhost:8080/api/v1/phone-numbers/autocomplete'}?query=${query}`
            const response = items?.map((item)=>{
                return {n:item.name, pN: item.phoneNumber}
            })

            const params = {
                requestQuery:requestQuery,
                response:JSON.stringify(response),
                executionTime:executionTime,
                endpointExecutionTime:endpointExecutionTime,
            }

            if(query?.length>5){
                setTimeout(()=>{
                    HistoryService.addHistoryItem(params).then((res)=>{
                        console.log('Status od adding history item', res);
                    })
                },3000)
            }
        }
    },[query])

    useEffect(()=>{
        PersonService.getDictionary(query,page).then((res)=>{
            setNumFound(res.numFound.data)
            setItems(res.content.data)
        })
    },[page])

    const renderItems = () =>{
        return items?.length>0 ? (
            <Row className='py-4'>
                <PersonList items={items} page={page}></PersonList>
            </Row>
        ):
       (<Row>
            <Col>
                <div>No result</div>
            </Col>
        </Row>)

        
        
    }

    const renderSearch = () =>{
        return (
            <Row className='m-2 my-4 text-start'>
                <Col lg={{size:6}}><div className='py-1'>Search person by phoneNumber (type number without space and -): </div></Col>
                <Col lg={{size:6}}><Input type='text' className='w-100' onChange={(e)=>{handleOnChange(e.target.value)}}></Input></Col>
            </Row>
        )
    }

    const handleOnChange = (value) =>{
        setTimeout(()=>{
            setQuery(value)
        },2000)
    }


    const renderPaging = () => {
        return items?.length > 0 && numFound >0 && (
            <Row>
                <Col>
                    <Paging
                    page={page}
                    pages={Math.ceil(numFound / 10)}
                    changePage={(e)=>{setPage(e)}}
                    ></Paging>
                </Col>
            </Row>
        )
    }

    return(
        <div className='py-4'>
           {renderSearch()}
           {renderItems()}
           {renderPaging()}
        </div>
    )
}
PersonComponent.propTypes = {
    itemsToShow: PropTypes.number
}
PersonComponent.defaultProps = {
    itemsToShow:3
}
export default PersonComponent