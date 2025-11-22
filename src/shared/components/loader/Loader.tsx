import './loader.css'

const Loader = () => {
  return (
    <div className="loader">
        <div className="loader-header">
            <div className='skeleton skeleton-logo'>&nbsp;</div>
            <div className='skeleton skeleton-line medium loader-title'>&nbsp;</div>
            <div className='skeleton skeleton-line short'>&nbsp;</div>
        </div>
        <div className='skeleton skeleton-area'>&nbsp;</div>
        <div className='loader-footer'>
            <div className='skeleton skeleton-line short'>&nbsp;</div>
        </div>
    </div>
  )
}

export default Loader