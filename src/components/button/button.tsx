import React from 'react';

const Button = ({ children, onClick }: {
children: React.ReactNode,
onClick?: () => void
}) => <button type='button' onClick={onClick} data-testid='test_button'>{children}</button>;

export default Button;
