import dynamic from 'next/dynamic'
const Constants =()=>{
    const detailTabs = [
       {
          id        : 1,
          key       : 'dictionary',
          tabName   : 'Dictionary',
          component : dynamic(()=>import('../../../containers/PersonComponent'))
        },
        { 
          id        : 2,
          key       : 'history',
          tabName   : 'History',
          component : dynamic(()=>import('../../../containers/HistoryComponent'))
        }
       
      ]
    
      return detailTabs
}

export default Constants