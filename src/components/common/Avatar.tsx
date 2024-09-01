import useUser from '../../hooks/useUser';
import styles from './Avatar.module.scss'

interface AvatarProps {
  userId?: string,
  src?: string,
  alt?: string,
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'xl' | 'xxl' | 'huge' | 'gigantic' | 'colossal' | number
}

export default function Avatar({ userId = "", src, alt, size = 'medium' }: AvatarProps) {
  const { user, loading, error }: any = useUser(userId);

  const defaultImage = 'https://images.pexels.com/photos/11213182/pexels-photo-11213182.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'; // ตั้งค่า path ของรูป default

  const imageUrl = src || (user && user.avatarUrl) || defaultImage;

  const sizeClass = typeof size === 'string' ? styles[size] : '';

  const getSize = () => {
    if (typeof size === 'number') {
      return { width: `${size}px`, height: `${size}px` };
    }
    return {};
  };

  return (
    <img
      src={imageUrl}
      alt={alt || (user && user.username) || 'User avatar'}
      className={`${styles.avatar} ${sizeClass}`}
      style={getSize()}
    />
  )
}
