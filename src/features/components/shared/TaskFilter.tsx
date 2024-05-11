import type { Dispatch, SetStateAction } from 'react'
import type { CSSProperties} from '../../../types'
import { TASK_PROGRESS_ID } from '../../../constants/app'

interface FilterMenuProps {
  setIsFilterOpen: Dispatch<SetStateAction<boolean>>
  setFilter: Dispatch<SetStateAction<Array<number>>>
}

const FilterMenu = ({setIsFilterOpen, setFilter}: FilterMenuProps): JSX.Element => {
  
  return (
    <div style={styles.menu}>
      <div 
      style={styles.menuItem}
      onClick={(): void => {
         setFilter([TASK_PROGRESS_ID.COMPLETED])
         setIsFilterOpen(false)
      }}
      >
        <span className="material-icons">done</span>Completed Tasks
      </div>
      <div 
      style={styles.menuItem}
      onClick={(): void => {
        setFilter([TASK_PROGRESS_ID.IN_PROGRESS, TASK_PROGRESS_ID.NOT_STARTED, TASK_PROGRESS_ID.WAITING])
        setIsFilterOpen(false)
      }}
      >
        <span className="material-icons">list</span>Uncompleted Tasks
      </div>
      <div 
      style={styles.menuItem}
      onClick={(): void => {
        setFilter([0])
         setIsFilterOpen(false)
      }}
      >
        <span className="material-icons">clear_all</span>All Tasks
      </div>
      <span
        className="material-icons"
        style={styles.closeIcon}
        onClick={(): void => {
          setIsFilterOpen(false)
        }}
      >
        close
      </span>
    </div>
  )
}

const styles: CSSProperties = {
  menu: {
    backgroundColor: '#fff',
    border: '1px solid gray',
    padding: '8px 16px',
    position: 'absolute',
    top: '-25px',
    left: '23%',
    zIndex: 10,
  },
  menuItem: {
    display: 'flex',
    marginBottom: '8px',
    cursor: 'pointer',
  },
  closeIcon: {
    position: 'absolute',
    top: '0px',
    right: '2px',
    cursor: 'pointer',
  },
}

export default FilterMenu