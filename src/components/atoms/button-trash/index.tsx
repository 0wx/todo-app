import { ReactComponent as Trash } from '../../../assets/trash.svg'

interface TrashButtonProps {
  onClick: () => void
  size?: number
}

const TrashButton: React.FC<TrashButtonProps> = ({ onClick, size = 24 }) => {
  return <Trash width={size} height={size} style={{ cursor: 'pointer' }} onClick={onClick} />
}

export default TrashButton
