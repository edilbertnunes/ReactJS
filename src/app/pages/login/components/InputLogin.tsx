import React from "react";

interface iInputLoginProps {
  type?:string
  label: string;
  value: string;
  // ao colocar a "?" no componente, ele deixa de ser obrigatório
  onPressEnter?: () => void;
  onChange: (newValue: string) => void;
}
export const InputLogin = React.forwardRef<HTMLInputElement,iInputLoginProps>((props, ref) => {
  return (
    <label>
      <span>{props.label}</span>
      <input
        ref={ref}
        type={props.type}
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        onKeyDown={e => e.key === 'Enter'          // input de senha foi focada após o enter
        ? props.onPressEnter && props.onPressEnter() 
        : undefined
        }
      />
    </label>
  );
});
