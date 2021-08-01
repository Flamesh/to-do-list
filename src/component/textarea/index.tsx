import styled from "styled-components";

const Textarea = styled.textarea`
  width: 100%;
  font-size: 1rem;
  padding: 1rem;
  width: calc(100% - 2rem);
`;
const Title = styled.p`
  font-weight: bold;
  text-align: left;
`;
interface ITextArea {
  label?: string;
  value?: string;
  onChange?: (e: any) => void;
  rows?: number;
}
const TextArea: React.FC<ITextArea> = (props) => {
  const { value = "", onChange, label = "", rows = 4 } = props;
  const handleChange = (e: any) => {
    onChange && onChange(e);
  };
  return (
    <div>
      <Title>{label}</Title>
      <Textarea value={value} onChange={handleChange} rows={rows} />
    </div>
  );
};
export default TextArea;
