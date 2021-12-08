import { ReactComponent as Trash } from '../../../assets/trash.svg'

interface TrashButtonProps {
  onClick?: () => void
  size?: number
  dataCy?: string
}

const TrashButton: React.FC<TrashButtonProps> = ({
  dataCy,
  onClick,
  size = 24,
}) => {
  return (
    <div data-cy={dataCy} style={{ display: 'flex' }}>
      <Trash
        width={size}
        height={size}
        style={{ cursor: 'pointer' }}
        onClick={onClick}
      />
    </div>
  )
}

export default TrashButton
