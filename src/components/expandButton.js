import { useState } from 'react';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Button from 'react-bootstrap/Button';

const COLLAPSED = "Pogląd";
const EXPANDED = "Ukryj";

const ExpandButton = ({eventKey }) => {
  const [text, setText] = useState(COLLAPSED);

  const decoratedOnClick = useAccordionButton(eventKey, () => {
    text === COLLAPSED ? setText(EXPANDED) : setText(COLLAPSED)
  });
  
  return (
    <Button 
      className="navButton button mx-1" 
      type="button" 
      onClick={decoratedOnClick}
    >
      {text}
    </Button>
  );
};

export default ExpandButton;