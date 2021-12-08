import { ReactComponent as PencilLogo } from '../../../assets/pencil.svg'

interface EditButtonProps {
  onClick: () => void
  size?: number
}

const EditButton: React.FC<EditButtonProps> = ({ onClick, size = 24 }) => {
  return (
    <div style={{ cursor: 'pointer' }} onClick={onClick}>
      <PencilLogo width={size} height={size} />
    </div>
  )
}

export default EditButton
