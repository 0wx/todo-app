import { ReactComponent as Trash } from '../../../assets/trash.svg'

interface TrashButtonProps {
  onClick: () => void
}

const TrashButton: React.FC<TrashButtonProps> = ({ onClick }) => {
  return <Trash style={{ cursor: 'pointer' }} onClick={onClick} />
}

export default TrashButton
