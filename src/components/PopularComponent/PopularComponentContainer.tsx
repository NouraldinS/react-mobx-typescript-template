import React, { useEffect } from 'react';
import { useStore } from '../../stores';
import { PopularComponent as PopularComponentPure } from './PopularComponent';

export const PopularComponent: React.FC<never> = (props) => {
  const { dataAlphaStore } = useStore();

  /**
   * @description When the store data changes, action [whatever] is gonna need to be fired in order to...
   */
  useEffect(() => {
    // Something when the data changes
  }, [dataAlphaStore.data]);

  /**
   * @description Functions may need to specify this field if they're too inobvious
   * 
   * @param {any} any Function parameter, to do something
   * @returns {any} Whatever return might be, should be documented 
   */
  const onChange = (any) => {
    // action;
  }

  /**
   * @description Functions may need to specify this field if they're too inobvious
   * 
   * @param {any} any Function parameter, to do something
   * @returns {any} Whatever return might be, should be documented 
   */
  const onSomethingHover = (any) => {
    // action;
  }

  /**
   * @description Functions may need to specify this field if they're too inobvious
   * 
   * @param {any} any Function parameter, to do something
   * @returns {any} Whatever return might be, should be documented 
   */
  const onSomethingClick = (any) => {
    //action;
  }

  /**
   * @description Functions may need to specify this field if they're too inobvious
   * 
   * @param {any} any Function parameter, to do something
   * @returns {any} Whatever return might be, should be documented 
   */
  const onSomethingDoesSomething = (any) => {
    //action;
  }

  return (
    <PopularComponentPure
      data={dataAlphaStore.data}
      onChange={onChange}
      onSomethingHover={onSomethingHover}
      onSomethingClick={onSomethingClick}
      onSomethingDoesSomething={onSomethingDoesSomething}
    />
  )
};