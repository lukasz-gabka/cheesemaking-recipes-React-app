import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const COLLAPSED = "Pogląd";
const EXPANDED = "Ukryj";

const ExpandButton = ({eventKey }) => {
  const [text, setText] = useState(COLLAPSED);

  const decoratedOnClick = useAccordionButton(eventKey, () => {
    text === COLLAPSED ? setText(EXPANDED) : setText(COLLAPSED)
  });
  
  return (
    <Button type="button" onClick={decoratedOnClick}>{text}</Button>
  );
};

export default ExpandButton;