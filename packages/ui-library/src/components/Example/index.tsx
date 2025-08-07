import { type FC } from 'react';

export const Example: FC<{
  /**
   * @description 属性描述
   * @default "默认值"
   */
  title?: string;
}> = ({ title = '默认值' }) => <h1>{title}</h1>;
