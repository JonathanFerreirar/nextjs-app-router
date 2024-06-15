import { fireEvent, render, screen } from '@testing-library/react';

import Button from '@/components/button/button';

const buttonClick = jest.fn();

describe(' Component', () => {
  it('should be able to render  component correctly', () => {
    render(<Button onClick={buttonClick}>Button</Button>);

    const containerElement = screen.getByTestId('test_button');

    fireEvent.click(containerElement);

    expect(buttonClick).toHaveBeenCalled();
    expect(buttonClick).toHaveBeenCalledTimes(1);
    expect(containerElement).toBeInTheDocument();
    expect(containerElement).toHaveTextContent('Button');
  });
});
