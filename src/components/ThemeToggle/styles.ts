import styled from "styled-components";

export const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const ToggleLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
`;

export const ToggleText = styled.span`
  color: ${({ theme }) => theme.text};
  font-weight: 700;
  font-size: 14px;
`;

export const ToggleWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
`;

export const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: #a445ed;
  }

  &:checked + span:before {
    transform: translateX(20px);
  }
`;

export const ToggleSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #757575;
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 14px;
    width: 14px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
`;
