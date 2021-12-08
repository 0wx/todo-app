import { ReactComponent as PencilLogo } from '../../../assets/pencil.svg'

interface EditButtonProps {
  onClick: () => void
  size?: number
  dataCy?: string
}

const EditButton: React.FC<EditButtonProps> = ({
  dataCy,
  onClick,
  size = 24,
}) => {
  return (
    <div data-cy={dataCy} style={{ cursor: 'pointer' }} onClick={onClick}>
      <PencilLogo width={size} height={size} />
    </div>
  )
}

export default EditButton
