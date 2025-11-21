import './status.css'

type StatusProp = {
    type: 'in-progress' | 'pending' | 'completed';
}

const statusMap = {
    'in-progress': '#FFB03C',
    'pending': '#D0D0D0',
    'completed': '#368A04'
}

const Status = ({type}: StatusProp) => {
    const statusBg = statusMap[type];
  return (
    <div className='status'>
        <span 
            className='status-type'
            style={{backgroundColor: statusBg}}
        ></span>
        <span className='status-text'>{type}</span>
    </div>
  )
}

export default Status