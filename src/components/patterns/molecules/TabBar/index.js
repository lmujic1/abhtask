import PropTypes from 'prop-types'
import classNames from 'classnames'

import { useState } from "react"
import { Col, Nav, NavItem, NavLink, Row, TabContent, TabPane } from "reactstrap"
import Constants from './contants'


const TabBar = ({className}) =>{
    //return <div>test</div>
        const tabs = Constants()

        // state
        const [activeTab, setActiveTab] = useState(0)
        const toggle = tab => { if (activeTab !== tab) setActiveTab(tab) }
      
      
        // Render tabs
        const renderTabs = () => {
          const tabsHtml = tabs?.map((item, index) => {
            return (
              <NavItem key={`details-tab-${index}`} className={classNames('cursor')}>
                <NavLink
                  className={classNames({ active: activeTab === item.id })}
                  onClick={() => { toggle(item.id) }}
                >
                  <div className={classNames()}>
                    {item.tabName}
                  </div>
                </NavLink>
              </NavItem>
            )
          })
          return tabsHtml
        }
      
        const renderTabContent = () => {
          const tabContentHtml = tabs?.map((item, index) => {
            const Component = item.component
            return (
              <TabPane
                key={`details-tab-content-${index}`}
                tabId={item.id}
              >
                <Component className='py-4' />
              </TabPane>
            )
          })
          return tabContentHtml
        }
      
        return (
          <div className={classNames(className)}>
            <Row>
              <Col>
                <Nav tabs className={classNames('')}>{renderTabs()}</Nav>
                <TabContent activeTab={activeTab}>{renderTabContent()}</TabContent>
              </Col>
            </Row>
          </div>
        )
}


TabBar.propTypes = {
    className:PropTypes.string,
    item:PropTypes.object
}
export default TabBar

