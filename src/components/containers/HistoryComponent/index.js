import { useEffect, useState } from 'react'
import {Container,Row,Col, Input} from 'reactstrap'
import PropTypes from 'prop-types'
import Paging from '../../patterns/molecules/Paging'
import HistoryList from '../../patterns/organisams/HistoryList'
import HistoryService from '../../../services/HistoryService/HistoryService'

const HistoryComponent = ({itemsToShow}) =>{
    const [items,setItems] = useState([])
    const [query,setQuery] = useState({ 
        name:null,
        phoneNumber:null,
        query:null,
        date:null,
        sort:null,
        page:null,
        perPage:null
    })
    const [page,setPage]=useState(1)

    let [searchValue, setSearchValue] = useState({
        name : {
            key:'name',
            text:'Search history by name',
            disable:false,
            default:''
        },
        phoneNumber: {
            key:'phoneNumber',
            text:'Search history by phone number',
            disable:false,
            default:''
        },
        query: {
            key:'query',
            text:'Search history by query',
            disable:false,
            default:''
        },
        date:{
            key:'date',
            text:'Search history by date',
            disable:false,
            default:''
        },
        sort:{
            key:'sort',
            text:'Sort history result by',
            disable:false,
            default:'id '
        },
        page:{
            key:'page',
            text:'Start page (default 1)',
            disable:false,
            default:'1'
        },
        perPage:{
            key:'perPage',
            text:'Per page (default 10)',
            disable:false,
            default:'10'
        }}
    )

    useEffect(()=>{
       /*  HistoryService.getDictionary().then((res)=>{
            console.log(res)
            setItems(res.data)
        }) */
    },[])

    useEffect(()=>{
        setTimeout(()=>{
            HistoryService.getHistory(query).then((res)=>{
                setItems(res.data)
            })
        },2000)
    },[query])


    const renderItems = () =>{
        const showFrom = (page-1)*10
        const showTo = items.length < page*10 ? items.length : page*10
        return items?.length>0 ? (
            <Row className='py-4'>
                <HistoryList items={items?.slice(showFrom,showTo)} page={page}></HistoryList>
            </Row>
        ):
       (<Row>
            <Col>
                <div>No result</div>
            </Col>
        </Row>)
    }

    const renderSearch = () =>{
        return Object.keys(searchValue).map((key)=>{
            return (
                <Row className='my-2 my-4 text-start' key={key}>
                    <Col lg={{size:4}}><div className='py-1'>{searchValue[key].text}</div></Col>
                    <Col lg={{size:4}}><Input defaultValue={searchValue[key].default} disabled={searchValue[key].disable} type='text' className='w-100' onChange={(e)=>{handleOnChange(e.target.value,key)}}></Input></Col>
                </Row>
            )
        })
    }

    const handleOnChange = (value,key) =>{
        Object.keys(searchValue).map((s)=>{
            const newObject = searchValue[s]
            if(s!=='sort' && s!=='page' && s!=='perPage' && s!==key){
                newObject.disable=true
            }
            return newObject
        })
        setQuery({
            ...query,
            [key]: value
        })
    }

    const renderPaging = () => {
        return items?.length > 0 && (
            <Row>
                <Col>
                    <Paging
                    page={page}
                    pages={Math.ceil(items?.length / 10)}
                    changePage={(e)=>{setPage(e)}}
                    ></Paging>
                </Col>
            </Row>
        )
    }

    return(
        <Container className='py-4'>
           {renderSearch()}
           {renderItems()}
           
           {renderPaging()}
        </Container>
    )
}
HistoryComponent.propTypes = {
    itemsToShow: PropTypes.number
}
HistoryComponent.defaultProps = {
    itemsToShow:3
}
export default HistoryComponent