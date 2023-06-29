import { Wrapper, Input, Icon } from './Searchbox.styled';

const SearchBox = ({ value, onChange }) => {
  return (
    <Wrapper>
      <Icon />
      <Input
        type="text"
        value={value}
        onChange={e => {
          onChange(e.target.value);
        }}
      />
    </Wrapper>
  );
};
export default SearchBox;
