import PropTypes from 'prop-types'


const Paging = ({ pages, page, changePage, visiblePages, offset }) => {
  const renderPagination = (pages, page, visiblePages, changePage, offset) => {
    const pageLinks = []
    const pagesArray = []

    for (let i = offset; i <= offset + pages - 1; i++) {
      pagesArray.push(i)
    }

    const start = Math.max((page - (visiblePages - 1) / 2), 1)
    const end = Math.min((page + (visiblePages - 1) / 2), pages)

    // Index of the active element in the pages array
    const positionInPagesArray = pagesArray.indexOf(page)

    const pagesBefore = Math.floor((visiblePages - 1) / 2)
    const pagesAfter = Math.ceil((visiblePages - 1) / 2)

    const startPosition = Math.max(positionInPagesArray - pagesBefore, 0)
    const endPosition = Math.min(positionInPagesArray + pagesAfter, pagesArray.length - 1)

    // Add prev button
    if (positionInPagesArray > 0) {
      pageLinks.push(
        <div key='prev_button'>
          <span
            className={`border rounded p-2 ${'m-2 pr-3 cursor'}`}
            aria-label='Previous'
            onClick={() => changePage(pagesArray[positionInPagesArray - 1])}
          >
            <span className='sr-only'>Previous</span>
          </span>
        </div>
      )
    }

    // Add first page
    if (page > 1 && start > 1) {
      pageLinks.push(
        <div className='page-item' key='first_page'>
          <span className={`border rounded p-2 ${'m-3 cursor'}`} onClick={() => changePage(1)}>{1}</span>
        </div>
      )
      if (page >= 4) {
        pageLinks.push(
          <li className='disabled' key='prev...'>
            <span>
              ...
            </span>
          </li>
        )
      }
    }

    // Add the current page padded by the number visible pages
    for (let i = startPosition; i <= endPosition; i++) {
      const currentPage = pagesArray[i]
      if (currentPage === page) {
        pageLinks.push(
          <div className={`${'active'}`} key={`page_${currentPage}`}>
            <span className=' bg-secondary m-3 cursor p-2 border rounded'>{currentPage}</span>
          </div>
        )
      } else {
        pageLinks.push(
          <div key={`page_${currentPage}`}>
            <span className={`border rounded p-2 ${'m-3 cursor'}`} onClick={() => changePage(currentPage)}>{currentPage}</span>
          </div>
        )
      }
    }

    // Add last page
    if (page < (pages - 1)) {
      if (end < pages - 1) {
        pageLinks.push(
          <li className='disabled' key='next...'>
            <span>
              ...
            </span>
          </li>
        )
      }

      pageLinks.push(
        <div key='last_page'>
          <span className={`border rounded p-2 ${'m-3 cursor'}`} aria-label='Next' onClick={() => changePage(pages)}>
            <span className='sr-only'>{pages}</span>
          </span>
        </div>
      )
    }

    // Add next button
    if (positionInPagesArray < pages - 1) {
      pageLinks.push(
        <div key='next_button'>
          <span
            className={`border rounded p-2 ${'m-2 cursor'}`}
            aria-label='Next'
            onClick={() => changePage(pagesArray[positionInPagesArray + 1])}
          >
            <span className='sr-only'>Next</span>
          </span>
        </div>
      )
    }

    return (
      <div className={`${'pagination justify-content-around'}`}>
        {pageLinks}
      </div>
    )
  }

  return pages >= 1 && (
    <div className='d-flex justify-content-center cursor-default'>
      {renderPagination(pages, page, visiblePages, changePage, offset)}
    </div>

  )
}

Paging.propTypes = {
  pages        : PropTypes.number,
  page         : PropTypes.number.isRequired,
  changePage   : PropTypes.func,
  visiblePages : PropTypes.number,
  offset       : PropTypes.number
}

Paging.defaultProps = {
  visiblePages : 3,
  className    : '',
  offset       : 1
}

export default Paging
