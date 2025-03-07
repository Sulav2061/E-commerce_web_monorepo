import { Input } from "antd";
import { Controller } from "react-hook-form";
import styled from "styled-components";

export const SaujiInput = styled(Input)`
  width: 100%;
`;

export const SaujiFormInput = ({
  label,
  name,
  className,
  errors,
  required = false,
  control,
  inputType,
  errorMessage,
  ...props
}) => {
  const id = `input-${name}`;

  return (
    <div className="w-full">
      {label}
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          if (inputType === "password") {
            return (
              <SaujiInput.Password
                id={id}
                className={className}
                size="large"
                {...props}
                {...field}
              />
            );
          }
          return (
            <SaujiInput
              id={id}
              className={className}
              size="large"
              {...props}
              {...field}
            />
          );
        }}
      />
    </div>
  );
};
