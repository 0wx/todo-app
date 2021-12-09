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
      <div data-cy="modal-add" className={container}>
        <div className={section}>
          <section className={head}>
            <div data-cy="modal-add-title">
              {initialValue ? 'Edit Item' : 'Tambah List Item'}
            </div>
            <ButtonClose
              data-cy="modal-add-close-button"
              style={{ marginRight: '10px' }}
              onClick={onClose}
            />
          </section>
          <section className={form}>
            <InputText
              dataCyLabel="modal-add-name-title"
              dataCyInput="modal-add-name-input"
              placeholder="Tambahkan nama list item"
              label="Nama List Item"
              onChange={handleItemName}
              value={initialValue?.title}
            />
            <Select
              dataCyLabel="modal-add-priority-title"
              dataCyInput="modal-add-priority-item"
              option={priority}
              label="Priority"
              onChange={handlePriorityChange}
            />
          </section>

          <section className={footer}>
            <Button
              dataCy="modal-add-save-button"
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
