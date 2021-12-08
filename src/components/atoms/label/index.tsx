interface LabelProps {
  color: string
  size?: string
}

const Label: React.FC<LabelProps> = ({ children, color, size = '14px' }) => {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
    >
      <div
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
