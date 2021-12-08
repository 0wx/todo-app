import styles from './styles.module.scss'
import { ReactComponent as FailLogo } from '../../../assets/fail.svg'
const { container } = styles

interface AlertProps {
  label: string
}
const AlertSuccess: React.FC<AlertProps> = ({ label }) => (
  <div data-cy="modal-information" className={container}>
    <div data-cy="modal-information-icon">
      <FailLogo />
    </div>
    <span data-cy="modal-information-title">{label}</span>
  </div>
)

export default AlertSuccess
