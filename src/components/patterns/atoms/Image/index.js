import PropTypes from 'prop-types'
import classNames from 'classnames'

//import styles from './Image.module.scss'

const Image = ({
  alt,
  className,
  height,
  onError,
  src,
  title,
  width,
  onClick
}) => {
  return (
    <img
      alt={alt}
      className={classNames(className/* , styles.image */)}
      height={height}
      onError={onError}
      src={src}
      title={title}
      width={width }
      onClick={onClick}
      style={{
        aspectRatio: `attr(${width})/attr(${height})`
      }}
    />
  )
}

Image.propTypes = {
  /** Specifies an alternate text for the image, if the image for some reason cannot be displayed */
  alt       : PropTypes.string,
  /** Change style */
  className : PropTypes.string,
  height    : PropTypes.number,
  onError   : PropTypes.func,
  /** Specifies the path to the image */
  src       : PropTypes.string,
  /** Show on hover */
  title     : PropTypes.string,
  width     : PropTypes.number,
  onClick   : PropTypes.func

}

Image.defaultProps = {
}

export default Image
