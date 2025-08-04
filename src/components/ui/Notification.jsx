import React from 'react';

const Notification = ({ notification }) => {
  if (!notification) return null;

  const getBackgroundColor = (type) => {
    switch (type) {
      case 'success': return 'bg-green-500';
      case 'error': return 'bg-red-500';
      default: return 'bg-blue-500';
    }
  };

  return (
    <div className={`fixed top-5 right-5 px-6 py-4 rounded-lg shadow-lg z-50 max-w-sm transition-all duration-300 transform ${getBackgroundColor(notification.type)} text-white`}>
      {notification.message}
    </div>
  );
};

export default Notification;