import styles from './styles.module.scss'
import { ReactComponent as SuccessLogo } from '../../../assets/success.svg'
const { container } = styles
interface AlertProps {
  label: string
}
const AlertSuccess: React.FC<AlertProps> = ({ label }) => (
  <div className={container}>
    <div>
      <SuccessLogo />
    </div>
    <span>{label}</span>
  </div>
)

export default AlertSuccess
