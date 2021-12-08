import styles from './styles.module.scss'
import { ReactComponent as FailLogo } from '../../../assets/fail.svg'
const { container } = styles

interface AlertProps {
  label: string
}
const AlertSuccess: React.FC<AlertProps> = ({ label }) => (
  <div className={container}>
    <div>
      <FailLogo />
    </div>
    <span>{label}</span>
  </div>
)

export default AlertSuccess
