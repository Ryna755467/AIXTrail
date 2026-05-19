import { type FC } from 'react';

const Global: FC<{ text: string }> = ({ text }) => (
  <span style={{ color: '#f50', marginLeft: 4 }}>{text}</span>
);

export default Global;
