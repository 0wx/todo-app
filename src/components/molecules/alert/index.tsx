import styles from './styles.module.scss'
import { ReactComponent as AlertLogo } from '../../../assets/alert.svg'
import { Button } from '../../atoms'

interface AlertProps {
  onYes: () => void
  onNo: () => void
  type: 'List Item' | 'Activity'
  title: string
  labelYes?: string
  labelNo?: string
}

const { container, logo, caption, targetTitle, btn, text } = styles

const Alert: React.FC<AlertProps> = ({
  onYes,
  onNo,
  type,
  title,
  labelYes = 'Hapus',
  labelNo = 'Batal',
}) => {
  const _caption = `Apakah anda yakin menghapus ${type}`
  return (
    <div className={container}>
      <div className={logo}>
        <AlertLogo />
      </div>
      <div className={text}>
        <div className={caption}>{_caption}</div>
        <div className={targetTitle}>“{title}”</div>
      </div>
      <div className={btn}>
        <Button
          onClick={onNo}
          label={labelNo}
          style={{ color: '#4a4a4a', backgroundColor: '#f4f4f4' }}
        />
        <Button
          onClick={onYes}
          label={labelYes}
          style={{ color: '#fff', backgroundColor: '#ED4C5C' }}
        />
      </div>
    </div>
  )
}

export default Alert
