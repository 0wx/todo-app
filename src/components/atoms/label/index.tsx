interface LabelProps {
  color: string
  size?: string
  dataCy: string
}

const Label: React.FC<LabelProps> = ({ dataCy, children, color, size = '14px' }) => {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
    >
      <div
        data-cy={dataCy}
        style={{
          backgroundColor: color,
          borderRadius: '100%',
          height: size,
          width: size,
        }}
      />
      <div style={{ fontSize: size, marginLeft: size, marginRight: size }}>
        {children}
      </div>
    </div>
  )
}

export default Label
