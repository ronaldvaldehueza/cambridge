import { useNavigate } from 'react-router-dom';


interface TextWithBoldfaceProps {
  text: string;
}

// Delayed navigation
export function useDelayedNavigate() {
  const navigate = useNavigate();

  return (path: string, delay: number) => {
    setTimeout(() => {
      navigate(path);
    }, delay);
  }
}

export function TextWithBoldface(props: TextWithBoldfaceProps) {
  const { text } = props;
  
  const textParts = text.split('*'); // Split text with '*' to an array

  // Map through parts
  const emboldenedText = textParts.map((textPart, index) => {
      // If index is even return plain text. If index is odd return text enclosed with <b>
      if (index % 2 === 0) {
          return textPart;
      } else {
          return <b>{textPart}</b>; // Wrap the text between '*' with <b></b>
      }
  });

  return <>{emboldenedText}</>;

}