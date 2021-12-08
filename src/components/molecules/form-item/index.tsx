import { useState } from 'react'
import { Button, ButtonClose, InputText, Select } from '../../atoms'
import { Modal } from '../../drawer'
import { priority, intialFormItem } from '../../../const'
import { ItemPayload, OptionsValue, UpdateItemPayloadWithId } from 'todo-types'
import { useForm } from '../../../helpers/hooks/use-form'
import styles from './styles.module.scss'

interface FormItemProps {
  onClose: () => void
  id: number
  onSubmit: (payload: ItemPayload) => void
  onUpdate: (payload: UpdateItemPayloadWithId) => void
  initialValue?: UpdateItemPayloadWithId
}

const { container, head, form, footer, section } = styles
const FormItem: React.FC<FormItemProps> = ({
  onClose,
  id,
  onSubmit,
  onUpdate,
  initialValue,
}) => {
  const [isDisabled, setIsDisabled] = useState<boolean>(true)
  intialFormItem.activity_group_id = id

  const { state, handleStateSchange } = useForm(initialValue ?? intialFormItem)

  const handleItemName = (text: string) => {
    if (isDisabled && !!text) setIsDisabled(false)
    if (!isDisabled && !text) setIsDisabled(true)
    handleStateSchange('title', text)
  }
  const handlePriorityChange = (priority: OptionsValue) => {
    handleStateSchange('priority', priority.value)
  }
  return (
    <Modal style={{ height: '403px', width: '830px' }} onClickOutSide={onClose}>
      <div className={container}>
        <div className={section}>
          <section className={head}>
            <div>{initialValue ? 'Edit Item' : 'Tambah List Item'}</div>
            <ButtonClose style={{ marginRight: '10px' }} onClick={onClose} />
          </section>
          <section className={form}>
            <InputText
              placeholder="Tambahkan nama list item"
              label="Nama List Item"
              onChange={handleItemName}
              value={initialValue?.title}
            />
            <Select
              option={priority}
              label="Priority"
              onChange={handlePriorityChange}
            />
          </section>

          <section className={footer}>
            <Button
              label={'Simpan'}
              isDisabled={isDisabled}
              onClick={() => {
                if (!initialValue) onSubmit(state as ItemPayload)
                else onUpdate(state as UpdateItemPayloadWithId)
              }}
            />
          </section>
        </div>
      </div>
    </Modal>
  )
}

export default FormItem
