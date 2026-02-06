import { type FC } from 'react';
import { createClassPrefix } from '../../utils/classPrefix';

const cls = createClassPrefix('basic-example');

export const Example: FC<{
  /**
   * @description 属性描述
   * @default "默认值"
   */
  title?: string;
}> = ({ title = '默认值' }) => <h1 className={cls()}>{title}</h1>;
