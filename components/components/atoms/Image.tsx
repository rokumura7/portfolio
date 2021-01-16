import SizeType from '../../../utils/Styles/Size'
export interface ImageProps {
  path: string
  size?: SizeType
  round?: boolean
}

const getStyle = (props: ImageProps) => {
  const styles = ['test']
  switch (props.size) {
    case 'sm':
      styles.push('w-16')
      break
    case 'lg':
      styles.push('w-48')
      break
    default:
      styles.push('w-32')
      break
  }
  if (props.round) styles.push('rounded-full')
  return styles.join(' ')
}

const Image = (props: ImageProps) => (
  <img src={props.path} className={getStyle(props)} />
)

export default Image
