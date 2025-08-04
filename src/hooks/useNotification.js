import { useState } from 'react';
import { ANIMATION_CONFIG } from '../utils/constants';

export const useNotification = () => {
  const [notification, setNotification] = useState(null);

  const showNotification = (message, type = 'info') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), ANIMATION_CONFIG.NOTIFICATION_DURATION);
  };

  const hideNotification = () => {
    setNotification(null);
  };

  return { notification, showNotification, hideNotification };
};